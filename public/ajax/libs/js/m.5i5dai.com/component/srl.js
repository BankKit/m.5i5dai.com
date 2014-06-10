/**
 * Statement: ...//TODO: Write statement.
 * 
 * Describe:     ...//TODO: Check description.
 * 
 * Further Changes, Comments: ...//TODO: Give a further changes and comments link.
 * 
 * Javascript Design Pattern (Code Management):    ...//TODO: Cehck design pattern.
 *     
 *     Modules Patterns, AMD modules
 *     
 * Docs: ...//TODO: Give a link about project documents.
 * 
 * Original Author: Shen Weizhong ( Tony Stark ).
 * 
 * Thanks: ...//TODO: If there are some contributors, just mark them.
 * 
 * Version: 0.1.0-alpha
 * 
 * Creation Date: 2014.05.10 14:58 ( Tony ).
 * 
 * Last Update: 2014.05.13 18:34 ( Tony ).    ...//TODO: Update the 'Last Update'.
 * 
 * Music ( Custom ): Rio Rio.mp3    ...//TODO: If you are listenning some music, just write the name of songs.
 * 
 * License: ...//TODO: Give a license.
 * 
 * Copyright: ...//TODO: Give a copyright.
 */

define(function (require) {

	var SJ, srl, bindSrl, mute;



	SJ = require('jquery');

	srl = require('srl');

	mute = true;



	bindSrl = function (obj) {

		obj.studioScroll({

			cursorcolor: '#999',

			zindex: 50,

			cursorborder: 0,

			cursorborderradius: 0,

			smoothscroll: true

		});

	};



	return {

		excute: function (obj) {

			if (obj !== null) {

				bindSrl(obj);

			}

		}

	};

});