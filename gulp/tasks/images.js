/**
 * images.js
 * @name - 'images'
 * @task - Optimizes images
 */

'use strict';

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const config = require('../config').images;

gulp.task('images', function optimizeImages() {
  return gulp.src(config.src)
    .pipe(imagemin(config.settings))
    .pipe(gulp.dest(config.dest));
});
