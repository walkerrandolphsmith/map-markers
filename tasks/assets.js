var gulp = require('gulp');
var config = require("./config");

gulp.task('assets', function () {
   gulp.src(config.assets.src)
       .pipe(gulp.dest(config.assets.dest));
});
