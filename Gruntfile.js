module.exports = function(grunt) {

  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'),
    uglify : {
      min: {
        options : {
          banner :"/*\r\t<%= pkg.name %> v<%= pkg.version %> by <%= pkg.author %>\r"+
                  "\tSource <%= pkg.repository.url %>\r*/\r"
        },
        files : {
          "build/eachSelector.min.js" : ["source/eachSelector.js"]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify:min']);
};