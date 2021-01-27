'use strict';

var postcss = require('gulp-postcss');
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');
var minify = require('gulp-csso');
var rename = require('gulp-rename');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  return gulp.src('./sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('autoprefixer', () => {
  return gulp.src('./css/main.css')
    .pipe(postcss([ autoprefixer({overrideBrowserslist: ['last 2 versions'],
    cascade: false
  }) ]))
    .pipe(gulp.dest('./css'))
})

gulp.task('minify', function () {
  return gulp.src('./css/main.css')
      .pipe(minify())
      .pipe(rename('main.min.css'))
      .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', gulp.series(['sass', 'autoprefixer', 'minify']));
});
