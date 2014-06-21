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
 	
 	Creation Date: 2014.06.20 18:23 ( Tony ).
 	
 	Last Update: 2014.06.22 03:58 ( Tony ).    ...//TODO: Update the 'Last Update'.
 	
 	Music ( Custom ): Countdown (feat. Makj).mp3    ...//TODO: If you are listenning some music, just write the name of songs.
 	
 	License: ...//TODO: Give a license.
 	
 	Copyright: ...//TODO: Give a copyright.
 ###

define (require) ->

	SJ         = require('jquery')
	
	jqMigrate  = require('jqMigrate')
	
	modernizr  = require('modernizr')
	
	scroller   = require('component/srl.min')
	
	jqValidate = require('jquery_validation')

	_fns = ($) ->

		fnObj =

			config: {}

			init: (settings) ->

				@mixture()

				return

			helpers:

				pdControl: (e) ->

					e.stopPropagation()

					e.preventDefault()

					return

				clickOrTouch: ->

					if modernizr.touch

						evtName = 'touchstart'

					else

						evtName = 'click'

					return evtName

			mixture: ->

				helpers = @helpers

				$('a[href=#]').on helpers.clickOrTouch(), (e) ->

					helpers.pdControl e

					return

				# HTML Scroll
				scroller.excute $ ':root'

				@countdown()

				@validation.init()

				return

			validation:

				config:

					addLocalization: ->

						$.extend $.validator.messages,
							
							required: '必须填写'
							
							remote: '请修正此栏位'
							
							email: '请输入有效的电子邮件'
							
							url: '请输入有效的网址'
							
							date: '请输入有效的日期'
							
							dateISO: '请输入有效的日期 (YYYY-MM-DD)'
							
							number: '请输入正确的数字'
							
							digits: '只可输入数字'
							
							creditcard: '请输入有效的信用卡号码'
							
							equalTo: '你的输入不相同'
							
							extension: '请输入有效的后缀'
							
							maxlength: $.validator.format '最多 {0} 个字'
							
							minlength: $.validator.format '最少 {0} 个字'
							
							rangelength: $.validator.format '请输入长度为 {0} 至 {1} 之間的字串'
							
							range: $.validator.format '请输入 {0} 至 {1} 之间的数值'
							
							max: $.validator.format '请输入不大于 {0} 的数值'
							
							min: $.validator.format '请输入不小于 {0} 的数值'

						return

					addCustomValidation: ->

						$.validator.addMethod 'nowhitespace', (value, element) ->

							@optional(element) or /^\S+$/i.test value

						,'不许存在空格。'

						$.validator.addMethod 'phone', (value, element) ->
							
							@optional(element) or /^0?(13[0-9]|15[012356789]|18[0-9]|14[57])[0-9]{8}$/i.test value
							
						,'请输入正确的手机号码。'
						
						$.validator.addMethod 'notEqual', (value, element, param) ->
							
							@optional(element) or value isnt $(param).val()
							
						, '不可填写与左边相同的内容。'

						return

					addDefaults: ->

						$.validator.setDefaults

							debug: true

							onfocusout: (element) ->

								$(element).valid()

								return

							onkeyup: (element) ->

								$(element).valid()

								return

							success: (error) ->

								$(error).remove()

								return

							errorElement: 'div'

							errorPlacement: (error, element) ->

								error.appendTo element.parent().parent().find '._' + element.attr 'id'

								return

						return

				init: (settings) ->

					@config.addLocalization()

					@config.addCustomValidation()

					@config.addDefaults()

					@frmValiCodeValior()

					return

				frmValiCodeValior: ->

					frmValiCodeValior = $('#frmValiCode').validate

						rules:

							iptValiCode:

								required: true

								digits: true

								maxlength: 6

						submitHandler: (form, event) ->

							event.preventDefault()

							if $('html').hasClass 'ie8'

								$(form).valid()

								if validationCase.numberOfInvalids() is 0

									form.submit()

								else

									validationCase.focusInvalid()

									return false

							else

								form.submit()

							return

					return

			countdown: ->

				helpers = @helpers

				resent = $ '.btnResent'

				countdownNum = ->

					resent.children 'span'

				countdownPos = $ '<span/>'

				resentPermission = false

				resent.on helpers.clickOrTouch(), (e) ->

					if not resentPermission

						helpers.pdControl e

					else

						helpers.pdControl e

						resentPermission = false

						resent.empty().append countdownPos

						countdownNum().after '秒后重发'

						countdownNum().text 60

						intervalID_1 = window.setInterval countDown, 1000

					return

				countDown = ->

					i = +countdownNum().text()

					if i is 0

						resent.text '重新发送'

						resentPermission = true

						window.clearInterval intervalID_1

					else

						i--

						countdownNum().text i

					return

				intervalID_1 = window.setInterval countDown, 1000

				return


		fnObj.init()

		return

	SJ _fns

	return