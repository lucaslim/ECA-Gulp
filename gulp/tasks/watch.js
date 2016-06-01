'use strict';

var config = require('../config');
var gulp = require('gulp');

var watcher = function(source, tasks) {
  gulp.watch(source, tasks);
};

gulp.task('watch', function() {
  watcher(config.styles.src, ['styles']);
});
