/*jslint node:true*/

module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jslint: {
            all: {
                src: ['source/**/*.js', 'Gruntfile.js'],
                directives: {
                    browser: true,
                    indent: 4,
                    predef: [
                        'jQuery'
                    ]
                }
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
        },
        connect: {
            test: {
                options: {
                    port: 8000
                }
            }
        },
        qunit: {
            all: {
                options: {
                    urls: [
                        'http://127.0.0.1:8000/test/index.html'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('test', ['jslint:all', 'connect:test', 'qunit', 'uglify:min']);
    grunt.registerTask('default', ['jslint:all', 'connect:test', 'qunit', 'uglify:min']);
    grunt.registerTask('build', ['jslint:all', 'connect:test', 'qunit', 'uglify:min']);
};