var gulp = require('gulp');
var less = require('gulp-less');
var minifyCss = require('gulp-minify-css');
var concat = require('gulp-concat');
var config = require("./config");

gulp.task('styles', function () {
   gulp.src(config.styles.src)
       .pipe(less())
       .pipe(concat(config.styles.name))
       .pipe(minifyCss())
       .pipe(gulp.dest(config.styles.dest));
});
