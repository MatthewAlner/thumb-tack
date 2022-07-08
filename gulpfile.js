const gulp = require('gulp');
const concat = require('gulp-concat');
const minifyCSS = require('gulp-minify-css');
const replace = require('gulp-replace');

gulp.task('style', () => {
  return gulp.src('dist/thumb-tack.min.css')
  .pipe(replace(/^(.*)$/, 'import {css} from "lit-element"; export const style = css`$1`;'))
  .pipe(concat('thumb-tack.style.js'))
  .pipe(gulp.dest('dist/'))
});

gulp.task('css', () => {
  return gulp.src('src/*.css')
  .pipe(minifyCSS())
  .pipe(concat('thumb-tack.min.css'))
  .pipe(gulp.dest('dist/'))
});

gulp.task('default', gulp.series(
    'css', 
    'style'
  )
);
