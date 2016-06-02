'use strict';

module.exports = {

  browserPort: 3000,
  UIPort: 3001,

  sourceDir: './src/',
  buildDir: './build/',
  nodeDir: './node_modules/',

  styles: {
    main: 'src/styles/main.styl',
    src: 'src/styles/**/*.styl',
    dest: 'build/css',
    prodSourceMap: false,
  },

  scripts: {
    index: 'src/js/index.js',
    src: 'src/js/**/*.js',
    dest: 'build/js',
  },

  html: {
    src: 'src/**/*.html',
  },

  browserify: {
    bundleName: 'main.js',
    prodSourcemap: false,
  },
};
