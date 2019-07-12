import gulp from "gulp";
import { series } from "gulp";
import clean from "gulp-clean";
import flatten from "gulp-flatten";
import file from "gulp-file";
import gulpif from "gulp-if";
import insert from "gulp-insert";
import sass from "gulp-sass";
import createSassConfig from "./createSassConfig";
import createSvg from "../svg/create";

export default build = (config, dir, opts) => {
  const options = {
    compressed: false,
    flattened: false,
    ...opts
  };

  const cleanDirectories = () => {
    return gulp
      .src([
        `${dir}/dist/*`,
      ], { read: false })
      .pipe(clean())
  };

  const createConfig = (cb) => {
    // need to validate the config...
    file([{
      name: "config.scss",
      source: createSassConfig(config),
    }], { src: true })
      .pipe(gulp.dest(`${__dirname}/src/styles`))
    cb();
  }

  const copyConfig = () => {
    return gulp
      .src(`${__dirname}/src/styles/*.scss`)
      .pipe(gulp.dest(`${dir}/dist`));
  };

  const compileCSS = () => {
    return gulp
      .src(`${__dirname}/src/styles/*/*.scss`)
      .pipe(gulpif(!!config.scope, insert.prepend(`.${config.scope}-style {`)))
      .pipe(gulpif(!!config.scope, insert.append('}')))
      .pipe(sass({ outputStyle: options.compressed ? "compressed" : "expanded" }))
      .pipe(gulpif(!!options.flattend, flatten()))
      .pipe(gulp.dest(`${dir}/dist`));
  };

  const generateSvg = async (cb) => {
    gulp.
      src("*.*", { read: false} )
      .pipe(gulp.dest(`${dir}/dist/icons`));
    await createSvg(config.icons, `${dir}/assets/${config.icons.directory}`, `${dir}/dist`);
    cb();
  }

  return series(cleanDirectories, createConfig, copyConfig, compileCSS, generateSvg);
}
