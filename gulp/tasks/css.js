const config = require('../config');

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const path = require('path');
const errorAlert = require('../libs/errorAlert');
const logAlert = require('../libs/logAlert');
const head = require('../libs/headBanner');
const minifyCss = require('gulp-clean-css');
const watch = require('gulp-watch');

const environments = require('gulp-environments');

const production = environments.production;

module.exports = {
  watch: function() {
    logAlert('Quick watch', 'info');

    const task = config.tasks['css'];

    const glob = path.join(config.root.src, task.src, '**/*.{' + task.extensions.join(',') + '}');

    watch(glob, function(file) {
      if (process.env.cssCombIsRunning === undefined) {
        require('./csscomb')(file.path);
      } else {
        delete process.env.cssCombIsRunning;

        require('./css').build();
      }
    });
  },
  build: function() {

    const settings = {
      src: path.join(config.root.src, config.tasks.css.src, '/style.scss'),
      dest: path.join(config.root.dest, config.tasks.css.dest)
    };

    logAlert('Compiling Sass files', 'info', settings.dest);

    return gulp.src(settings.src)
      .pipe(plumber({
        errorHandler: errorAlert
      }))
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(autoprefixer(config.tasks.css.autoprefixer))
      .pipe(production(minifyCss()))
      .pipe(head('/**', '*/'))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(settings.dest));
  }
};
