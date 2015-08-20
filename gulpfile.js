var gulp = require('gulp');
var sprites = require('gulp-svg-sprite');
var pkg = require('./package.json');

var config = {
    port: 4000,
    svg : {
      src: './icons/**/*.svg',
      dest: 'sprites'
    }
};

gulp.task('generate-sprites', function () {

  var spriteConfig = {
    mode : {
      defs: true
    }
  }

    gulp.src(config.svg.src)
        .pipe(sprites(spriteConfig))
        .pipe(gulp.dest(config.svg.dest));
});

gulp.task('default', ['generate-sprites'], function () {
});
