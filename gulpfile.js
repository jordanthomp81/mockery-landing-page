var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var svgmin = require('gulp-svgmin');

gulp.task('scripts', function() {
  return gulp.src(['src/js/*.js', 'app/*.js'])
    .pipe(concat('core.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('styles', function() {
  return gulp.src('src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cssnano())
    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('images', function() {
  return gulp.src('src/img/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [
          {removeViewBox: false},
          {cleanupIDs: false}
      ],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('dist/img'));
});

gulp.task('svg', function () {
  return gulp.src('src/inc/*.svg')
    .pipe(svgmin())
    .pipe(gulp.dest('dist/inc'));
});

gulp.task('watch', function() {
  gulp.watch(['app/*.js', 'src/scss/*.scss'], ['scripts', 'styles', 'images', 'svg'])
});

gulp.task('default', ['scripts', 'styles', 'images', 'svg', 'watch']);
