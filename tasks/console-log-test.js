'use strict';

var checkFile = require('./lib/check-file');


module.exports = function (grunt) {
  grunt.registerMultiTask('console-log-test', 'Check for console.log statements', function () {
    var done = this.async();
    var all = grunt.cli.options.all || false;
    var hasErrors = false;

    grunt.util.async.forEach(this.filesSrc, function _checkFiles(file, next) {
      var fileContents, errs;

      if (!grunt.file.isFile(file)) return next();

      fileContents = grunt.file.read(file);

      if (errs = checkFile(fileContents)) {
        errs.forEach(function addErrorToList(err) {
          grunt.log.errorlns(file + ' has console.log statement at line ' + err);
        });
        hasErrors = true;
        next(true);
      }

      next();
    }, function handleResults(failureStatus) {
        if (all || !failureStatus) return done();

        grunt.warn('console.log check failed.');
      done();
    });
    if(hasErrors){
      grunt.warn('console.log check failed.');
      done();
    }
  });
};
