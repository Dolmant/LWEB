module.exports = function (grunt) {
	grunt.initConfig({
		htmlbuild: {
			dist: {
				src: './assets/template/index.html',
				dest: './',
				options: {
					beautify: true,
					relative: true,
					basePath: false,
					scripts: {
						bundle: [
							'./assets/dist/*.js',
							'./assets/particles.js',
						],
					},
					styles: {
						bundle: [
							'./assets/dist/*.css',
						],
					},
				}
			}
		},
		hash: {
			options: {
				mapping: '',
				srcBasePath: '',
				destBasePath: '',
				hashLength: 8, // hash length, the max value depends on your hash function
				hashFunction: function(source, encoding){ // default is md5
					return require('crypto').createHash('sha1').update(source, encoding).digest('hex');
				},
			},
			js: {
				src: 'assets/built/*.js',  //all your js that needs a hash appended to it
				dest: 'assets/dist', //where the new files will be created
			},
			css: {
				src: 'assets/built/*.css',  //all your css that needs a hash appended to it
				dest: 'assets/dist', //where the new files will be created
			},
		},
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
					'./assets/built/bundle.js': ['./assets/jssource/leotide.js'],
				},
			},
		},
		sass: {
			dist: {
				files: {
					'./assets/built/style.css': ['./assets/scss/style.scss'],
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

	grunt.loadNpmTasks('grunt-hash');
	grunt.loadNpmTasks('grunt-html-build');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default', ['watch']);
	grunt.registerTask('build', ['browserify', 'sass', 'hash', 'htmlbuild']);
	grunt.registerTask('build_sass', ['sass', 'hash', 'htmlbuild']);
	grunt.registerTask('test', ['watchcss', 'watchjs']);
};
