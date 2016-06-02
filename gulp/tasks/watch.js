'use strict';

var config = require('../config');
var gulp = require('gulp');

var watcher = function(source, tasks) {
  gulp.watch(source, tasks);
};

gulp.task('watch', ['browserSync'], function() {
  watcher(config.styles.src, ['styles']);
  watcher(config.scripts.src, ['jscs', 'lint']);
  watcher(config.html.src, ['html']);
});
