module.exports = function (grunt) {

  'use strict';

  grunt.initConfig({
    browserify: {
      options: {
        transform: ['aliasify']
      },
      js: {
        src: 'src/js/app.js',
        dest: 'dist/js/app.js'
      }
    },
    uglify: {
      js: {
        files: {
          'dist/js/app.min.js': ['dist/js/app.js']
        }
      }
    },
    sass: {
      dist: {
        files: {
          'dist/css/app.css': 'src/css/app.scss'
        }
      }
    },
    cssmin: {
      dist: {
        files: {
          'dist/css/app.min.css': 'dist/css/app.css'
        }
      }
    },
    watch: {
      sass: {
        files: ['src/css/**/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false
        }
      },
      js: {
        files: ['src/js/**/*.js'],
        tasks: ['jshint', 'browserify'],
        options: {
          spawn: false
        }
      }
    },
    jshint: {
      options: {
        strict: true,
        curly: true,
        eqeqeq: true,
        undef: true,
        multistr: true,
        laxcomma: true,
        globals: {
          "window": true,
          "console": true,
          "require": true,
          "module": true
        }
      },
      all: ['Gruntfile.js', 'src/js/**/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', [
    'jshint', 'browserify', 'uglify:js', 'sass', 'cssmin'
  ]);
  grunt.registerTask('dev', [
    'jshint', 'browserify', 'sass', 'watch'
  ]);

};