import gulp from "gulp";
import clean from "gulp-clean";
import flatten from "gulp-flatten";
import file from "gulp-file";
import gulpif from "gulp-if";
import insert from "gulp-insert";
import sass from "gulp-sass";
import createSassConfig from "./createSassConfig";
import createSvg from "../svg/create";
import async from "async";

export default (curDir, config, dir, opts) => {
  const options = {
    compressed: false,
    flattened: false,
    ...opts
  };

  const cleanDirectories = (cb) => {
    gulp
      .src([
        `${dir}/dist/*`,
      ], { read: false })
      .pipe(clean())
    cb();
  };

  const createFolderStructure = (cb) => {
    gulp.src('*.*', {read: false})
      .pipe(gulp.dest(`${dir}/dist`))
      .pipe(gulp.dest(`${dir}/dist/icons`));
    cb();
  };

  const createConfig = (cb) => {
    // need to validate the config...
    file([{
      name: "config.scss",
      source: createSassConfig(config),
    }], { src: true })
      .pipe(gulp.dest(`${curDir}/styles`))
    cb();
  }

  const copyConfig = (cb) => {
    gulp
      .src(`${curDir}/styles/*.scss`)
      .pipe(gulp.dest(`${dir}/dist`));
    cb();
  };

  const compileCSS = (cb) => {
    gulp
      .src(`${curDir}/styles/*/*.scss`)
      .pipe(gulpif(!!config.scope, insert.prepend(`.${config.scope}-style {`)))
      .pipe(gulpif(!!config.scope, insert.append('}')))
      .pipe(sass({ outputStyle: options.compressed ? "compressed" : "expanded" }))
      .pipe(gulpif(!!options.flattend, flatten()))
      .pipe(gulp.dest(`${dir}/dist`));
    cb();
  };

  const generateSvg = async (cb) => {
    await createSvg(config.icons, `${dir}/assets/${config.icons.directory}`, `${dir}/dist`);
    cb();
  }

  async.series([
    cleanDirectories,
    createFolderStructure,
    createConfig,
    copyConfig,
    compileCSS,
    generateSvg
  ]);
}
