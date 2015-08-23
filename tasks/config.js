var pkg = require('./../package.json');

var config = {
    port: 4000,
    svg : {
      src: './src/icons/**/*.svg',
      dest: 'sprites'
    },
    styles: {
        src: './src/styles.less',
        dest: './',
        name: pkg.name + '.css'
    }
};


module.exports = config;
