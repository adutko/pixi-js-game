var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    babel = require('gulp-babel'),
    notify = require('gulp-notify'),
    webserver = require('gulp-webserver');


// Default Task

gulp.task('default', function() {
  return gutil.log('Gulp is running!')
});


// FOR WATCH TASK

// Start up a webserver
gulp.task('webserver', function() {
  gulp.src('./public/index.html')
    .pipe(webserver({
      fallback: 'index.html',
      livereload: true,
      directoryListing: true,
      open: true,
      port: 5000
    }));
});

gulp.task('sass', function(){
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
});

gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  // Add other watchers
})

gulp.task('images', function(){
  return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
  .pipe(gulp.dest('dist/images'))
  .pipe(notify({ message: 'Images created.' }));
});


// FOR BUILD

// Copy any html files in app to public
gulp.task('copyHtml', function() {
  gulp.src('app/*.html')
  .pipe(gulp.dest('dist'))
  .pipe(notify({ message: 'HTML created.' }));
});

// Compile and process JS
gulp.task('process-scripts', function() {
  return gulp.src('app/**/*.js')
    .pipe(concat('main.js'))
    .pipe(babel())
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
    .pipe(notify({ message: 'JS file created.' }));
});

// Compile and process sass
// gulp.task('process-styles', function() {
//   return gulp.src('app/scss/**/*.scss')
//     .pipe(autoprefixer('last 2 versions'))
//     .pipe(gulp.dest('dist/css'))
//     .pipe(rename({suffix: '.min'}))
//     .pipe(minifycss())
//     .pipe(gulp.dest('./dist/css'))
//     .pipe(notify({ message: 'Stylesheets created.' }));
// });

// gulp.task('process-styles', function() {
//   return gulp.src('app/scss/**/*.scss')
//     //.pipe(autoprefixer('last 2 versions'))
//     .pipe(gulp.dest('dist/css'))

//     //.pipe(minifycss())
//     .pipe(minifycss({ keepSpecialComments: 1, processImport: false }))
//     .pipe(gulp.dest('dist/css'))
//     .pipe(rename({suffix: '.min'}))
//     .pipe(notify({ message: 'Stylesheets created.' }));
// });

gulp.task('process-styles', function() {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions'))
    //.pipe(gulp.dest('dist/css'))
    //.pipe(rename({suffix: '.min'}))
    //.pipe(minifycss())
    .pipe(gulp.dest('dist/css'))
    .pipe(notify({ message: 'Stylesheets created.' }));
});

// WATCH TASK

// Watch files for changes
gulp.task('watch', function() {
  gulp.watch(
    'app/*.js', ['process-scripts'],
    'sass/*.scss', ['sass']
    );
});

// BUILD TASK

// Build out minified files to dist

gulp.task('build', [
  'copyHtml',
  'images',
  //'process-scripts',
  'process-styles'
  ]
);


// // Compile and process sass
// gulp.task('process-styles', function() {
//   return sass(sassSrcPath, {})
//     .pipe(autoprefixer('last 2 version'))
//     .pipe(gulp.dest('public/css'))
//     .pipe(rename({suffix: '.min'}))
//     .pipe(minifycss())
//     .pipe(gulp.dest('./public/css'))
//     .pipe(notify({ message: 'Stylesheets created.' }));
// });

// Styles
// gulp.task('process-styles', function() {
//   return gulp.src(sassSrcPath, {})
//     .pipe(sass({ style: 'expanded', }))
//     .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
//     .pipe(gulp.dest('public/css'))
//     .pipe(rename({ suffix: '.min' }))
//     .pipe(minifycss())
//     .pipe(gulp.dest('public/css'))
//     .pipe(notify({ message: 'Styles task complete' }));
// });

// gulp.task('process-styles', function () {
//     return sass(sassSrcPath, {
//             style: 'compressed',
//             loadPath: [sassImportsPath]
//         })
//         .pipe(gulp.dest(sassDestPath));
// });



// Compile and process JS
// gulp.task('process-scripts', function() {
//   return gulp.src('app/**/*.js')
//     .pipe(concat('main.js'))
//     .pipe(babel())
//     .pipe(rename({suffix: '.min'}))
//     .pipe(uglify())
//     .pipe(gulp.dest('./public/js'))
//     .pipe(notify({ message: 'JS file created.' }));
// });


// // Watch files for changes
// gulp.task('watch', function() {
//   gulp.watch(
//     'app/*.js', ['process-scripts'],
//     'sass/*.scss', ['process-styles']
//     );
// });


// // Default Task
// gulp.task('default', ['process-styles', 'process-scripts', 'watch']);


