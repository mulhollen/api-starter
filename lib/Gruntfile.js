module.exports = function (grunt) {
    grunt.initConfig({
        browserify: {
            '../dist/app.js': ['../js/main.js']
        },
        jshint: {
            options: {
                predef: ["document", "console"],
                esnext: true,
                strict: "global",
                globals: { "$": true },
                browserify: true,
                debug: true,
                reporter: require('jshint-stylish')
            },
            files: ['../js/**/*.js']
        },
        sass: {
            dist: {
                files: {
                    '../css/main.css': '../sass/main.scss'
                }
            }
        },
        watch: {
            javascripts: {
                files: ['../js/**/*.js'],
                tasks: ['jshint']
            },
            sass: {
                files: ['../sass/**/*.scss'],
                tasks: ['sass']
            },
            browserify: {
                files: ['../js/**/*.js'],
                tasks: ["browserify"]
            }
        }
    });
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.registerTask('default', ['jshint', 'sass', 'browserify', 'watch']);
};