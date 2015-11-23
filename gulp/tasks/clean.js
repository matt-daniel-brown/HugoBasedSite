/**
 * clean.js
 * @name - 'clean'
 * @task - Remove build folder
 */

'use strict';

const del = require('del');
const gulp = require('gulp');
const config = require('../config').server;

gulp.task('clean', function clean(cb) {
  del([config.dest]).then(function cleanCallback() {
    cb();
  });
});
