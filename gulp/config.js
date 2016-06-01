'use strict';

module.exports = {
  sourceDir: './src/',
  buildDir: './build/',
  nodeDir: './node_modules/',

  styles: {
    main: 'src/styles/main.styl',
    src: 'src/styles/**/*.styl',
    dest: 'build/css',
    prodSourceMap: false
  },

  scripts: {
    src: 'src/js/**/*.js',
    dest: 'build/js'
  }
};