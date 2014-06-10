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
 * Creation Date: 2014.05.13 18:26 ( Tony ).
 * 
 * Last Update: 2014.05.22 12:26 ( Tony ).    ...//TODO: Update the 'Last Update'. Hello World!
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
			
			modernizr,
			
			jqueryXdomainrequest,
			
			jqValidate,
			
			easing,
			
			scroller,
			
			evtName;
		
		
		
		/**
		 * Load all required component.
		 */
		
		SJ                   = require('jquery');
		
		jqMigrate            = require('jqMigrate');
		
		modernizr            = require('modernizr');
		
		jqueryXdomainrequest = require('jquery_xdomainrequest');
		
		jqValidate           = require('jquery_validation');
		
		easing               = require('easing');
		
		scroller             = require('component/srl');
		
		
		
		SJ(function ($) {
			
			var fns, lastColumn;
			
			modernizr.touch ? evtName = 'touchstart' : evtName = 'click';
			
			fns = {
				
				config: {
					
					
					
				},
				
				init: function (settings) {
					
					$('a[href=#]').on('click', function (e) {
						
						e.stopPropagation();
						
						e.preventDefault();
						
					});
					
					this.mixture();
					
					this.validation.init();
					
				},
				
				mixture: function () {
					
					scroller.excute($(':root'));
					
					$('._here .sec-cntent').slideDown();
					
				},
				
				// Performs a smooth page scroll to an anchor on the same page.
				scrollToAnchor: function (target) {
					
					$('html, body').animate({
						
						scrollTop: target.offset().top
						
					}, 400);
					
				},
				
				validation: {
					
					config: {
						
						addLocalization: function () {
							
							$.extend($.validator.messages, {
								
								required: "必须填写",
								
								remote: "请修正此栏位",
								
								email: "请输入有效的电子邮件",
								
								url: "请输入有效的网址",
								
								date: "请输入有效的日期",
								
								dateISO: "请输入有效的日期 (YYYY-MM-DD)",
								
								number: "请输入正确的数字",
								
								digits: "只可输入数字",
								
								creditcard: "请输入有效的信用卡号码",
								
								equalTo: "你的输入不相同",
								
								extension: "请输入有效的后缀",
								
								maxlength: $.validator.format("最多 {0} 个字"),
								
								minlength: $.validator.format("最少 {0} 个字"),
								
								rangelength: $.validator.format("请输入长度为 {0} 至 {1} 之間的字串"),
								
								range: $.validator.format("请输入 {0} 至 {1} 之间的数值"),
								
								max: $.validator.format("请输入不大于 {0} 的数值"),
								
								min: $.validator.format("请输入不小于 {0} 的数值")
								
							});
							
						},
						
						addCustomValidation: function () {
							
							$.validator.addMethod("nowhitespace", function(value, element) {
								
								return this.optional(element) || /^\S+$/i.test(value);
								
							}, '不许存在空格。');
							
							$.validator.addMethod("phone", function(value, element) {
								
								return this.optional(element) || /^0?(13[0-9]|15[012356789]|18[0-9]|14[57])[0-9]{8}$/i.test(value);
								
							}, '请输入正确的手机号码。');
							
							$.validator.addMethod("notEqual", function(value, element, param) {
								
								return this.optional(element) || value != $(param).val();
								
							}, '不可填写与左边相同的内容。');
							
						},
						
						addDefaults: function () {
							
							$.validator.setDefaults({
								
								debug: true,
								
								onfocusout: function(element) {

									if (element.nodeName.toLowerCase() === "select") {

										if ($(element).val() !== '') {

											$(element).valid();

										}

									} else {

										$(element).valid();

									}
									
								},
								
								onkeyup: function(element) {
									
									$(element).valid();
									
								},
								
								success: function(error) {
									
									$(error).remove();
									
								},
								
								errorElement: 'div',
								
								errorPlacement: function (error, element) {
									
									error.appendTo(element.parent().find('.__' + element.attr('id')));
									
								}
								
							});
							
						}
						
					},
					
					init: function (settings) {
						
						this.config.addLocalization();
						
						this.config.addCustomValidation();
						
						this.config.addDefaults();
						
						this.frmSchoolInfoValior();
						
						this.frmContactInfoValior();
						
						this.frmLinkmanInfoValior();
						
						this.toEdit();
						
					},
					
					frmSchoolInfoValior: function () {
						
						var frmSchoolInfoValior = $('#frmSchoolInfo').validate({
							
							rules: {
								
								iptSchoolName: {
									
									required: true
									
								},
								
								iptStuId: {
									
									required: true,
									
									number: true
									
								},
								
								iptStuDepartment: {
									
									required: true
									
								},
								
								iptStuMajor: {
									
									required: true
									
								},
								
								sltEducationalSystem: {
									
									required: true
									
								},
								
								sltEducationBackground: {
									
									required: true
									
								},
								
								sltAdmissionDateYear: {
									
									required: true
									
								},
								
								sltAdmissionDateMonth: {
									
									required: true
									
								},
								
								sltGrade: {
									
									required: true
									
								},
								
								sltStuType: {
									
									required: true
									
								}
								
							},
							
							submitHandler: function (form, event) {
								
								event.preventDefault();
								
								fns.validation.submitHandle(frmSchoolInfoValior, form, {
									
									iptSchoolName: $.trim($('#iptSchoolName').val()),
									
									iptStuId: $.trim($('#iptStuId').val()),
									
									iptStuDepartment: $.trim($('#iptStuDepartment').val()),
									
									iptStuMajor: $.trim($('#iptStuMajor').val()),
									
									sltEducationalSystem: $.trim($('#sltEducationalSystem option:selected').val()),
									
									sltEducationBackground: $.trim($('#sltEducationBackground option:selected').val()),
									
									sltAdmissionDateYear: $.trim($('#sltAdmissionDateYear option:selected').val()),
									
									sltAdmissionDateMonth: $.trim($('#sltAdmissionDateMonth option:selected').val()),
									
									sltGrade: $.trim($('#sltGrade option:selected').val()),
									
									sltStuType: $.trim($('#sltStuType option:selected').val())
									
								}, function () {
									
									var panel = $(form).next();
									
									panel.find('.__1').text($.trim($('#iptSchoolName').val()));
									
									panel.find('.__2').text($.trim($('#sltEducationalSystem').val()));
									
									panel.find('.__3').text($.trim($('#sltEducationBackground option:selected').text()));
									
									panel.find('.__4').text($.trim($('#sltAdmissionDateYear').val()) + '年' + $.trim($('#sltAdmissionDateMonth').val()) + '月');
									
									panel.find('.__5').text($.trim($('#sltGrade option:selected').text()));
									
									panel.find('.__6').text($.trim($('#iptStuId').val()));
									
									panel.find('.__7').text($.trim($('#iptStuDepartment').val()));
									
									panel.find('.__8').text($.trim($('#iptStuMajor').val()));
									
									panel.find('.__9').text($.trim($('#sltStuType option:selected').text()));
									
								});
								
							}
							
						});
						
					},
					
					frmContactInfoValior: function () {
						
						var frmContactInfoValior = $('#frmContactInfo').validate({
							
							rules: {
								
								sltAddressSchoolProvince: {
									
									required: true
									
								},
								
								sltAddressSchoolCity: {
									
									required: true
									
								},
								
								sltAddressSchoolDistrict: {
									
									required: true
									
								},
								
								iptSchoolAddressDetails: {
									
									required: true
									
								},
								
								sltAddressHomeProvince: {
									
									required: true
									
								},
								
								sltAddressHomeCity: {
									
									required: true
									
								},
								
								sltAddressHomeDistrict: {
									
									required: true
									
								},
								
								iptHomeAddressDetails: {
									
									required: true
									
								},
								
								sltAddressNowProvince: {
									
									required: true
									
								},
								
								sltAddressNowCity: {
									
									required: true
									
								},
								
								sltAddressNowDistrict: {
									
									required: true
									
								},
								
								iptAddressNowDetails: {
									
									required: true
									
								}
								
							},
							
							submitHandler: function (form, event) {
								
								event.preventDefault();
								
								fns.validation.submitHandle(frmContactInfoValior, form, {
									
									sltAddressSchoolProvince: $.trim($('#sltAddressSchoolProvince option:selected').val()),
									
									sltAddressSchoolCity: $.trim($('#sltAddressSchoolCity option:selected').val()),
									
									sltAddressSchoolDistrict: $.trim($('#sltAddressSchoolDistrict option:selected').val()),
									
									iptSchoolAddressDetails: $.trim($('#iptSchoolAddressDetails').val()),
									
									sltAddressHomeProvince: $.trim($('#sltAddressHomeProvince option:selected').val()),
									
									sltAddressHomeCity: $.trim($('#sltAddressHomeCity option:selected').val()),
									
									sltAddressHomeDistrict: $.trim($('#sltAddressHomeDistrict option:selected').val()),
									
									iptHomeAddressDetails: $.trim($('#iptHomeAddressDetails').val()),
									
									sltAddressNowType: $.trim($('#sltAddressNowType option:selected').val()),
									
									sltAddressNowProvince: $.trim($('#sltAddressNowProvince option:selected').val()),
									
									sltAddressNowCity: $.trim($('#sltAddressNowCity option:selected').val()),
									
									sltAddressNowDistrict: $.trim($('#sltAddressNowDistrict option:selected').val()),
									
									iptAddressNowDetails: $.trim($('#iptAddressNowDetails').val())
									
								}, function () {
									
									var panel = $(form).next();
									
									panel.next().find('.__1').text( $.trim($('#sltAddressSchoolProvince option:selected').text()) + $.trim($('#sltAddressSchoolCity option:selected').text()) + $.trim($('#sltAddressSchoolDistrict option:selected').text()) + $.trim($('#iptSchoolAddressDetails').val()) );
									
									panel.next().find('.__2').text( $.trim($('#sltAddressHomeProvince option:selected').text()) + $.trim($('#sltAddressHomeCity option:selected').text()) + $.trim($('#sltAddressHomeDistrict option:selected').text()) + $.trim($('#iptHomeAddressDetails').val()) );
									
									panel.next().find('.__3').text( $.trim($('#sltAddressNowProvince option:selected').text()) + $.trim($('#sltAddressNowCity option:selected').text()) + $.trim($('#sltAddressNowDistrict option:selected').text()) + $.trim($('#iptAddressNowDetails').val()) );
									
								});
								
							}
							
						});
						
					},
					
					frmLinkmanInfoValior: function () {
						
						var frmLinkmanInfoValior = $('#frmLinkmanInfo').validate({
							
							rules: {
								
								iptImmediateFamilyName: {
									
									required: true
									
								},
								
								iptEmergencyContactName: {
									
									required: true,
									
									notEqual: '#iptImmediateFamilyName'
									
								},
								
								sltImmediateFamilyRelation: {
									
									required: true
									
								},
								
								sltEmergencyContactRelation: {
									
									required: true,
									
									notEqual: '#sltImmediateFamilyRelation'
									
								},
								
								iptImmediateFamilyWorkUnit: {
									
									required: true
									
								},
								
								iptEmergencyContactWorkUnit: {
									
									required: true,
									
									notEqual: '#iptImmediateFamilyWorkUnit'
									
								},
								
								iptImmediateFamilyPhone: {
									
									required: true,
									
									nowhitespace: true,
									
									phone: true
									
								},
								
								iptEmergencyContactPhone: {
									
									required: true,
									
									nowhitespace: true,
									
									phone: true,
									
									notEqual: '#iptImmediateFamilyPhone'
									
								},
								
								iptImmediateFamilyAddress: {
									
									required: true
									
								},
								
								iptEmergencyContactAddress: {
									
									required: true,
									
									notEqual: '#iptImmediateFamilyAddress'
									
								}
								
							},
							
							submitHandler: function (form, event) {
								
								event.preventDefault();
								
								fns.validation.submitHandle(frmLinkmanInfoValior, form, {
									
									iptImmediateFamilyName: $.trim($('#iptImmediateFamilyName').val()),
									
									iptEmergencyContactName: $.trim($('#iptEmergencyContactName').val()),
									
									sltImmediateFamilyRelation: $.trim($('#sltImmediateFamilyRelation option:selected').val()),
									
									sltEmergencyContactRelation: $.trim($('#sltEmergencyContactRelation option:selected').val()),
									
									iptImmediateFamilyWorkUnit: $.trim($('#iptImmediateFamilyWorkUnit').val()),
									
									iptEmergencyContactWorkUnit: $.trim($('#iptEmergencyContactWorkUnit').val()),
									
									iptImmediateFamilyPhone: $.trim($('#iptImmediateFamilyPhone').val()),
									
									iptEmergencyContactPhone: $.trim($('#iptEmergencyContactPhone').val()),
									
									iptImmediateFamilyAddress: $.trim($('#iptImmediateFamilyAddress').val()),
									
									iptEmergencyContactAddress: $.trim($('#iptEmergencyContactAddress').val())
									
								}, $.noop);
								
							}
							
						});
						
					},
					
					submitHandle: function (validationCase, form, data, fnSuccess) {
						
						if (SJ('html').hasClass('ie8')) {
							
							SJ(form).valid();
							
							if (validationCase.numberOfInvalids() === 0) {
								
								// Offical, fns.validation.submit(form, data, fnSuccess);
								
								fns.validation.success(form);
								
								return false;
								
							} else {
								
								validationCase.focusInvalid();
								
								return false;
								
							}
							
						} else {
							
							// Offical, fns.validation.submit(form, data, fnSuccess);
							
							fns.validation.success(form);
							
							return false;
							
						}
						
					},
					
					submit: function (form, data, fnSuccess) {
						
						var btnSubmit = $(form).find('button'),

							submitStatus = true;
						
						var baseData = {
							
							_frmUuid: +$.trim($(form).data('frmuuid')),
							
							_appNo: +$.trim($(form).data('appno')),
							
							_userId: $.trim($(form).data('userid'))
							
						};
						
						btnSubmit.text('操作中');

						if (submitStatus) {

							submitStatus = false;

							$.ajax({
								
								crossDomain: true,
								
								url: $.trim($(form).prop('action')),
								
								data: $.extend({}, baseData, data),
								
								success: function (data, textStatus, jqXHR) {
									
									if ($.trim(data) === 'true') {
										
										fns.validation.success(form);
										
										fnSuccess();
										
										btnSubmit.text('继续');

										submitStatus = true;
										
									}
									
								}
								
							});

						}
						
					},
					
					success: function (form) {//fns.validation.success(form);
						
						this.accordian(form);
						
					},
					
					accordian: function (form) {
						
						var frm = $(form),
							
							column = frm.closest('._section'),
							
							columnNext = column.next('._section'),
							
							columnDoubleNext,
							
							normalAccordian;
						
						normalAccordian = function () {
							
							if (!columnNext.hasClass('_here')) {
								
								column.addClass('_checked').next('._section').addClass('_here').find('.sec-cntent').slideDown();
								
							} else {
								
								column.addClass('_checked').next('._section').find('.sec-cntent').slideDown();
								
							}
							
							lastColumn = columnNext.find('.sec-cntent');
							
							fns.scrollToAnchor(columnNext);
							
						};
						
						if (!frm.hasClass('_final')) {
							
							if (frm.data('frmuuid') === 1) {
								
								columnDoubleNext = columnNext.next('._section');
								
								if (columnNext.hasClass('_checked')) {
									
									if (!columnDoubleNext.hasClass('_here')) {
										
										column.addClass('_checked');
										
										columnDoubleNext.addClass('_here').find('.sec-cntent').slideDown();
										
									} else {
										
										column.addClass('_checked');
										
										columnDoubleNext.find('.sec-cntent').slideDown();
										
									}
									
									lastColumn = columnDoubleNext.find('.sec-cntent');
									
									fns.scrollToAnchor(columnDoubleNext);
									
								} else {
									
									normalAccordian();
									
								}
								
							} else {
								
								normalAccordian();
								
							}
							
						} else {
							
							$('.redirector-link').get(0).click();
							
						}
						
					},
					
					toEdit: function () {
						
						$('.to-edit').on(evtName, function () {
							
							var that = $(this),
								
								column = that.closest('._section'),
								
								lastColumnSection = lastColumn.closest('._section');
							
							if (!column.hasClass('_here')) {
								
								column.addClass('_here');
								
							}
							
							column.removeClass('_checked');
							
							fns.scrollToAnchor(column);
							
							if (lastColumnSection.hasClass('_here')) {
								
								lastColumnSection.removeClass('_here');
								
							}
							
							if (!lastColumn.closest('._section').hasClass('_checked') || !lastColumn.closest('._section').find('form').hasClass('_final')) {
								
								lastColumn.slideUp();
								
							}
							
							lastColumn = column.find('.sec-cntent');
							
						});
						
					}
					
				}
				
			};
			
			fns.init();













































			






			$.ajax({

				crossDomain: true,

				url: $.trim($('#frmContactInfo').data('geography')),

				data: {

					type: '省'

				},

				dataType: 'json',

				timeout: 120000,

				success: function (data, textStatus, jqXHR) {

					var _html;

					$.each(data, function (idx, obj) {

						_html = $('<option/>');

						_html.val(obj.provinceId).text(obj.province);

						_html.appendTo($('#sltAddressSchoolProvince, #sltAddressHomeProvince, #sltAddressNowProvince'));

					});

					$.each($('#sltAddressSchoolProvince, #sltAddressHomeProvince, #sltAddressNowProvince'), function (idx, obj) {
						
						var _this = $(this),
							
							_thisSelected = _this.data('selected');
						
						if (_thisSelected !== '') {
							
							_this.children('option[value='+ _thisSelected +']').prop('selected', true);

							var _city = _this.parent().find('select').filter(':eq(1)');

							if (_city.data('selected') !== '') {

								$.ajax({

									crossDomain: true,

									url: $.trim($('#frmContactInfo').data('geography')),

									data: {

										type: '市',

										uuid: _thisSelected

									},

									dataType: 'json',

									timeout: 120000,

									success: function (data, textStatus, jqXHR) {

										$.each(data, function (idx, obj) {

											_html = $('<option/>');

											_html.val(obj.cityId).text(obj.city);

											_city.append(_html);

										});

										_city.children('option[value='+ _city.data('selected') +']').prop('selected', true);

										var _district = _this.parent().find('select').filter(':eq(2)');

										//console.log(_district.data('selected'));
										//
										//console.log(_city.data('selected'));

										if (_district.data('selected') !== '') {

											$.ajax({

												crossDomain: true,

												url: $.trim($('#frmContactInfo').data('geography')),

												data: {

													type: '区',

													uuid: _city.data('selected')

												},

												dataType: 'json',

												timeout: 120000,

												success: function (data, textStatus, jqXHR) {

													var _html;

													$.each(data, function (idx, obj) {

														_html = $('<option/>');

														_html.val(obj.areaId).text(obj.area);

														_district.append(_html);

													});

													_district.children('option[value='+ _district.data('selected') +']').prop('selected', true);

												}

											});

										}

									}

								});

							}
							
						}
						
					});

				}

			});


			//if ($('#sltAddressSchoolProvince').data('selected') !== '') {}




			var _slt = $('select');
			
			$.each(_slt, function (idx, obj) {
				
				var _this = $(this),
					
					_thisSelected = _this.data('selected');
				
				if (_thisSelected !== '') {
					
					_this.children('option[value='+ _thisSelected +']').prop('selected', true);
					
				}
				
			});







			if ($('#sltEducationBackground').data('selected') !== '') {

				var sltGrade      = $('#sltGrade');

				switch ($('#sltEducationBackground').data('selected').toLowerCase()) {

					case '': 

						break;

					case 'edc1':

						var _html;

						sltGrade.children().remove();

						var _set = [

							{

								_val: 'CLA1',

								_text: '预一'

							}

						];

						for (var i = 0; i < _set.length; i++) {

							_html = $('<option/>');

							_html.val(_set[i]._val).text(_set[i]._text);

							_html.appendTo(sltGrade);

						}

						break;

					case 'edc2': 

						sltGrade.children().remove();

						var _set = [

							{

								_val: 'CLA5',

								_text: '大一'

							},

							{

								_val: 'CLA6',

								_text: '大二'

							},

							{

								_val: 'CLA7',

								_text: '大三'

							}

						];

						for (var i = 0; i < _set.length; i++) {

							_html = $('<option/>');

							_html.val(_set[i]._val).text(_set[i]._text);

							_html.appendTo(sltGrade);

						}

						break;

					case 'edc3': 

						var _html;

						sltGrade.children().remove();

						var _set = [

							{

								_val: 'CLA5',

								_text: '大一'

							},

							{

								_val: 'CLA6',

								_text: '大二'

							},

							{

								_val: 'CLA7',

								_text: '大三'

							},

							{

								_val: 'CLA8',

								_text: '大四'

							}

						];

						for (var i = 0; i < _set.length; i++) {

							_html = $('<option/>');

							_html.val(_set[i]._val).text(_set[i]._text);

							_html.appendTo(sltGrade);

						}

						break;

					case 'edc4': 

						var _html;

						sltGrade.children().remove();

						var _set = [

							{

								_val: 'CLA9',

								_text: '研一'

							},

							{

								_val: 'CLA0',

								_text: '研二'

							},

							{

								_val: 'CLAA',

								_text: '研三'

							}

						];

						for (var i = 0; i < _set.length; i++) {

							_html = $('<option/>');

							_html.val(_set[i]._val).text(_set[i]._text);

							_html.appendTo(sltGrade);

						}

						break;

					case 'edc5': 

						var _html;

						sltGrade.children().remove();

						var _set = [

							{

								_val: 'CLAB',

								_text: '博一'

							},

							{

								_val: 'CLAC',

								_text: '博二'

							},

							{

								_val: 'CLAD',

								_text: '博三'

							}

						];

						for (var i = 0; i < _set.length; i++) {

							_html = $('<option/>');

							_html.val(_set[i]._val).text(_set[i]._text);

							_html.appendTo(sltGrade);

						}

						break;

					case 'edc6': 

						var _html;

						sltGrade.children().remove();

						var _set = [

							{

								_val: 'CLAE',

								_text: '专科以下'

							}

						];

						for (var i = 0; i < _set.length; i++) {

							_html = $('<option/>');

							_html.val(_set[i]._val).text(_set[i]._text);

							_html.appendTo(sltGrade);

						}

						break;

					default:

						break;

				}

			}



			$('#sltEducationBackground').on('change', function () {

				var that          = $(this),
					
					educationCode = that.val(),
					
					sltGrade      = $('#sltGrade');

				switch (educationCode.toLowerCase()) {

					case '': 

						break;

					case 'edc1':

						var _html;

						sltGrade.children().remove();

						var _set = [

							{

								_val: 'CLA1',

								_text: '预一'

							}

						];

						for (var i = 0; i < _set.length; i++) {

							_html = $('<option/>');

							_html.val(_set[i]._val).text(_set[i]._text);

							_html.appendTo(sltGrade);

						}

						break;

					case 'edc2': 

						sltGrade.children().remove();

						var _set = [

							{

								_val: 'CLA5',

								_text: '大一'

							},

							{

								_val: 'CLA6',

								_text: '大二'

							},

							{

								_val: 'CLA7',

								_text: '大三'

							}

						];

						for (var i = 0; i < _set.length; i++) {

							_html = $('<option/>');

							_html.val(_set[i]._val).text(_set[i]._text);

							_html.appendTo(sltGrade);

						}

						break;

					case 'edc3': 

						var _html;

						sltGrade.children().remove();

						var _set = [

							{

								_val: 'CLA5',

								_text: '大一'

							},

							{

								_val: 'CLA6',

								_text: '大二'

							},

							{

								_val: 'CLA7',

								_text: '大三'

							},

							{

								_val: 'CLA8',

								_text: '大四'

							}

						];

						for (var i = 0; i < _set.length; i++) {

							_html = $('<option/>');

							_html.val(_set[i]._val).text(_set[i]._text);

							_html.appendTo(sltGrade);

						}

						break;

					case 'edc4': 

						var _html;

						sltGrade.children().remove();

						var _set = [

							{

								_val: 'CLA9',

								_text: '研一'

							},

							{

								_val: 'CLA0',

								_text: '研二'

							},

							{

								_val: 'CLAA',

								_text: '研三'

							}

						];

						for (var i = 0; i < _set.length; i++) {

							_html = $('<option/>');

							_html.val(_set[i]._val).text(_set[i]._text);

							_html.appendTo(sltGrade);

						}

						break;

					case 'edc5': 

						var _html;

						sltGrade.children().remove();

						var _set = [

							{

								_val: 'CLAB',

								_text: '博一'

							},

							{

								_val: 'CLAC',

								_text: '博二'

							},

							{

								_val: 'CLAD',

								_text: '博三'

							}

						];

						for (var i = 0; i < _set.length; i++) {

							_html = $('<option/>');

							_html.val(_set[i]._val).text(_set[i]._text);

							_html.appendTo(sltGrade);

						}

						break;

					case 'edc6': 

						var _html;

						sltGrade.children().remove();

						var _set = [

							{

								_val: 'CLAE',

								_text: '专科以下'

							}

						];

						for (var i = 0; i < _set.length; i++) {

							_html = $('<option/>');

							_html.val(_set[i]._val).text(_set[i]._text);

							_html.appendTo(sltGrade);

						}

						break;

					default:

						break;

				}

			});



			$('#sltAddressSchoolProvince, #sltAddressHomeProvince, #sltAddressNowProvince').on('change', function () {

				var _this = $(this);

				switch (_this.attr('id')) {

					case 'sltAddressSchoolProvince':

						$('#sltAddressSchoolCity').children().remove();

						break;

					case 'sltAddressHomeProvince':

						$('#sltAddressHomeCity').children().remove();

						break;

					case 'sltAddressNowProvince':

						$('#sltAddressNowCity').children().remove();

						break;

					default:

						break;

				}

				$.ajax({

					crossDomain: true,

					url: $.trim($('#frmContactInfo').data('geography')),

					data: {

						type: '市',

						uuid: _this.find('option:selected').val()

					},

					dataType: 'json',

					timeout: 120000,

					success: function (data, textStatus, jqXHR) {

						var _html;

						$.each(data, function (idx, obj) {

							_html = $('<option/>');

							_html.val(obj.cityId).text(obj.city);

							switch (_this.attr('id')) {

								case 'sltAddressSchoolProvince':

									$('#sltAddressSchoolCity').append(_html);

									break;

								case 'sltAddressHomeProvince':

									$('#sltAddressHomeCity').append(_html);

									break;

								case 'sltAddressNowProvince':

									$('#sltAddressNowCity').append(_html);

									break;

								default:

									break;

							}

						});

					}

				});

			});



			$('#sltAddressSchoolCity, #sltAddressHomeCity, #sltAddressNowCity').on('change', function () {

				var _this = $(this);

				switch (_this.attr('id')) {

					case 'sltAddressSchoolCity':

						$('#sltAddressSchoolDistrict').children().remove();

						break;

					case 'sltAddressHomeCity':

						$('#sltAddressHomeDistrict').children().remove();

						break;

					case 'sltAddressNowCity':

						$('#sltAddressNowDistrict').children().remove();

						break;

					default:

						break;

				}

				$.ajax({

					crossDomain: true,

					url: $.trim($('#frmContactInfo').data('geography')),

					data: {

						type: '区',

						uuid: _this.find('option:selected').val()

					},

					dataType: 'json',

					timeout: 120000,

					success: function (data, textStatus, jqXHR) {

						var _html;

						$.each(data, function (idx, obj) {

							_html = $('<option/>');

							_html.val(obj.areaId).text(obj.area);

							switch (_this.attr('id')) {

								case 'sltAddressSchoolCity':

									$('#sltAddressSchoolDistrict').append(_html);

									break;

								case 'sltAddressHomeCity':

									$('#sltAddressHomeDistrict').append(_html);

									break;

								case 'sltAddressNowCity':

									$('#sltAddressNowDistrict').append(_html);

									break;

								default:

									break;

							}

						});

					}

				});

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

