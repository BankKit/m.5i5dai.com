
/*
				   ___    ___                                                 __
				  /'___\ /'___\                                    __        /\ \__
	  ___    ___ /\ \__//\ \__/   __     __    ____    ___   _ __ /\_\  _____\ \ ,_\
	 /'___\ / __`\ \ ,__\ \ ,__\/'__`\ /'__`\ /',__\  /'___\/\`'__\/\ \/\ '__`\ \ \/
	/\ \__//\ \L\ \ \ \_/\ \ \_/\  __//\  __//\__, `\/\ \__/\ \ \/ \ \ \ \ \L\ \ \ \_
	\ \____\ \____/\ \_\  \ \_\\ \____\ \____\/\____/\ \____\\ \_\  \ \_\ \ ,__/\ \__\
	 \/____/\/___/  \/_/   \/_/ \/____/\/____/\/___/  \/____/ \/_/   \/_/\ \ \/  \/__/
																	  \ \_\
																	   \/_/
	
 	Statement: ...//TODO: Write statement.
 	
 	Describe:     ...//TODO: Check description.
 	
 	Further Changes, Comments: ...//TODO: Give a further changes and comments link.
 	
 	Javascript Design Pattern (Code Management):    ...//TODO: Cehck design pattern.
 	    
 	    Modules Patterns, AMD modules
 	    
 	Docs: ...//TODO: Give a link about project documents.
 	
 	Original Author: Shen Weizhong ( Tony Stark ).
 	
 	Thanks: ...//TODO: If there are some contributors, just mark them.
 	
 	Version: 0.1.0-alpha
 	
 	Creation Date: 2014.06.18 23:36 ( Tony ).
 	
 	Last Update: 2014.06.18 23:45 ( Tony ).    ...//TODO: Update the 'Last Update'.
 	
 	Music ( Custom ): Rio Rio.mp3    ...//TODO: If you are listenning some music, just write the name of songs.
 	
 	License: ...//TODO: Give a license.
 	
 	Copyright: ...//TODO: Give a copyright.
 */
define(function(require) {
  var SJ, bindSrl, mute, srl;
  SJ = require('jquery');
  srl = require('srl');
  mute = true;
  bindSrl = function(obj) {
    obj.studioScroll({
      cursorcolor: '#999',
      zindex: 50,
      cursorborder: 0,
      cursorborderradius: 0,
      smoothscroll: true
    });
  };
  return {
    excute: function(obj) {
      if (obj !== null) {
        bindSrl(obj);
      }
    }
  };
});
