'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var connect = require('gulp-connect');
// var cssnano = require('gulp-cssnano');
// var sourcemaps = require('gulp-sourcemaps');
// var autoprefixer = require('gulp-autoprefixer');



gulp.task('default', ['sass', 'serve', 'watch']);

gulp.task('sass', function () {
    return gulp.src('./src/**/*.scss')
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(gulp.dest('./src'))
      .pipe(browserSync.reload({
          stream: true
      }));
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'src'
    },
  })
});

gulp.task('serve', function() {
  connect.server();
});

gulp.task('watch', function () {
  gulp.watch('./src/**/*.scss', ['sass']);
  gulp.watch('./src/*.html', browserSync.reload);
  gulp.watch('./src/**/*.js', browserSync.reload);
});
