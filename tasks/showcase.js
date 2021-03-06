var gulp = require('gulp');
var fs = require('fs');
var q = require('q');
var _ = require('underscore');
var config = require('./config');

gulp.task('showcase', function () {
    var pwd = process.cwd();
    var directory = pwd + config.svg.root;

    iterateDirectory(directory)
        .then(function(files){
            return files.map(function(file){
                var link = "https://github.com/walkerrandolphsmith/map-markers/blob/master/icons/google-places/" + file.fileName;
                var fileName = file.fileName.replace('.svg', '');
                var iconName = fileName.replace('_', ' ');

                return '<li><svg viewBox="0 0 512 512"><use xlink:href="sprites/defs/svg/sprite.defs.svg#google-places--' + fileName + '"></use></svg><span><a href="'+ link + '">' + iconName +'</a></span></li>'
            });
        })
        .then(function(iconsMarkup){
          return iconsMarkup.join('\n');
        })
        .then(function(result){
          return readFile(pwd,config.html.src)
            .then(function(file){
              file.content = file.content.replace('showcase', result);
              return file.content;
            });
        })
        .then(function(newFile){
          fs.writeFile(config.html.dest, newFile, function(error){
            if (error){
              console.error(error);
            }
          });
        });
});

function readDir(dir){
    var deferred = q.defer();
    fs.readdir(dir,function(err,files) {
        deferred.resolve(files);
    });
    return deferred.promise;
}

function readFile(dir, file){
    var deferred = q.defer();
    fs.readFile(dir + file,'utf-8',function(err,md){
        deferred.resolve({fileName: file, content: md});
    });
    return deferred.promise;
}

function iterateDirectory(dir){
    var deferred = q.defer();
    readDir(dir)
        .then(function(files){
            var operations = _.map(files, _.partial(readFile, dir));

            q.all(operations).then(function(toc){
                deferred.resolve(toc);
            });
        });
    return deferred.promise;
}
