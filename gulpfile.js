var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    babel = require("gulp-babel");

var paths = {
  sassSrcPath: './source/css/*.scss',
  sassDestPath: './build/css'
}

// Compile and process sass
gulp.task('process-styles', function () {
  return sass(paths.sassSrcPath, {})
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest(paths.sassDestPath))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('./build/css'));
});


// Compile and process JS
gulp.task('process-scripts', function () {
  return gulp.src('source/js/*.js')
    .pipe(babel())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./build/js/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js/'));
})


// Watch files for changes
gulp.task('watch', function() {
  gulp.watch(
    'source/js/*.js', ['process-scripts'],
    'source/css/*.scss', ['process-styles']
    )
});


// Default Task
gulp.task('default', ['process-styles', 'process-scripts', 'watch']);