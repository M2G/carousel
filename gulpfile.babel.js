const gulp = require('gulp');
const environments = require('gulp-environments');
const css = require('./gulp/tasks/css.js');
const cssComb = require('./gulp/tasks/csscomb.js');
const logAlert = require('./gulp/libs/logAlert.js');

const production = environments.production;

// Gulp tasks
// ----------------------------------------------------------------------------
gulp.task('css', css.build);
gulp.task('css-watch', css.watch);
gulp.task('csscomb', cssComb);