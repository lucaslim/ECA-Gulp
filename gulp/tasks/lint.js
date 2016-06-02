'use strict';

var config = require('../config');
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var stylish = require('gulp-jscs-stylish');
var notify = require('gulp-notify');

gulp.task('hint', function() {
  return gulp.src(config.scripts.src)
    .pipe(jshint('.jshintrc'))  
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
    .pipe(notify({
      title: 'JSHint',
      message: 'JSHint Passed'
    }));
});

gulp.task('jscs', function() {
  return gulp.src(config.scripts.src)
    .pipe(jscs())
    .pipe(notify({
      title: 'JSCS',
      message: 'JSCS Passed'
    }))
});