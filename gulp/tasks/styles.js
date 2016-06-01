'use strict';

var config = require('../config');
var gulp = require('gulp');
var gulpif = require('gulp-if');

var sourcemaps = require('gulp-sourcemaps');
var stylus = require('gulp-stylus');
var nib = require('nib');

var handleErrors = require('../util/handleErrors');

gulp.task('styles', function() {
  const createSourcemap = !global.isProd || config.styles.prodSourcemap;

  return gulp.src(config.styles.main)
    .pipe(gulpif(createSourcemap, sourcemaps.init()))
    .pipe(stylus({
      include: config.nodeDir,
      'include css': true,
      compress: !global.isProd,
      use: [nib()],
    }))
    .on('error', handleErrors)
    .pipe(gulpif(createSourcemap, sourcemaps.write(global.isProd ? './' : null)))
    .pipe(gulp.dest(config.styles.dest));
});
