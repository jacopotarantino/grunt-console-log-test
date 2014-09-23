'use strict';

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadTasks('tasks');

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'lib/*.js',
        'tasks/*.js',
        'test/**/*.js'
      ]
    },
    bump: {
      options: {
        files: ['package.json'],
        updateConfigs: [],
        commit: true,
        commitMessage: 'Release version %VERSION%',
        commitFiles: ['package.json'],
        createTag: true,
        tagName: '%VERSION%',
        tagMessage: 'Version %VERSION%',
        push: true,
        pushTo: 'upstream',
        gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d'
      }
    }
  });

  grunt.registerTask('default', ['jshint']);
};
