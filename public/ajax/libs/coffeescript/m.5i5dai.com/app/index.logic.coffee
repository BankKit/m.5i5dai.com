###
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
 	    
 	    Namespacing Patterns, Immediately-invoked Function Expressions (IIFE)s
 	    
 	    Modules Patterns, Revealing Module Pattern
 	    
 	    Modules Patterns, AMD modules
 	    
 	Docs: ...//TODO: Give a link about project documents.
 	
 	Original Author: 沈维忠 ( Shen Weizhong / Tony Stark ).
 	
 	Thanks: ...//TODO: If there are some contributors, just mark them.
 	
 	Version: 0.1.0-alpha
 	
 	Creation Date: 2014.06.18 23:19 ( Tony ).
 	
 	Last Update: 2014.06.18 23:55 ( Tony ).    ...//TODO: Update the 'Last Update'.
 	
 	Music ( Custom ): Countdown (feat. Makj).mp3    ...//TODO: If you are listenning some music, just write the name of songs.
 	
 	License: ...//TODO: Give a license.
 	
 	Copyright: ...//TODO: Give a copyright.
 ###

define (require) ->

	SJ = require('jquery')

	jqMigrate = require('jqMigrate')

	modernizr = require('modernizr')

	infiniteScroll = require('infiniteScroll')

	scroller = require('component/srl.min')

	_fns = ($) ->

		fnObj =

			config: {}

			init: (settings) ->

				this.mixture()

				return

			mixture: ->

				$('a[href=#]').on 'click', (e) ->

					e.stopPropagation()

					e.preventDefault()

					return

				scroller.excute $(':root')

				infiniteOpts =

					loading:

						finishedMsg: '亲~ 已经没有更多内容啦~'

						msgText: '正在努力加载中...'

					state:

						isDuringAjax: false

						isInvalidPage: false

						isDestroyed: false

						isDone: false

						isPaused: false

						currPage: 1

					debug: true

					binder: $(window)

					navSelector: '#infiniteNext'

					nextSelector: '#infiniteNext a'

					animate: true

					extraScrollPx: 150

					bufferPx: 5

					infid: 0

					dataType: 'json'

					appendCallback: false

				$('.listTable').infinitescroll infiniteOpts, (json, opts) ->

					console.log 'Requsted!'

					return

				return

		fnObj.init()

		return

	SJ _fns

	return