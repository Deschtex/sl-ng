module.exports = function (grunt) {

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
		watch: {
			js: {
				files: ['**/*.js'],
				tasks: ['default']
			}
		}
	});

	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default', [
		'browserify', 'uglify:js', 'sass'
	]);

};