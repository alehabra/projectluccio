const gulp = require('gulp');
const minify = require('gulp-minify');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const merge2 = require('merge2');
const concat = require('gulp-concat')
const del = require('del');
const rename = require('gulp-rename');


gulp.task('styles', () => {
    return gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('clean', () => {
    return del([
        'css/main.css',
    ]);
});

gulp.task('minify-css', () => {
    return gulp.src('css/*.css')
      .pipe(cleanCSS({debug: true}, (details) => {
        console.log(`${details.name}: ${details.stats.originalSize}`);
      }))
    .pipe(rename('main.min.css'))  
    .pipe(gulp.dest('dist'));
});

gulp.task('min-js', function () {    
  return gulp.src('js/*.js')
      .pipe(concat('bundle.js'))
      .pipe(minify())
      .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series(['clean', 'styles', 'minify-css','min-js']));