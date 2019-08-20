const gulp = require('gulp');
const csscomb = require('gulp-csscomb');
const logAlert = require('../libs/logAlert');
const path = require('path');
const plumber = require('gulp-plumber');
const errorAlert = require('../libs/errorAlert');

module.exports = function(filePath) {
  process.env.cssCombIsRunning = 'true';

  const fileName = path.parse(filePath).base;
  const fileDir = path.parse(filePath).dir;

  logAlert('Csscomb running on ', 'info', fileName);

  const stream = gulp.src(filePath)
    .pipe(plumber({
      errorHandler: errorAlert
    }))
    .pipe(csscomb())
    .pipe(gulp.dest(fileDir));

  return stream;
};
