'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', ['clean'], function (callBack) {

  callBack = callBack || function () {};

  global.isProd = true;

  runSequence(['jscs', 'lint', 'styles', 'html'], 'browserify', callBack);

});
