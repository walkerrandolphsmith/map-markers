var gulp = require('gulp');
var sprites = require('gulp-svg-sprite');
var config = require('./config');

gulp.task('sprite', function () {
    gulp.src(config.svg.src)
        .pipe(sprites({ mode : { defs: true } }))
        .pipe(gulp.dest(config.svg.dest));
});
