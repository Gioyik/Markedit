module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      build: "dist"
    },
    clean: {
      build: {
        src: ['dist/*']
      }
    },
    nodewebkit: {
      options: {
        platforms: ['win', 'osx', 'linux32', 'linux64'],
        buildDir: '<%= meta.dist %>/',
      },
      src: ['src/**/*'] 
    }
  });
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-node-webkit-builder');
  grunt.registerTask('default', ['clean', 'nodewebkit']);
};