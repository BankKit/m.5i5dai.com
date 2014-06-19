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
	
	Describe: Global configuration of requirejs.    ...//TODO: Check description.
	
	Further Changes, Comments: ...//TODO: Give a further changes and comments link.
	
	Javascript Design Pattern (Code Management):    ...//TODO: Cehck design pattern.
	    
	    Namespacing Patterns, Immediately-invoked Function Expressions (IIFE)s
	    
	    Namespacing Patterns, Nested namespacing
	    
	    Modules Patterns, Object literal notation
	    
	    Modules Patterns, Revealing Module Pattern
	    
	    Modules Patterns, AMD modules
	    
	Docs: ...//TODO: Give a link about project documents.
	
	Original Author: 沈维忠 ( Shen Weizhong / Tony Stark ).
	
	Thanks: ...//TODO: If there are some contributors, just mark them.
	
	Version: 0.1.0-alpha
	
	Creation Date: 2014.06.13 11:26 ( Tony ).
	
	Last Update: 2014.06.19 11:28 ( Tony ).    ...//TODO: Update the 'Last Update'.
	
	Music ( Custom ): Countdown (feat. Makj).mp3    ...//TODO: If you are listenning some music, just write the name of songs.
	
	License: ...//TODO: Give a license.
	
	Copyright: ...//TODO: Give a copyright.
###

do (global = window, document, requirejs, console = (if typeof console isnt 'undefined' then console else undefined)) ->

	"use strict"

	fn = ->

		boot = boot or {}

		# Begin | Options
			
		baseUrl = '../../public/ajax/libs/js'

		cdnjsUrl = '//resource.fenqimall.com/ajax/libs/js/'

		jq1x = cdnjsUrl + 'jquery/1.11.1/jquery.min'
		
		jq2x = cdnjsUrl + 'jquery/2.1.1/jquery.min'
			
		# End | Options

		boot.getAgent = ->

			navigator.userAgent.toLowerCase()

		boot.isIE =  (userAgent) ->

			agent = userAgent or this.getAgent()

			!!agent.match(/msie/i)

		boot.isGteIE9 = (userAgent) ->

			agent = userAgent or this.getAgent()

			match = agent.match(/msie\D*([\.\d]*)/i)

			version = 0

			if match and match[1]

				version = match[1]

			return version >= 9

		boot.req = (jquery) ->

			requirejs.config

				baseUrl: baseUrl

				enforceDefine: true

				paths:

					modernizr: cdnjsUrl + 'modernizr_amd/modernizr.min'

					jqPrivate: cdnjsUrl + 'jquery_private/jquery.private.min'

					jquery: jquery

					jqMigrate: cdnjsUrl + 'jquery_migrate/1.2.1/jquery.migrate'

					srl: cdnjsUrl + 'jquery_scroll/0.1.0/jquery.scroll.min'

					infiniteScroll: 'jquery_infinite_scroll/2.0.2/jquery.infinite.scroll'

					jquery_xdomainrequest: 'jquery_xdomainrequest/1.0.2/jquery.xdomainrequest'

					easing: cdnjsUrl + 'jquery_easing/1.3/jquery.easing'

					cookie: cdnjsUrl + 'jquery_cookie/1.3.1/jquery.cookie.min'

					component: 'm.5i5dai.com/component'

					scheck: 'jquery_check/0.1.0/jquery.check.min'

					slt: 'jquery_select/0.1.0/jquery.selector.min'

					jquery_validation: 'jquery_validation/1.12.0/jquery.validate'

					spn: 'spin/2.0.1/spin'

				waitSeconds: 120

				map:

					'*':

						'jquery': 'jqPrivate'

					'jqPrivate':

						'jquery': 'jquery'

				skipDataMain: true

			return

		boot.judgement = (opts) ->

			if this.isIE()

				if this.isGteIE9() then this.req(opts.jq2x) else this.req(opts.jq1x)

			else

				this.req(opts.jq2x)

			return

		boot.judgement

			jq1x: jq1x

			jq2x: jq2x

		return

	_AMD = do (_register = _AMD or {}, _module = fn) ->

		hasDefine = typeof define is "function" and define.amd

		registryProfile = ->

			if hasDefine then define(_module) else console.error('Sorry! There is no "define" object.')

		return init: registryProfile

	_AMD.init()

	return