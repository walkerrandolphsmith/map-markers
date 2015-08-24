var pkg = require('./../package.json');

var config = {
    port: 4000,
    svg : {
      root: "/src/icons/google-places",
      src: './src/icons/**/*.svg',
      dest: './dist/sprites/'
    },
    styles: {
        src: './src/styles.less',
        dest: './dist/',
        name: pkg.name + '.css'
    },
    html: {
      src: "/src/template.html",
      dest: "./dist/index.html"
    }
};


module.exports = config;
