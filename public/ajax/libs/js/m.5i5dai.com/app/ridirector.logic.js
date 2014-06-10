/**
 * Statement: ...//TODO: Write statement.
 * 
 * Describe:     ...//TODO: Check description.
 * 
 * Further Changes, Comments: ...//TODO: Give a further changes and comments link.
 * 
 * Javascript Design Pattern (Code Management):    ...//TODO: Cehck design pattern.
 *     
 *     Namespacing Patterns, Immediately-invoked Function Expressions (IIFE)s
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
 * Creation Date: 2014.05.13 10:25 ( Tony ).
 * 
 * Last Update: 2014.05.13 10:55 ( Tony ).    ...//TODO: Update the 'Last Update'.
 * 
 * Music ( Custom ): Countdown (feat. Makj).mp3    ...//TODO: If you are listenning some music, just write the name of songs.
 * 
 * License: ...//TODO: Give a license.
 * 
 * Copyright: ...//TODO: Give a copyright.
 */

(function (require) {
	
	var fn, _AMD;
	
	fn = function (require) {
		
		var SJ, easing, modernizr, tlns, extend, _mod, mute, evtName, isIE, isGteIE9,

			scroller, placeholder_, placeholdem_;
		
		SJ = require('jquery');

		easing = require('easing');

		modernizr = require('modernizr');
		
		SJ(function ($) {

			tlns = tlns || {}; //top-level namespace

			modernizr.touch ? evtName = 'touchstart' : evtName = 'click';

			scroller = require('component/srl');

			scroller.excute($(':root'));



			var progress_done = function () {

				$('.btns').removeClass('hide').addClass('animated shake');

			};

			$('.bar').animate({left: 0}, {

				duration: 3000,

				easing: 'easeInCirc',

				done: progress_done

			});



			$('a[href=#]').on('click', function (e) {

				e.stopPropagation();

				e.preventDefault();

			});


			
			// TODO: Import basic business logic script here.
			
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
	
} (require));