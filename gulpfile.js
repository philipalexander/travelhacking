'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
// var cssnano = require('gulp-cssnano');
// var sourcemaps = require('gulp-sourcemaps');
// var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function () {
  gulp.watch('./src/**/*.scss', ['sass']);
});

gulp.task('sass', function () {
    return gulp.src('./src/**/*.scss')
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(gulp.dest('./src'));
});
