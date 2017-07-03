const gulp = require('gulp');
const clean = require('gulp-clean');
const less = require('gulp-less');
const flatten = require('gulp-flatten');
const insert = require('gulp-insert');
const LessLists = require("less-plugin-lists");
const createStyles = require("./scripts/createStyles");
const createIcons = require("./scripts/createIcons");

gulp.task('cleanDist', function () {
  return gulp.src('dist/*', {read: false})
    .pipe(clean());
});

gulp.task('cleanSvg', ['cleanDist'], function () {
  return gulp.src('src/svg/css/*', {read: false})
    .pipe(clean());
});

gulp.task('icons', ['cleanSvg'], function (done) {
  return createIcons('icons', function() {
    createIcons('symbols', done);
  });
});

gulp.task('copy', ['icons'], function() {
  return gulp.src('src/svg/css/*.css')
    .pipe(gulp.dest('dist'));
});

gulp.task('css', ['copy'], function(){
  return gulp.src('src/styles/*/*.less')
    // .pipe(insert.prepend('.cc-style {'))
    // .pipe(insert.append('}'))
    .pipe(less({
      globalVars: createStyles(),
      plugins: [new LessLists()]
    }))
    .pipe(flatten())
    .pipe(gulp.dest('dist'))
});

gulp.task('default', [ 'cleanDist', 'cleanSvg', 'icons', 'copy', 'css' ]);
