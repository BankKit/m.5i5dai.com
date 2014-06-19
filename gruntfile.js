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
					
					"view/html/index.min.html": "view/html/index.html"
					
				}
				
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

					'public/ajax/libs/css/m.5i5dai.com/index.css': 'public/ajax/libs/scss/m.5i5dai.com/index.scss'
					
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
					
					'public/ajax/libs/js/m.5i5dai.com/app/index.logic.js': 'public/ajax/libs/coffeescript/m.5i5dai.com/app/index.logic.coffee'
					
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

					'public/ajax/libs/js/m.5i5dai.com/app/index.logic.min.js': 'public/ajax/libs/js/m.5i5dai.com/app/index.logic.js'
					
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

				'public/ajax/libs/js/m.5i5dai.com/app/index.logic.js'
				
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