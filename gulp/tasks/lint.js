'use strict';

var config = require('../config');
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var notify = require('gulp-notify');

gulp.task('lint', function() {
  return gulp.src(config.scripts.src)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('jscs', function() {
  return gulp.src(config.scripts.src)
    .pipe(jscs({ configPath: './.jscsrc' }))
    .pipe(jscs.reporter('jscs-stylish'));
});
