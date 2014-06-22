module.exports = function (grunt) {
	
	'use strict';
	
	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),
		
		jade: {
			
			compile: {
				
				options: {
					
					pretty: true,
					
					data: {
						
						debug: false
						
					}
					
				},

				files: [

					{
						expand: true,

						cwd: 'view/jade/unit/',

						src: ['*.jade'],

						dest: 'view/html/',

						ext: '.html',

						extDot: 'last'
					}

				]
				
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

				files: [

					{
						expand: true,

						cwd: 'view/html/',

						src: ['*.html', '!*.min.html'],

						dest: 'view/html/',

						ext: '.min.html',

						extDot: 'last'
					}

				]
				
			}
			
		},
		
		sass: {
			
			framework: {
				
				options: {
					
					check: false,
					
					style: 'nested',		// Can be nested, compact, compressed, expanded.
					
					precision: 6,
					
					quiet: false,
					
					lineNumbers: true,
					
					noCache: false
					
				},
				
				files: {
					
					'public/ajax/libs/css/m.5i5dai.com_framework/m.5i5dai.com_framework.css': 'public/ajax/libs/scss/m.5i5dai.com_framework/m.5i5dai.com_framework.scss',

					'public/ajax/libs/css/m.5i5dai.com/index.css': 'public/ajax/libs/scss/m.5i5dai.com/index.scss',

					'public/ajax/libs/css/m.5i5dai.com/project.detail.css': 'public/ajax/libs/scss/m.5i5dai.com/project.detail.scss',

					'public/ajax/libs/css/m.5i5dai.com/registration.protocol.css': 'public/ajax/libs/scss/m.5i5dai.com/registration.protocol.scss',

					'public/ajax/libs/css/m.5i5dai.com/registration.result.css': 'public/ajax/libs/scss/m.5i5dai.com/registration.result.scss',

					'public/ajax/libs/css/m.5i5dai.com/phone.validation.css': 'public/ajax/libs/scss/m.5i5dai.com/phone.validation.scss',

					'public/ajax/libs/css/m.5i5dai.com/registration.css': 'public/ajax/libs/scss/m.5i5dai.com/registration.scss'
					
				}
				
			}
			
		},
		
		//TODO: CoffeeScript Lint
		
		coffeelint: {
			
			files: ['public/ajax/libs/coffeescript/**/*.coffee'],
			
			options: {
				
				'arrow_spacing': {
					
					'level': 'error'
					
				},
				
				'indentation': {
					
					'level': 'ignore'
					
				},
				
				'max_line_length': {
					
					'level': 'ignore'
					
				},
				
				'no_tabs': {
					
					'level': 'ignore'
					
				}
				
			}
			
		},
		
		//TODO: CoffeeScript
		coffee: {
			
			compileBare: {
				
				options: {
					
					bare: true
					
				},
				
				files: {
					
					'public/ajax/libs/js/m.5i5dai.com/common.js': 'public/ajax/libs/coffeescript/m.5i5dai.com/common.coffee',
					
					'public/ajax/libs/js/m.5i5dai.com/component/srl.js': 'public/ajax/libs/coffeescript/m.5i5dai.com/component/srl.coffee',

					// Index
					
					'public/ajax/libs/js/m.5i5dai.com/index.js': 'public/ajax/libs/coffeescript/m.5i5dai.com/index.coffee',
					
					'public/ajax/libs/js/m.5i5dai.com/app/index.logic.js': 'public/ajax/libs/coffeescript/m.5i5dai.com/app/index.logic.coffee',

					// Project Detail
					
					'public/ajax/libs/js/m.5i5dai.com/project.detail.js': 'public/ajax/libs/coffeescript/m.5i5dai.com/project.detail.coffee',
					
					'public/ajax/libs/js/m.5i5dai.com/app/project.detail.logic.js': 'public/ajax/libs/coffeescript/m.5i5dai.com/app/project.detail.logic.coffee',

					// Registration Protocol
					
					'public/ajax/libs/js/m.5i5dai.com/registration.protocol.js': 'public/ajax/libs/coffeescript/m.5i5dai.com/registration.protocol.coffee',
					
					'public/ajax/libs/js/m.5i5dai.com/app/registration.protocol.logic.js': 'public/ajax/libs/coffeescript/m.5i5dai.com/app/registration.protocol.logic.coffee',

					// Registration Result
					
					'public/ajax/libs/js/m.5i5dai.com/registration.result.js': 'public/ajax/libs/coffeescript/m.5i5dai.com/registration.result.coffee',
					
					'public/ajax/libs/js/m.5i5dai.com/app/registration.result.logic.js': 'public/ajax/libs/coffeescript/m.5i5dai.com/app/registration.result.logic.coffee',

					// Phone Validation
					
					'public/ajax/libs/js/m.5i5dai.com/phone.validation.js': 'public/ajax/libs/coffeescript/m.5i5dai.com/phone.validation.coffee',
					
					'public/ajax/libs/js/m.5i5dai.com/app/phone.validation.logic.js': 'public/ajax/libs/coffeescript/m.5i5dai.com/app/phone.validation.logic.coffee',

					// Registration
					
					'public/ajax/libs/js/m.5i5dai.com/registration.js': 'public/ajax/libs/coffeescript/m.5i5dai.com/registration.coffee',
					
					'public/ajax/libs/js/m.5i5dai.com/app/registration.logic.js': 'public/ajax/libs/coffeescript/m.5i5dai.com/app/registration.logic.coffee'
					
				}
				
			}
			
		},
		
		uglify: {
			
			options: {
				
				mangle: false
				
			},
			
			dist: {
				
				files: {
					
					'public/ajax/libs/js/m.5i5dai.com/common.min.js': 'public/ajax/libs/js/m.5i5dai.com/common.js',
					
					'public/ajax/libs/js/m.5i5dai.com/component/srl.min.js': 'public/ajax/libs/js/m.5i5dai.com/component/srl.js',

					// Index

					'public/ajax/libs/js/m.5i5dai.com/index.min.js': 'public/ajax/libs/js/m.5i5dai.com/index.js',

					'public/ajax/libs/js/m.5i5dai.com/app/index.logic.min.js': 'public/ajax/libs/js/m.5i5dai.com/app/index.logic.js',

					// Project Detail
					
					'public/ajax/libs/js/m.5i5dai.com/project.detail.min.js': 'public/ajax/libs/js/m.5i5dai.com/project.detail.js',
					
					'public/ajax/libs/js/m.5i5dai.com/app/project.detail.logic.min.js': 'public/ajax/libs/js/m.5i5dai.com/app/project.detail.logic.js',

					// Registration Protocol
					
					'public/ajax/libs/js/m.5i5dai.com/registration.protocol.min.js': 'public/ajax/libs/js/m.5i5dai.com/registration.protocol.js',
					
					'public/ajax/libs/js/m.5i5dai.com/app/registration.protocol.logic.min.js': 'public/ajax/libs/js/m.5i5dai.com/app/registration.protocol.logic.js',

					// Registration Result
					
					'public/ajax/libs/js/m.5i5dai.com/registration.result.min.js': 'public/ajax/libs/js/m.5i5dai.com/registration.result.js',
					
					'public/ajax/libs/js/m.5i5dai.com/app/registration.result.logic.min.js': 'public/ajax/libs/js/m.5i5dai.com/app/registration.result.logic.js',

					// Phone Validation
					
					'public/ajax/libs/js/m.5i5dai.com/phone.validation.min.js': 'public/ajax/libs/js/m.5i5dai.com/phone.validation.js',
					
					'public/ajax/libs/js/m.5i5dai.com/app/phone.validation.logic.min.js': 'public/ajax/libs/js/m.5i5dai.com/app/phone.validation.logic.js',

					// Registration
					
					'public/ajax/libs/js/m.5i5dai.com/registration.min.js': 'public/ajax/libs/js/m.5i5dai.com/registration.js',
					
					'public/ajax/libs/js/m.5i5dai.com/app/registration.logic.min.js': 'public/ajax/libs/js/m.5i5dai.com/app/registration.logic.js'
					
				}
				
			}
			
		},
		
		//TODO: Jshint
		
		jshint: {
			
			all: [
				
				'gruntfile.js',
				
				'public/ajax/libs/js/m.5i5dai.com/common.js',

				'public/ajax/libs/js/m.5i5dai.com/component/srl.js',

				// Index

				'public/ajax/libs/js/m.5i5dai.com/index.js',

				'public/ajax/libs/js/m.5i5dai.com/app/index.logic.js',

				// Project Detail
				
				'public/ajax/libs/coffeescript/m.5i5dai.com/project.detail.js',

				'public/ajax/libs/coffeescript/m.5i5dai.com/app/project.detail.logic.js',

				// Registration Protocol
				
				'public/ajax/libs/js/m.5i5dai.com/registration.protocol.js',

				'public/ajax/libs/js/m.5i5dai.com/app/registration.protocol.logic.js',

				// Registration Result
				
				'public/ajax/libs/js/m.5i5dai.com/registration.result.js',

				'public/ajax/libs/js/m.5i5dai.com/app/registration.result.logic.js',

				// Phone Validation
				
				'public/ajax/libs/js/m.5i5dai.com/phone.validation.js',

				'public/ajax/libs/js/m.5i5dai.com/app/phone.validation.logic.js',

				// Registration
				
				'public/ajax/libs/js/m.5i5dai.com/registration.js',

				'public/ajax/libs/js/m.5i5dai.com/app/registration.logic.js'
				
			]
			
		},
		
		watch: {
			
			html: {
				
				files: ['view/**/*.jade'],
				
				tasks: ['jade', 'htmlmin'],
				
				options: {
					
					livereload: true // needed to run LiveReload
					
				}
				
			},
			
			stylesheet: {
				
				files: ['public/ajax/libs/scss/**/*.scss'],
				
				tasks: ['sass'],
				
				options: {
					
					livereload: true // needed to run LiveReload
					
				}
				
			},
			
			coffeescript: {
				
				files: ['public/ajax/libs/coffeescript/**/*.coffee'],
				
				tasks: ['coffeelint', 'coffee', 'uglify', 'jshint'],
				
				options: {
					
					livereload: true // needed to run LiveReload
					
				}
				
			}
			
		}
		
	});
	
	grunt.loadNpmTasks('grunt-contrib-jade');
	
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	
	grunt.loadNpmTasks('grunt-contrib-sass');
	
	grunt.loadNpmTasks('grunt-coffeelint');
	
	grunt.loadNpmTasks('grunt-contrib-coffee');
	
	grunt.loadNpmTasks('grunt-contrib-uglify');
	
	grunt.loadNpmTasks('grunt-contrib-jshint');
	
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	grunt.registerTask('default', ['watch']);
	
};