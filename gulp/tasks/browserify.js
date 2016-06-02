'use strict';

var config = require('../config');
var gulp = require('gulp');
var handleErrors = require('../util/handleErrors');

var gulpif = require('gulp-if');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var uglify = require('gulp-uglify');

var browserSync = require('browser-sync');

function createSourcemap() {
  return !global.isProd || config.browserify.prodSourcemap;
}

function buildScript(file) {
  var bundler = browserify({
    entries: [config.sourceDir + 'js/' + file],
    debug: false,
    cache: {},
    packageCache: {},
    fullPaths: !global.isProd,
  });

  // var transforms = [
  // ];

  // transforms.forEach(function (transform) {
  //   bundler.transform(transform.name, transform.options);
  // });

  var rebundle = function () {
    var stream = bundler.bundle();
    var sourceMapLocation = global.isProd ? './' : '';

    console.log(createSourcemap());

    return stream.on('error', handleErrors)
        .pipe(source(file))
        .pipe(gulpif(global.isProd || createSourcemap(), buffer()))
        .pipe(gulpif(createSourcemap(), sourcemaps.init()))
        .pipe(gulpif(global.isProd, uglify({
          mangle: global.isProd,
          compress: { drop_console: global.isProd },
        })))
        .pipe(gulpif(createSourcemap(), sourcemaps.write(sourceMapLocation)))
        .pipe(gulp.dest(config.scripts.dest))
        .pipe(gulpif(browserSync.active, browserSync.stream()));
  };

  if (!global.isProd) {
    bundler = watchify(bundler);

    bundler.on('update', function () {
      rebundle();

    });

  }

  return rebundle();
}

gulp.task('browserify', function () {

    return buildScript('main.js');

  });
