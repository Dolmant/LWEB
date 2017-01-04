module.exports = function (grunt) {
	grunt.initConfig({
		browserify: {
			dist: {
				options: {
					transform: [
						['babelify', {
							loose: 'all',
						}],
					],
				},
				files: {
					// if the source file has an extension of es6 then
					// we change the name of the source file accordingly.
					// The result file's extension is always .js
					'./assets/js/bundle.js': ['./assets/jssource/leotide.js'],
				},
			},
		},
		sass: {
			dist: {
				files: {
					'./assets/css/style.css': ['./assets/scss/style.scss'],
				},
			},
		},

		watch: {
			watchcss: {
				files: ['./assets/scss/*.scss'],
				tasks: ['sass'],
			},
			watchjs: {
				files: ['./assets/jssource/*.js'],
				tasks: ['browserify'],
			},
			watchreactjs: {
				files: ['./assets/jssource/DynamicReact/*.js'],
				tasks: ['browserify'],
			},
		},
	});

	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default', ['watch']);
	grunt.registerTask('build', ['browserify', 'sass']);
	grunt.registerTask('build_sass', ['sass']);
	grunt.registerTask('test', ['watchcss', 'watchjs']);
};
