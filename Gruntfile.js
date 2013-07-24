/*jslint node:true*/

module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jslint: {
            files: ['source/**/*.js', 'Gruntfile.js'],
            directives: {
                browser: true,
                indent: 4,
                predef: [
                    'jQuery'
                ]
            }
        },
        uglify: {
            min: {
                options: {
                    banner: '/* <%= pkg.name %> v<%= pkg.version %> by <%= pkg.author %> - source <%= pkg.repository.url %> */'
                },
                files: {
                    'build/eachSelector.min.js': ['source/eachSelector.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-jslint');

    grunt.registerTask('test', ['jslint']);
    grunt.registerTask('default', ['jslint', 'uglify:min']);
    grunt.registerTask('build', ['jslint', 'uglify:min']);
};