'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('dev', ['clean'], function (callBack) {

  global.isProd = false;

  runSequence(['jscs', 'lint', 'styles', 'html'], 'browserify', 'watch', callBack);
});
