'use strict';

var config = require('../config');
var gulp = require('gulp');

var gulpif = require('gulp-if');
var htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync');

gulp.task('html', function () {
  gulp.src(config.html.src)
    .pipe(gulpif(global.isProd, htmlmin({ collapseWhitespace: true })))
    .pipe(gulp.dest(config.buildDir))
    .pipe(browserSync.stream({ once: true }));
});
