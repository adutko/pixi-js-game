const gulp = require('gulp');
const sass = require('gulp-ruby-sass');
const autoprefixer = require('gulp-autoprefixer');
const minifycss = require('gulp-minify-css');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

const sassSrcPath = './source/css/*.scss';
const sassDestPath = './build/css';

// Compile and process sass
gulp.task('process-styles', function() {
  return sass(sassSrcPath, {})
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest(sassDestPath))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('./build/css'));
});


// Compile and process JS
gulp.task('process-scripts', function() {
  return gulp.src('app/**/*.js')
    .pipe(concat('main.js'))
    .pipe(babel())
    .pipe(gulp.dest('./build/js/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js/'));
});


// Watch files for changes
gulp.task('watch', function() {
  gulp.watch(
    'app/*.js', ['process-scripts'],
    'sass/*.scss', ['process-styles']
    );
});


// Default Task
gulp.task('default', ['process-styles', 'process-scripts', 'watch']);
