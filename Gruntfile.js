// Generated by CoffeeScript 1.6.3
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.initConfig({
    nodeunit: {
      all: ['tests/*_test.js']
    }
  });
  grunt.registerTask('test', ["nodeunit"]);
  return grunt.registerTask('default', ["test"]);
};
