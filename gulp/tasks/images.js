'use strict';

var config = require('../config');
var gulp = require('gulp');

var imagemin = require('gulp-imagemin');
var changed = require('gulp-changed');

gulp.task('images', function () {
  return gulp.src(config.images.src)
    .pipe(changed(config.images.dest))
    .pipe(imagemin())    
    .pipe(gulp.dest(config.images.dest));
});

/**
 * Paid Subscription
 */
// var kraken = require('gulp-kraken');
// gulp.task('kraken', function () {
//   return gulp.src(config.images.src)
//     .pipe(kraken({
//       key: '0872024c611b46f963789e267f20ae7e',
//       secret: '076bcac3c860a9f5298239be3579721cc7975288',
//       lossy: true,
//       concurrency: 6,
//     }));
// });