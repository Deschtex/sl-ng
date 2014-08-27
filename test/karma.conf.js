module.exports = function (config) {
	config.set({
		basePath: '../',
		files: [
			'assets/js/vendor/jquery182.js',
			'assets/js/vendor/angular.min.js',
			'assets/js/vendor/angular-mocks.js',
			'assets/js/vendor/angular-cache.min.js',
			'assets/js/vendor/moment.min.js',
			'assets/js/app/app.js',
			'assets/js/app/core/module.js',
			'assets/js/app/core/**/*.js',
			'assets/js/app/header/module.js',
			'assets/js/app/header/**/*.js',
			'assets/js/app/dialogues/module.js',
			'assets/js/app/dialogues/**/*.js',
			'assets/js/app/messages/module.js',
			'assets/js/app/messages/**/*.js',
			'assets/js/app/links/module.js',
			'assets/js/app/links/**/*.js',
			'test/*.js'
		],
		frameworks: ['mocha', 'expect'],
		browsers: ['Chrome']
	});
};