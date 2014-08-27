module.exports = function (grunt) {

	grunt.initConfig({
		browserify: {
			options: {
				transform: ['aliasify']
			},
			js: {
				src: 'assets/js/app/app.js',
				dest: 'assets/js/app.js'
			}
		},
		uglify: {
			js: {
				files: {
					'assets/js/app.min.js': ['assets/js/app.js']
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

	grunt.registerTask('default', [
		'browserify', 'uglify:js'
	]);

};