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
 * Creation Date: 2014.05.10 15:05 ( Tony ).
 * 
 * Last Update: 2014.05.14 10:47 ( Tony ).    ...//TODO: Update the 'Last Update'.
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
		
		var SJ,

			jqMigrate,

			easing,

			modernizr,

			tlns,

			extend,

			_mod,

			mute,

			evtName,

			scroller,

			placeholder_;
		
		SJ = require('jquery');

		jqMigrate = require('jqMigrate');

		modernizr = require('modernizr');

		scroller = require('component/srl');

		placeholder_ = require('placeholder_');


		
		SJ(function ($) {

			tlns = tlns || {}; //top-level namespace

			modernizr.touch ? evtName = 'touchstart' : evtName = 'click';

			/*
					 (__)
					 (oo)
			  /-------\/
			 / |     ||----> Docuement Scroller.
			*  ||----||
			  ___/  ___/
			*/

			scroller.excute($(':root'));

			/*
					 (__)
					 (oo)
			  /-------\/
			 / |     ||----> Login/Register Form Switcher.
			*  ||----||
			  ___/  ___/
			*/

			var frmRegister = $('#frmIdxRgt'),

				frmLogin = $('#frmIdxLogin');

			var frmRegister_btnLoginGuide = frmRegister.find('.btnLoginGuide');

			var frmLogin_btnRegistGuide = frmLogin.find('.btnRegistGuide');

			var frmIndexSwitcher = function (e) {

				e.stopPropagation();

				e.preventDefault();

				var _this = $(this),

					itsForm = _this.closest('form');

				itsForm.addClass('hide');

				itsForm.siblings().removeClass('hide');

				if (e.data.carry === 'go to login ...') {

					itsForm.removeClass('wow bounceInLeft');

				}

			};

			frmRegister_btnLoginGuide.on(evtName, {carry: 'go to login ...'}, frmIndexSwitcher);

			frmLogin_btnRegistGuide.on(evtName, {carry: 'go to register ...'}, frmIndexSwitcher);

			/*
					 (__)
					 (oo)
			  /-------\/
			 / |     ||----> Make the default action of the event will not be triggered.
			*  ||----||
			  ___/  ___/
			*/

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