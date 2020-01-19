import fs from "fs";
import gulp from "gulp";
import clean from "gulp-clean";
import flatten from "gulp-flatten";
import file from "gulp-file";
import gulpif from "gulp-if";
import cleanCSS from "gulp-clean-css";
import insert from "gulp-insert";
import autoprefixer from "gulp-autoprefixer";
import concat from "gulp-concat";
import sass from "gulp-sass";
import createSassConfig from "./createSassConfig";
import createSvg from "../svg/create";

export default async (curDir, config, dir, opts) => {
  const options = {
    compressed: false,
    flattened: false,
    ...opts
  };
  const deleteFile = async file => {
    return await fs.promises.unlink(file);
  }
  const deleteDir = async localDir => {
    try {
      const files = await fs.promises.readdir(localDir);
      const deleteFiles = async(files) => {
        return await Promise.all(files.map(file => deleteFile(`${localDir}/${file}`)));
      }
      await deleteFiles(files);
      await fs.promises.rmdir(localDir);
    } catch (err) {
      console.error("Error cleaning directory!", err);
    }
  }

  const cleanDirectories = async () => {
    console.log("clean directories");
    const directoryItems = await fs.promises.readdir(`${dir}/dist`);

    const deleteItem = async(item) => {
      const file = `${dir}/dist/${item}`;
      const stat = await fs.promises.lstat(file);
      if (stat.isFile()) {
        return await deleteFile(file);
      } else {
        return await deleteDir(file);
      }
    }
    const deleteItems = async(items) => {
      return await Promise.all(items.map(item => deleteItem(item)));
    }

    return await deleteItems(directoryItems);
  };

  const createFolderStructure = async () => {
    console.log('create folder structure');
    return await fs.promises.mkdir(`${dir}/dist/icons`);
  };

  const createConfig = () => {
    console.log('create config');
    // need to validate the config...
    file([{
      name: "config.scss",
      source: createSassConfig(config),
    }], { src: true })
      .pipe(gulp.dest(`${curDir}/styles`))
      .pipe(gulp.dest(`${dir}/dist`));
  }

  const compileCSS = () => {
    console.log('compile css');
    const files = [`${curDir}/styles/*/*.scss`];
    gulp
      .src(files)
      .pipe(gulpif(!!config.scope, insert.prepend(`.${config.scope}-style {`)))
      .pipe(gulpif(!!config.scope, insert.append('}')))
      .pipe(sass({ outputStyle: options.compressed ? "compressed" : "expanded" }))
      .pipe(gulpif(!!options.flatten, flatten()))
      .pipe(autoprefixer({
        overrideBrowsersList: ['last 2 versions'],
          cascade: false
        }))
      .pipe(cleanCSS({ level: { 2: { restructureRules: true } } }))
      .pipe(gulp.dest(`${dir}/dist`))
      .pipe(concat('styles.min.css'))
      .pipe(gulp.dest(`${dir}/dist`))
  };

  const compileCustomCSS = () => {
    console.log('compile custom css');
    const files = [];
    if (!opts.customCSS) {
      return;
    }
    opts.customCSS.forEach(path => {
      files.push(path);
    })
    gulp
      .src(files)
      .pipe(gulpif(!!config.scope, insert.prepend(`.${config.scope}-style {`)))
      .pipe(gulpif(!!config.scope, insert.append('}')))
      .pipe(sass({ outputStyle: options.compressed ? "compressed" : "expanded" }))
      .pipe(autoprefixer({
        overrideBrowsersList: ['last 2 versions'],
          cascade: false
        }))
      .pipe(gulp.dest(`${dir}/dist`))
      .pipe(cleanCSS())
      .pipe(concat('styles.custom.min.css'))
      .pipe(gulp.dest(`${dir}/dist`))

  };

  const generateSvg = async () => {
    console.log('generate svg');
    await createSvg(config.colors, config.icons, `${dir}/assets/${config.icons.directory}`, `${dir}/dist`);
  };
  const compileIconCSS = async () => {
    console.log('compile icon css');
    gulp
      .src(`${dir}/dist/icons/*.css`)
      .pipe(cleanCSS())
      .pipe(concat('icons.min.css'))
      .pipe(gulp.dest(`${dir}/dist`))
  };

  await cleanDirectories();
  await createFolderStructure();
  await createConfig();
  // await copyConfig();
  await compileCSS();
  await compileCustomCSS();
  await generateSvg();
  await compileIconCSS();
}
