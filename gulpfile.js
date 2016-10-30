'use strict'

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    cache = require('gulp-cache'),
    rename = require('gulp-rename'),
    htmlmin = require('gulp-htmlmin'),
    cleanCss = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    pngout = require('imagemin-pngout'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    },
    notify: false
  });
});

gulp.task('sass', function () {
  return gulp.src('app/sass/**/*.scss')
      .pipe(autoprefixer(['last 10 versions']))
      .pipe(sass())
      .pipe(gulp.dest('app/css'))
      .pipe(browserSync.reload({stream: true}));
});

gulp.task('libs', function() {
  return gulp.src([
    'app/libs/jquery/dist/jquery.min.js',
  ])
      .pipe(concat('libs.min.js'))
      .pipe(gulp.dest('app/js'));
});

gulp.task('html-minify', function() {
  return gulp.src('app/*.html')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('dist'));
});

gulp.task('css-minify', function() {
  return gulp.src('app/css/*.css')
      .pipe(cleanCss({compatibility: 'ie8'}))
      .pipe(gulp.dest('dist/css'));
});

gulp.task('imagemin', function() {
  return gulp.src('app/img/**/*')
      .pipe(cache(imagemin({
        interlaced: true,
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngout()]
      })))
      .pipe(gulp.dest('dist/img'));
});

gulp.task('compress', function() {
  return gulp.src(['app/js/common.js', 'app/js/libs.min.js'])
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'));
});

gulp.task('watch', ['sass', 'libs', 'browser-sync'], function() {
  gulp.watch('app/sass/**/*.scss', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('build', ['html-minify', 'css-minify', 'imagemin', 'compress', 'clearcache'], function() {
  return gulp.src('app/fonts/**/*').pipe(gulp.dest('dist/fonts'));
});

gulp.task('clearcache', function () { return cache.clearAll(); });

gulp.task('default', ['watch']);
