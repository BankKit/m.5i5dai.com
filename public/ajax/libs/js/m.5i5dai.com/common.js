/**
 * Statement: ...//TODO: Write statement.
 * 
 * Describe: Global configuration of requirejs.    ...//TODO: Check description.
 * 
 * Further Changes, Comments: ...//TODO: Give a further changes and comments link.
 * 
 * Javascript Design Pattern (Code Management):    ...//TODO: Cehck design pattern.
 *     
 *     Namespacing Patterns, Immediately-invoked Function Expressions (IIFE)s
 *     
 *     Namespacing Patterns, Nested namespacing
 *     
 *     Modules Patterns, Object literal notation
 *     
 *     Modules Patterns, Revealing Module Pattern
 *     
 *     Modules Patterns, AMD modules
 *     
 * Docs: ...//TODO: Give a link about project documents.
 * 
 * Original Author: 沈维忠 ( Shen Weizhong / Tony Stark ).
 * 
 * Thanks: ...//TODO: If there are some contributors, just mark them.
 * 
 * Version: 0.1.0-alpha
 * 
 * Creation Date: 2014.05.10 14:53 ( Tony ).
 * 
 * Last Update: 2014.05.15 20:01 ( Tony ).    ...//TODO: Update the 'Last Update'.
 * 
 * Music ( Custom ): Countdown (feat. Makj).mp3    ...//TODO: If you are listenning some music, just write the name of songs.
 * 
 * License: ...//TODO: Give a license.
 * 
 * Copyright: ...//TODO: Give a copyright.
 */

(function (global, document, requirejs, console, undefined) {
	
	"use strict";
	
	var fn, _AMD;
	
	fn = function () {
		
		var boot, baseUrl, cdnjsUrl, jq1x, jq2x;
		
		boot = boot || {};
		
		/* Begin | Options */
			
			baseUrl = '../public/ajax/libs/js';
			
			cdnjsUrl = '//resource.fenqimall.com/ajax/libs/js/';
			
			jq1x = cdnjsUrl + 'jquery/1.11.1/jquery.min';
			
			jq2x = cdnjsUrl + 'jquery/2.1.1/jquery.min';
			
		/* End | Options */
		
		boot.getAgent = function () {
			
			return navigator.userAgent.toLowerCase();
			
		};
		
		boot.isIE = function(userAgent) {
			
			var agent = userAgent || this.getAgent();
			
			return !!agent.match(/msie/i);
			
		};
		
		boot.isGteIE9 = function(userAgent) {
			
			var agent = userAgent || this.getAgent(),
				
				match = agent.match(/msie\D*([\.\d]*)/i),
				
				version = 0;
			
			if (match && match[1]) {
				
				version = match[1];
				
			}
			
			return version >= 9;
			
		};
		
		boot.req = function (jquery) {
			
			requirejs.config({
				
				baseUrl: baseUrl,
				
				enforceDefine: true,
				
				paths: {
					
					modernizr: cdnjsUrl + 'modernizr_amd/modernizr.min',
					
					jqPrivate: cdnjsUrl + 'jquery_private/jquery.private.min',
					
					jquery: jquery,

					jqMigrate: cdnjsUrl + 'jquery_migrate/1.2.1/jquery.migrate',
					
					srl: cdnjsUrl + 'jquery_scroll/0.1.0/jquery.scroll.min',

					jquery_xdomainrequest: 'jquery_xdomainrequest/1.0.2/jquery.xdomainrequest',
					
					easing: cdnjsUrl + 'jquery_easing/1.3/jquery.easing',
					
					cookie: cdnjsUrl + 'jquery_cookie/1.3.1/jquery.cookie.min',

					component: 'fenqimall.com/component',

					uiCore: 'jquery_ui/1.10.4/minified/jquery.ui.core.min',
					
					uiDatePicker: 'jquery_ui/1.10.4/minified/jquery.ui.datepicker.min',
					
					scheck: 'jquery_check/0.1.0/jquery.check.min',
					
					cont: 'jquery_context/0.1.0/jquery.context.min',
					
					slt: 'jquery_select/0.1.0/jquery.selector.min',

					placeholder_: 'jquery_placeholder/3.0.2/jquery.placeholder.min',

					placeholdem_: 'placeholdem/1.0.1/placeholdem.min',

					jquery_validation: 'jquery_validation/1.12.0/jquery.validate',

					jquery_form: 'jquery_form/3.50.0/jquery.form',

					spn: 'spin/2.0.1/spin'
					
				},
				
				waitSeconds: 120,
				
				map: {
					
					'*': {
						
						'jquery': 'jqPrivate'
						
					},
					
					'jqPrivate': {
						
						'jquery': 'jquery'
						
					}
					
				},
				
				skipDataMain: true
				
			});
			
		};
		
		boot.judgement = function (opts) {
			
			if (this.isIE()) {
				
				this.isGteIE9() ? this.req(opts.jq2x) : this.req(opts.jq1x);
				
			} else {
				
				this.req(opts.jq2x);
				
			}
			
		};
		
		boot.judgement({
			
			jq1x: jq1x,
			
			jq2x: jq2x
			
		});
		
	};
	
	_AMD = (function (_register, _module) {
		
		var hasDefine, registryProfile;
		
		hasDefine = typeof define === "function" && define.amd;
		
		registryProfile = function () {
			
			hasDefine ? define(_module) : console.error('Sorry! There is no "define" object.');
			
		};
		
		return {
			
			init: registryProfile
			
		};
		
	}(_AMD || {}, fn)).init();
	
} (window, document, requirejs, (typeof console !== 'undefined' ? console : undefined)));