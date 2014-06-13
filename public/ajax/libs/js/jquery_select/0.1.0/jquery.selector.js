/**
 * Statement: ...//TODO: Write statement.
 * 
 * Describe: A jQuery plugin for replacing default select elements.    ...//TODO: Check description.
 * 
 * Further Changes, Comments: ...//TODO: Give a further changes and comments link.
 * 
 * Javascript Design Pattern (Code Management):
 *     
 *     Namespacing Patterns, Immediately-invoked Function Expressions (IIFE)s
 *     
 *     Modules Patterns, Object literal notation
 *     
 *     Module Patterns, Module pattern
 *     
 *     Modules Patterns, Revealing Module Pattern
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
 * Creation Date: 2014.01.02 15:24 ( Tony ).
 * 
 * Last Update: 2014.01.03 16:40 ( Tony ).    ...//TODO: Update the 'Last Update'.
 * 
 * Music ( Custom ): ...//TODO: If you are listenning some music, just write the name of songs.
 * 
 * License: ...//TODO: Give a license.
 * 
 * Copyright: ...//TODO: Give a copyright.
 */

(function (global, document, require, console) {
	
	"use strict";
	
	var fn, _AMD;
	
	fn = function (require) {
		
		var SJ;
		
		SJ = require('jquery');
		
		(function ($, window) {
			
			var guid = 0,
				
				isFirefox = window.navigator.userAgent.toLowerCase().indexOf('firefox') > -1,
				
				isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test( (window.navigator.userAgent||window.navigator.vendor||window.opera) );
			
			var options = {
				
				callback: $.noop,
				
				cover: false,
				
				customClass: "",
				
				label: "",
				
				external: false,
				
				links: false,
				
				trim: 0
				
			};
			
			var pub = {
				
				/**
				 * Sets default plugin options
				 */
				
				defaults: function(opts) {
					
					options = $.extend(options, opts || {});
					
					return $(this);
					
				},
				
				/**
				 * Disables target instance or option
				 */
				
				disable: function(option) {
					
					return $(this).each(function(i, input) {
						
						var data = $(input).next(".selecter").data("selecter");
						
						if (typeof data !== "undefined") {
							
							if (typeof option !== "undefined") {
								
								var index = data.$items.index( data.$items.filter("[data-value=" + option + "]") );
								
								data.$items.eq(index).addClass("disabled");
								
								data.$options.eq(index).prop("disabled", true);
								
							} else {
								
								if (data.$selecter.hasClass("open")) {
									
									data.$selecter.find(".selecter-selected").trigger("click");
									
								}
								
								data.$selecter.addClass("disabled");
								
								data.$select.prop("disabled", true);
								
							}
							
						}
						
					});
					
				},
				
				/**
				 * Enables target instance or option
				 */
				
				enable: function(option) {
					
					return $(this).each(function(i, input) {
						
						var data = $(input).next(".selecter").data("selecter");
						
						
						if (typeof data !== "undefined") {
							
							if (typeof option !== "undefined") {
								
								var index = data.$items.index( data.$items.filter("[data-value=" + option + "]") );
								
								data.$items.eq(index).removeClass("disabled");
								
								data.$options.eq(index).prop("disabled", false);
								
							} else {
								
								data.$selecter.removeClass("disabled");
								
								data.$select.prop("disabled", false);
								
							}
							
						}
						
					});
					
				},
				
				/**
				 * Removes instance of plugin
				 */
				
				destroy: function() {
					
					return $(this).each(function(i, input) {
						
						var $input = $(input),
							
							$selecter = $input.next(".selecter");
						
						if ($selecter.length) {
							
							if ($selecter.hasClass("open")) {
								
								$selecter.find(".selecter-selected").trigger("click");
								
							}
							
							// Scroller support
							if ($.fn.scroller !== undefined) {
								
								$selecter.find(".selecter-options").scroller("destroy");
								
							}
							
							$input.off(".selecter").removeClass("selecter-element").show();
							
							$selecter.off(".selecter").remove();
							
						}
						
					});
					
				}
				
			};
			
			/**
			 * Initializes plugin
			 */
			
			function _init(opts) {
				
				// Local options
				opts = $.extend({}, options, opts || {});
				
				// Apply to each element
				var $items = $(this);
				
				for (var i = 0, count = $items.length; i < count; i++) {
					
					_build($items.eq(i), opts);
					
				}
				
				return $items;
				
			}
			
			/**
			 * Builds each instance
			 */
			
			function _build($select, opts) {
				
				if (!$select.hasClass("selecter-element")) {
					
					// EXTEND OPTIONS
					opts = $.extend({}, opts, $select.data("selecter-options"));
					
					if (opts.external) {
						
						opts.links = true;
						
					}
					
					// Build options array
					var $allOptions = $select.find("option, optgroup"),
						
						$options = $allOptions.filter("option"),
						
						$originalOption = $options.filter(":selected"),
						
						originalIndex = (opts.label !== "") ? -1 : $options.index($originalOption),
						
						wrapperTag = (opts.links) ? "nav" : "div";
					
					opts.multiple = $select.prop("multiple");
					
					opts.disabled = $select.is(":disabled");
					
					// Build HTML
					var html = '<' + wrapperTag + ' class="selecter ' + opts.customClass;
					
					// Special case classes
					if (isMobile) {
						
						html += ' mobile';
						
					} else if (opts.cover) {
						
						html += ' cover';
						
					}
					
					if (opts.multiple) {
						
						html += ' multiple';
						
					} else {
						
						html += ' closed';
						
					}
					
					if (opts.disabled) {
						
						html += ' disabled';
						
					}
					
					html += '">';
					
					if (!opts.multiple) {
						
						html += '<span class="selecter-selected">';
						
						html += $('<span></span').text( _trim(((opts.label !== "") ? opts.label : $originalOption.text()), opts.trim) ).html();
						
						html += '</span>';
						
					}
					
					html += '<div class="selecter-options">';
					
					html += '</div>';
					
					html += '</' + wrapperTag + '>';
					
					// Modify DOM
					$select.addClass("selecter-element").after(html);
					
					// Store plugin data
					var $selecter = $select.next(".selecter"),
						
						data = $.extend({
							
							$select: $select,
							
							$allOptions: $allOptions,
							
							$options: $options,
							
							$selecter: $selecter,
							
							$selected: $selecter.find(".selecter-selected"),
							
							$itemsWrapper: $selecter.find(".selecter-options"),
							
							index: originalIndex,
							
							guid: guid++
							
						}, opts);
					
					_buildOptions(data);
					
					// Scroller support
					if ($.fn.scroller !== undefined) {
						
						data.$itemsWrapper.scroller();
						
					}
					
					// Bind click events
					data.$selecter.on("click.selecter", ".selecter-selected", data, _handleClick)
								  .on("click.selecter", ".selecter-item", data, _select)
								  .on("selecter-close", data, _close)
								  .data("selecter", data);
					
					// Bind Blur/focus events
					if ((!data.links && !isMobile) || isMobile) {
						
						data.$select.on("change", data, _change).on("blur.selecter", data, _blur);
						
						if (!isMobile) {
							
							data.$select.on("focus.selecter", data, _focus);
							
						}
						
					} else {
						
						// Disable browser focus/blur for jump links
						data.$select.hide();
						
					}
					
				}
				
			}
			
			/**
			 * Builds instance's option set
			 */
			
			function _buildOptions(data) {
				
				var html = '',
					
					itemTag = (data.links) ? "a" : "span",
					
					j = 0;
				
				for (var i = 0, count = data.$allOptions.length; i < count; i++) {
					
					var $op = data.$allOptions.eq(i);
					
					// Option group
					if ($op[0].tagName === "OPTGROUP") {
						
						html += '<span class="selecter-group';
						
						// Disabled groups
						if ($op.is(":disabled")) {
							
							html += ' disabled';
							
						}
						
						html += '">' + $op.attr("label") + '</span>';
						
					} else {
						
						var opVal = $op.val();
						
						if (!$op.attr("value")) {
							
							$op.attr("value", opVal);
							
						}
						
						html += '<' + itemTag + ' class="selecter-item';
						
						// Default selected value - now handles multi's thanks to @kuilkoff 
						if ($op.is(':selected') && data.label === "") {
							
							html += ' selected';
							
						}
						
						// Disabled options
						if ($op.is(":disabled")) {
							
							html += ' disabled';
							
						}
						
						html += '" ';
						
						if (data.links) {
							
							html += 'href="' + opVal + '"';
							
						} else {
							
							html += 'data-value="' + opVal + '"';
							
						}
						
						html += '>' + $("<span></span>").text( _trim($op.text(), data.trim) ).html() + '</' + itemTag + '>';
						
						j++;
						
					}
					
				}
				
				data.$itemsWrapper.html(html);
				
				data.$items = data.$selecter.find(".selecter-item");
				
			}
			
			/**
			 * Handles click to selected item
			 */
			
			function _handleClick(e) {
				
				e.preventDefault();
				
				e.stopPropagation();
				
				var data = e.data;
				
				if (!data.$select.is(":disabled")) {
					
					$(".selecter").not(data.$selecter).trigger("selecter-close", [data]);
					
					// Handle mobile
					if (isMobile) {
						
						var el = data.$select[0];
						
						if (window.document.createEvent) { // All
							
							var evt = window.document.createEvent("MouseEvents");
							
							evt.initMouseEvent("mousedown", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
							
							el.dispatchEvent(evt);
							
						} else if (el.fireEvent) { // IE
							
							el.fireEvent("onmousedown");
							
						}
						
					} else {
						
						// Delegate intent
						if (data.$selecter.hasClass("closed")) {
							
							_open(e);
							
						} else if (data.$selecter.hasClass("open")) {
							
							_close(e);
							
						}
						
					}
					
				}
				
			}
			
			/**
			 * Opens option set
			 */
			
			function _open(e) {
				
				e.preventDefault();
				
				e.stopPropagation();
				
				var data = e.data;
				
				// Make sure it's not alerady open
				if (!data.$selecter.hasClass("open")) {
					
					var selectOffset = data.$selecter.offset(),
						
						bodyHeight = $("body").outerHeight(),
						
						optionsHeight = data.$itemsWrapper.outerHeight(true);
					
					// Calculate bottom of document
					if (selectOffset.top + optionsHeight > bodyHeight) {
						
						data.$selecter.addClass("bottom");
						
					}
					
					data.$itemsWrapper.show();
					
					// Bind Events
					data.$selecter.removeClass("closed").addClass("open");
					
					$("body").on("click.selecter-" + data.guid, ":not(.selecter-options)", data, _closeHelper);
					
					var selectedOffset = (data.index >= 0) ? data.$items.eq(data.index).position() : { left: 0, top: 0 };
					
					if ($.fn.scroller !== undefined) {
						
						data.$itemsWrapper.scroller("scroll", (data.$itemsWrapper.find(".scroller-content").scrollTop() + selectedOffset.top), 0).scroller("reset");
						
					} else {
						
						data.$itemsWrapper.scrollTop(data.$itemsWrapper.scrollTop() + selectedOffset.top);
						
					}
					
				}
				
			}
			
			/**
			 * Closes option set
			 */
			
			function _close(e) {
				
				e.preventDefault();
				
				e.stopPropagation();
				
				var data = e.data;
				
				// Make sure it's actually open
				if (data.$selecter.hasClass("open")) {
					
					data.$itemsWrapper.hide();
					
					data.$selecter.removeClass("open").addClass("closed");
					
					$("body").off(".selecter-" + data.guid);
					
				}
				
			}
			
			/**
			 * Determines if event target is outside instance before closing
			 */
			
			function _closeHelper(e) {
				
				e.preventDefault();
				
				e.stopPropagation();
				
				if ($(e.currentTarget).parents(".selecter").length === 0) {
					
					_close(e);
					
				}
				
			}
			
			/**
			 * Handles option select
			 */
			
			function _select(e) {
				
				e.preventDefault();
				
				e.stopPropagation();
				
				var $target = $(this),
					
					data = e.data;
				
				if (!data.$select.is(":disabled")) {
					
					if (data.$itemsWrapper.is(":visible")) {
						
						// Update 
						var index = data.$items.index($target);
						
						_update(index, data, false);
						
					}
					
					if (!data.multiple) {
						
						// Clean up
						_close(e);
						
					}
					
				}
				
			}
			
			/**
			 * Handles external changes
			 */
			
			function _change(e, internal) {
				
				if (!internal) {
					
					var $target = $(this),
						
						data = e.data;
					
					// Mobile link support
					if (data.links) {
						
						if (isMobile) {
							
							_launch($target.val(), data.external);
							
						} else {
							
							_launch($target.attr("href"), data.external);
							
						}
						
					} else {
						
						// Otherwise update
						if (!data.multiple /* typeof val == "object" */) {
							
							var index = data.$options.index(data.$options.filter("[value='" + _escape($target.val()) + "']"));
							
							_update(index, data, false);
							
						}
						
					}
					
				}
				
			}
			
			/**
			 * Handles instance focus
			 */
			
			function _focus(e) {
				
				e.preventDefault();
				
				e.stopPropagation();
				
				var data = e.data;
				
				if (!data.$select.is(":disabled") && !data.multiple) {
					
					data.$selecter.addClass("focus");
					
					$(".selecter").not(data.$selecter).trigger("selecter-close", [data]);
					
					$("body").on("keydown.selecter-" + data.guid, data, _keypress);
					
				}
				
			}
			
			/**
			 * Handles instance blur
			 */
			
			function _blur(e) {
				
				e.preventDefault();
				
				e.stopPropagation();
				
				var data = e.data;
				
				data.$selecter.removeClass("focus");
				
				$(".selecter").not(data.$selecter).trigger("selecter-close", [data]);
				
				$("body").off(".selecter-" + data.guid);
				
			}
			
			/**
			 * Handles instance keypress, once focused
			 */
			
			function _keypress(e) {
				
				var data = e.data;
				
				if (data.$selecter.hasClass("open") && e.keyCode === 13) {
					
					_update(data.index, data, false);
					
					_close(e);
					
				} else if (e.keyCode !== 9 && (!e.metaKey && !e.altKey && !e.ctrlKey && !e.shiftKey)) {
					
					// Ignore modifiers & tabs
					e.preventDefault();
					
					e.stopPropagation();
					
					var total = data.$items.length - 1,
						
						index = -1;
					
					// Firefox left/right support thanks to Kylemade
					if ($.inArray(e.keyCode, (isFirefox) ? [38, 40, 37, 39] : [38, 40]) > -1) {
						
						// Increment / decrement using the arrow keys
						index = data.index + ((e.keyCode === 38 || (isFirefox && e.keyCode === 37)) ? -1 : 1);
						
						if (index < 0) {
							
							index = 0;
							
						}
						
						if (index > total) {
							
							index = total;
							
						}
						
					} else {
						
						var input = String.fromCharCode(e.keyCode).toUpperCase(),
							
							letter,
							
							i;
						
						// Search for input from original index
						for (i = data.index + 1; i <= total; i++) {
							
							letter = data.$options.eq(i).text().charAt(0).toUpperCase();
							
							if (letter === input) {
								
								index = i;
								
								break;
								
							}
							
						}
						
						// If not, start from the beginning
						if (index < 0) {
							
							for (i = 0; i <= total; i++) {
								
								letter = data.$options.eq(i).text().charAt(0).toUpperCase();
								
								if (letter === input) {
									
									index = i;
									
									break;
									
								}
								
							}
							
						}
						
					}
					
					// Update
					if (index >= 0) {
						
						_update(index, data, true /* !data.$selecter.hasClass("open") */);
						
					}
					
				}
				
			}
			
			/**
			 * Updates instance based on new target index
			 */
			
			function _update(index, data, keypress) {
				
				var $item = data.$items.eq(index),
					
					isSelected = $item.hasClass("selected"),
					
					isDisabled = $item.hasClass("disabled");
				
				// Check for disabled options
				if (!isDisabled) {
					
					// Make sure we have a new index to prevent false 'change' triggers
					if (!isSelected || data.links) {
						
						var newLabel = $item.html(),
							
							newValue = $item.data("value");
						
						// Modify DOM
						if (data.multiple) {
							
							data.$options.eq(index).prop("selected", true);
							
						} else {
							
							data.$selected.html(newLabel);
							
							data.$items.filter(".selected").removeClass("selected");
							
							data.$select[0].selectedIndex = index;
							
							if (data.links && !keypress) {
								
								if (isMobile) {
									
									_launch(data.$select.val(), data.external);
									
								} else {
									
									_launch($item.attr("href"), data.external);
									
								}
								
								return;
								
							}
							
						}
						
						data.$select.trigger("change", [ true ]);
						
						$item.addClass("selected");
						
					} else if (data.multiple) {
						
						data.$options.eq(index).prop("selected", null);
						
						$item.removeClass("selected");
						
					}
					
					if (!isSelected || data.multiple) {
						
						// Fire callback
						data.callback.call(data.$selecter, data.$select.val(), index);
						
						data.index = index;
						
					}
					
				}
				
			}
			
			/**
			 * Launches link
			 */
			
			function _launch(url, external) {
				
				if (external) { 
					
					// Open link in a new tab/window
					window.open(url);
					
				} else { 
					
					// Open link in same tab/window
					window.location.href = url;
					
				}
				
			}
			
			/**
			 * Trims text, if specified length is greater then 0
			 */
			
			function _trim(text, length) {
				
				if (length === 0) {
					
					return text;
					
				} else {
					
					if (text.length > length) {
						
						return text.substring(0, length) + "...";
						
					} else {
						
						return text;
						
					}
					
				}
				
			}
			
			/**
			 * Escapes text
			 */
			
			function _escape(text) {
				
				return text.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, '\\$1');
				
			}
			
			/**
			 * jQuery Function Registration.
			 */
			
			$.fn.selecter = function(method) {
				
				if (pub[method]) {
					
					return pub[method].apply(this, Array.prototype.slice.call(arguments, 1));
					
				} else if (typeof method === 'object' || !method) {
					
					return _init.apply(this, arguments);
					
				}
				
				return this;
				
			};
			
		})(SJ, window);
		
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
	
} (window, document, require, (typeof console !== 'undefined' ? console : undefined)));