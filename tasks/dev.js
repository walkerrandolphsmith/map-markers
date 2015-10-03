var gulp = require('gulp');
connect = require('gulp-connect');



gulp.task('dev', ['sprite', 'showcase', 'styles', 'assets'], function () {
    connect.server({
      root: 'dist',
      port: 3000
    });
});
