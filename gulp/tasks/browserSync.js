'use strict';

var config = require('../config');
var gulp = require('gulp');

var browserSync = require('browser-sync');

gulp.task('browserSync', function () {
    browserSync.init('./build/', {
        server: {
            baseDir: config.buildDir,
        },
        port: config.browserPort,
        ui: {
            port: config.UIPort
        },
        browser: 'google chrome',
        ghostMode: {
            links: false
        }
    });

});
