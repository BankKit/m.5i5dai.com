module.exports = function (grunt) {
	
	'use strict';
	
	grunt.initConfig({

		jade: {

			compile: {

				options: {

					pretty: true,

					data: {

						debug: false

					}

				},

				files: {

					"view/html/index.html": "view/jade/unit/index.jade"

				}

			}

		},

		htmlmin: {

			dist: {

				options: {

					useShortDoctype: true,

					removeComments: true,

					removeEmptyAttributes: true,

					collapseWhitespace: true,

					keepClosingSlash: false,

					caseSensitive: true,

					minifyJS: true,

					minifyCSS: true

				},

				files: {

					"view/html/minified/index.html": "view/html/index.html"

				}

			}

		},

		sass: {

			dist: {

				options: {

					style: 'compressed',

					precision: 5,

					quiet: true,

					noCache: false

				},

				files: [

					{

						expand: true,

						cwd: 'public/ajax/libs/css/m.5i5dai.com_framework/base/scss',

						src: ['*.scss'],

						dest: 'public/ajax/libs/css/m.5i5dai.com_framework/base/',

						ext: '.css'

					},

					{

						expand: true,

						cwd: 'public/ajax/libs/css/m.5i5dai.com_framework/media_query/scss',

						src: ['*.scss'],

						dest: 'public/ajax/libs/css/m.5i5dai.com_framework/media_query/',

						ext: '.css'

					},

					{

						expand: true,

						cwd: 'public/ajax/libs/css/m.5i5dai.com_framework/component/scss',

						src: ['*.scss'],

						dest: 'public/ajax/libs/css/m.5i5dai.com_framework/component/',

						ext: '.css'

					},

					{

						expand: true,

						cwd: 'public/ajax/libs/css/m.5i5dai.com_framework/scaffolding/scss',

						src: ['*.scss'],

						dest: 'public/ajax/libs/css/m.5i5dai.com_framework/scaffolding/',

						ext: '.css'

					}

				]

			}

		},
		
		//TODO: CoffeeScript Lint
		
		//TODO: CoffeeScript
		
		//TODO: Jshint
		
		//TODO: CoffeeScript Lint
		
		watch: {
			
			source: {
				
				files: ['view/**/*.jade', 'public/ajax/libs/css/**/*.scss'],
				
				tasks: ['jade', 'sass', 'htmlmin'],
				
				options: {
					
					livereload: true // needed to run LiveReload
					
				}
				
			}
			
		}
		
	});
	
	grunt.loadNpmTasks('grunt-contrib-jade');

	grunt.loadNpmTasks('grunt-contrib-htmlmin');

	grunt.loadNpmTasks('grunt-contrib-sass');
	
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('default', ['watch']);
	
};