'use strict';

var config = require('../config');
var gulp = require('gulp');

var jscs = require('gulp-jscs');
var jscsStylish = require('gulp-jscs-stylish');

var jshint = require('gulp-jshint');
var notify = require('gulp-notify');

gulp.task('jscs', function () {
  return gulp.src(config.scripts.src)
     .pipe(jscs())
     .pipe(jscsStylish());
});

gulp.task('lint', ['jscs'], function () {
    gulp.src(config.scripts.src)
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'));
  });