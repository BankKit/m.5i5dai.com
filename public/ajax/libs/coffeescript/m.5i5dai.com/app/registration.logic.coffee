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
 	
 	Creation Date: 2014.06.22 18:14 ( Tony ).
 	
 	Last Update: 2014.06.22 22:01 ( Tony ).    ...//TODO: Update the 'Last Update'.
 	
 	Music ( Custom ): Countdown (feat. Makj).mp3    ...//TODO: If you are listenning some music, just write the name of songs.
 	
 	License: ...//TODO: Give a license.
 	
 	Copyright: ...//TODO: Give a copyright.
 ###

define (require) ->

	SJ         = require 'jquery'
	
	jqMigrate  = require 'jqMigrate'
	
	modernizr  = require 'modernizr'
	
	scroller   = require 'component/srl.min'
	
	jqValidate = require 'jquery_validation'
	
	scheck     = require 'scheck'

	_fns = ($) ->

		fnObj =

			config: {}

			init: (settings) ->

				@mixture()

				@checkbox()

				@validation.init()

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

				return

			checkbox: ->

				checkboxOpts =

					checkboxClass: 'studioCheckbox_square-red'

					radioClass: 'studioRadiobox_square-red'

					increaseArea: '0'

				changedCallBack = ->

					return

				unChangedCallBack = ->

					return

				$('#chkAgreement').studioCheck checkboxOpts

				.on 'ifChecked', changedCallBack

				.on 'ifUnchecked', unChangedCallBack

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

						$.validator.addMethod 'password', (value, element) ->

							@optional(element) or /^.*(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[\d\W])(?=.*[!@#\$%&/=?_\.,:;-\\]).*$/i.test value

						, '请输入强度较高的密码'

						return

					addDefaults: ->

						$.validator.setDefaults

							debug: true

							onfocusin: (element) ->

								tip = $(element).closest('form').find '.tip-' + $(element).attr 'id'

								tip.removeClass 'hide'

								return

							onfocusout: (element) ->

								$ element

								.valid()

								return

							onkeyup: (element) ->

								$ element

								.valid()

								return

							focusCleanup: true

							success: (error, element) ->

								parent = $(element).parent()

								tip = $(element).closest('form').find '.tip-' + $(element).attr 'id'

								if parent.hasClass 'err'

									parent.removeClass 'err'

								if not tip.hasClass 'hide'

									tip.addClass 'hide'

								$ error

								.remove()

								return

							errorElement: 'div'

							errorPlacement: (error, element) ->

								tip = element.closest('form').find '.tip-' + element.attr 'id'

								tip.removeClass 'hide'

								if element.attr('type') isnt 'checkbox'

									element.parent().addClass 'err'

								error.appendTo element.closest('form').find '.error-' + element.attr 'id'

								return

						return

				init: (settings) ->

					@config.addLocalization()

					@config.addCustomValidation()

					@config.addDefaults()

					@frmRegisterValior()

					return

				frmRegisterValior: ->

					frmRegisterValior = $ '#frmRegister'

					.validate

						rules:

							iptPhone:

								required: true

								phone: true

							iptPassword:

								required: true

								nowhitespace: true

								password: true

							iptPassDoubleCheck:

								required: true

								nowhitespace: true

								password: true

								equalTo: '#iptPassword'

							iptInvitationCode:

								digits: true

								maxlength: 4

							iptAuthCode:

								required: true

								maxlength: 6

							chkAgreement:

								required: true

						submitHandler: (form, event) ->

							event.preventDefault()

							if $('html').hasClass 'ie8'

								$(form).valid()

								if validationCase.numberOfInvalids() is 0

									$(form).find('button').prop 'disabled', true

									form.submit()

								else

									validationCase.focusInvalid()

									return false

							else

								$(form).find('button').prop 'disabled', true

								form.submit()

							return

					return


		fnObj.init()

		return

	SJ _fns

	return