/*!
 * Independence Query Library vBeta
 * http://clevercode.com.br/
 * Copyright 2012 CleverCode Foundation
 * 
 * Charge: Miller Augusto S. Martins, Alex dos Santos Liberato
 * contato@clevercode.com.br
 * 
 * GNU General Public License
 * http://www.gnu.org/licenses/gpl-3.0.en.html
 * 
 * Date: 2013-07-29T23:44
 */

(function(window) {
	var iQuery = function(){
		
		/*
		 * the builder instance
		 * */
		var atributes = {}; try { atributes = (arguments.length == 1)?document.querySelectorAll(arguments[0]):document.querySelectorAll('body'); } catch (e) { atributes = arguments[0]; }
		
		/*
		 * Choose what will be the form of call
		 * */
		var definitionOfCall = function(single, multiple){
			if(this.constructor.length == undefined){
				single();
			} else {
				multiple();
			}
		};
		
		/*
		 * Choose what will be the mode of operation
		 * */		
		var isCallback = function(args, withCallback, noCallback){
			if(args.length == 1){
				noCallback();
			} else {
				withCallback();
			}
		};
		
		/*
		 * Core executions
		 * */	
		var core = function(){
			this.constructor = arguments[0];
			
			/*
			 * returns the object
			 * */
			this.obj = function(){
				var args = arguments;
				if(constructor.length == undefined){
					return this.constructor;
				} else if(constructor.length == 1){
					return this.constructor[0];
				} else{
					[].map.call(this.constructor, function(obj){
						args[0](obj);
					});				
				}
			};
			
			/*
			 * Get the HTML contents of the first element in the set of matched elements or set the HTML contents of every matched element.
			 * */
			this.html = function(){
				var instance = this;
				var args = arguments;
				isCallback(args, function(){
					definitionOfCall(function(){
						instance = instance.constructor.innerHTML;
					}, function(){
						var data = [].map.call(instance.constructor, function(obj){
							return obj.innerHTML;
						});
						instance = (data.length === 1?data[0]:data);
					});
				}, function(){
					definitionOfCall(function(){
						instance.constructor.innerHTML = args[0];
					}, function(){
						var value = args[0];
						[].map.call(instance.constructor, function(obj){
							obj.innerHTML = value;
						});
					});
				});
				return instance;
			};
			
			/*
			 * Remove all child nodes of the set of matched elements from the DOM.
			 * */
			this.empty = function(){
				var instance = this;
				definitionOfCall(function(){
					instance.constructor.innerHTML = '';
				}, function(){
					[].map.call(instance.constructor, function(obj){
						obj.innerHTML = '';
					});
				});
			};
			
			/*
			 * Display or hide the matched elements by animating their opacity.
			 * */
			this.toggle = function(){
				var instance = this;
				definitionOfCall(function(){
					instance.constructor.style.display = (instance.constructor.style.display === '')?'none':((instance.constructor.style.display === 'none')?'inline-block':'none');
				}, function(){
					[].map.call(instance.constructor, function(obj){
						obj.style.display = (obj.style.display === '')?'none':((obj.style.display === 'none')?'inline-block':'none');
					});
				});
			};
			
			/*
			 * Iterate over a object, executing a function for each matched element.
			 * */
			this.each = this.forEach = function(callback){
				[].map.call(this.constructor, function(obj){
					callback(obj);
				});
			};
			
			/*
			 * Get the value of an attribute for the first element in the set of matched elements or set one or more attributes for every matched element.
			 * */
			this.attr = function(){
				var instance = this;
				var args = arguments;
				isCallback(args, function(){
					definitionOfCall(function(){
						instance.constructor.setAttribute(args[0],args[1]);
					}, function(){
						[].map.call(instance.constructor, function(obj){ obj.setAttribute(args[0],args[1]); });
					});
				}, function(){
					definitionOfCall(function(){
						instance = instance.constructor.getAttribute(args[0]);
					}, function(){
						instance = [].map.call(instance.constructor, function(obj){ return obj.getAttribute(args[0]); });
					});
				});
				return instance;
			};
			
			/*
			 * Bind an event handler to the �click� JavaScript event, or trigger that event on an element.
			 * */
			this.click = function(callback){
				var instance = this;
				definitionOfCall(function(){
					constructor.addEventListener('click', callback);
				}, function(){
					[].map.call(instance.constructor, function(obj){
						obj.addEventListener('click', callback);
					});
				});
			};
			
			/*
			 * Attach an event handler for all elements which match the current selector, now and in the future.
			 * */
			this.live = function(){
				var innerAction = function(events, callback){
					var instance = this;
					definitionOfCall(function(){
						instance.constructor.addEventListener(events, callback);
					}, function(){
						[].map.call(instance.constructor, function(obj){
							obj.addEventListener(events, callback);
						});
					});
				};
				if(arguments.length <=2){
					var events = arguments[0];
					var callback = arguments[1];
					innerAction(events, callback);
				} else{
					for(var i=0; i <(arguments.length-1); i++){
						var events = arguments[i];
						var callback = arguments[(arguments.length-1)];
						innerAction(events, callback);
					}
				}
			};
			
			/*
			 * Display the matched elements.
			 * */
			this.show = function(){
				var instance = this;
				definitionOfCall(function(){
					instance.constructor.style.display = 'inline-block';
				}, function(){
					[].map.call(instance.constructor, function(obj){
						obj.style.display = 'inline-block';
					});
				});
			};
			
			/*
			 * Display the matched elements by fading them to opaque.
			 * */
			this.fadeIn = function(){
				var timer = (arguments[0] != undefined)?'2s':'0.4s';
				var instance = this;
				definitionOfCall(function(){
					instance.constructor.style.transition = timer;
					instance.style.WebkitTransition = 'opacity ' + timer;
					instance.style.MozTransition = 'opacity ' + timer;
					instance.constructor.style.opacity = '1';
				}, function(){
					[].map.call(instance.constructor, function(obj){
						obj.style.transition = timer;
						obj.style.WebkitTransition = 'opacity ' + timer;
						obj.style.MozTransition = 'opacity ' + timer;
						obj.style.opacity = '1';
					});
				});
			};
			
			/*
			 * Hide the matched elements.
			 * */
			this.hide = function(){
				var instance = this;
				definitionOfCall(function(){
					instance.constructor.style.display = 'none';
				}, function(){
					[].map.call(instance.constructor, function(obj){
						obj.style.display = 'none';
					});
				});
			};
			
			/*
			 * Hide the matched elements by fading them to transparent.
			 * */
			this.fadeOut = function(){
				var timer = (arguments[0] != undefined)?'2s':'0.4s';
				var instance = this;
				definitionOfCall(function(){
					instance.constructor.style.transition = timer;
					instance.style.WebkitTransition = 'opacity ' + timer;
					instance.style.MozTransition = 'opacity ' + timer;
					instance.constructor.style.opacity = '0';
				}, function(){
					[].map.call(instance.constructor, function(obj){
						obj.style.transition = timer;
						obj.style.WebkitTransition = 'opacity ' + timer;
						obj.style.MozTransition = 'opacity ' + timer;
						obj.style.opacity = '0';
					});
				});
			};
			
			/*
			 * Get the parent of each element in the current set of matched elements, optionally filtered by a selector.
			 * */
			this.parent = function(){
				var instance = this;
				definitionOfCall(function(){
					return instance.constructor.parentNode;
				}, function(){
					return instance.constructor[0].parentNode;
				});
			};
			
			/*
			 * Renders a google chart
			 * @type LineChart, PieChart, Table
			 * @dataTable [[],[]]
			 * @options {}
			 * */
			this.googleChart = function(type, dataTable, options){
				var data = google.visualization.arrayToDataTable(dataTable);
				switch (type) {
					case 'LineChart':
						new google.visualization.LineChart(this.constructor[0]).draw(data, options);
						break;
					case 'PieChart':
						new google.visualization.PieChart(this.constructor[0]).draw(data, options);
						break;
					case 'BarChart':
						new google.visualization.BarChart(this.constructor[0]).draw(data, options);
						break;
					case 'ColumnChart':
						new google.visualization.ColumnChart(this.constructor[0]).draw(data, options);
						break;
					case 'Table':
						new google.visualization.Table(this.constructor[0]).draw(data, options);
						break;
					default:
						new google.visualization.PieChart(this.constructor[0]).draw(data, options);
						break;
				}
			};
			
			/*
			 * Get the current value of the first element in the set of matched elements or set the value of every matched element.
			 * */
			this.val = function(){
				var instance = this;
				definitionOfCall(function(){
					return instance.constructor.value;
				}, function(){
					var data = [].map.call(instance.constructor, function(obj){
						return obj.value;
					});
					instance = (data.length === 1?data[0]:data);
				});
				return instance;
			};
			
			/*
			 * Load data from the server using a HTTP POST request.
			 * XMLHttpRequest POST
			 * */
			this.post = function(){
			    var client = new XMLHttpRequest(),
			    callback = arguments[(arguments.length-1)];
			    client.open("POST", arguments[0], true);
			    client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			    client.onload = function() {
			    	callback(eval('[' + this.response + ']')[0]);
			    };
			    var uri = '';
			    if(arguments.length == 3){
					for (key in arguments[1]) {
					    uri += encodeURIComponent(key) + '=' + encodeURIComponent(arguments[1][key]) + '&';
					}
			    }
			    client.send(uri);
			};
			
			/*
			 * Retrieve the DOM elements matched by the object.
			 * XMLHttpRequest GET
			 * */
			this.get = function(){
			    var client = new XMLHttpRequest(),
			    callback = arguments[(arguments.length-1)];
			    client.open("GET", arguments[0], true);
			    client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			    client.onload = function() {
			    	callback(eval('[' + this.response + ']')[0]);
			    };
			    var uri = '';
			    if(arguments.length == 3){
			    	for (key in arguments[1]) {
			    		uri += encodeURIComponent(key) + '=' + encodeURIComponent(arguments[1][key]) + '&';
			    	}
			    }
			    client.send(uri);
			};
			
			/*
			 * Load data from the server and place the returned HTML into the matched element.
			 * XMLHttpRequest Load HTML data
			 * */
			this.load = function(){
				var args = arguments;
			    var client = new XMLHttpRequest();
			    var _constructor = this.constructor;
			    client.open("GET", args[0], true);
			    client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			    client.setRequestHeader("Cache-Control", "no-cache");
			    client.onload = function() {
			    	var response = this.response;
					if(_constructor.length == undefined){
						_constructor.innerHTML = response;
					} else {
						[].map.call(_constructor, function(obj){
							obj.innerHTML = response;
						});
					}
					if(args.length == 2){
						args[1]();
					}
			    };
			    client.send();
			};
			
			/*
			 * Perform an asynchronous HTTP (Ajax) request.
			 * XMLHttpRequest ajax
			 * */
			this.ajax = function(config, callback){
			    var client = new XMLHttpRequest();
			    var uri = '';
			    client.open(config.type, config.url, ((config.async != undefined)?config.async:false));
			    client.setRequestHeader("Content-type", ((config.contentType != undefined)?config.contentType:"application/x-www-form-urlencoded"));
			    client.setRequestHeader("Cache-Control", ((config.CacheControl != undefined)?config.CacheControl:"no-cache"));
			    client.onreadystatechange = function(){
			    	if(this.readyState == 4){
			    		if(this.status == 200){
			    			(config.dataType === 'json')?(callback(eval('[' + this.response + ']')[0])):callback(this.response);
			    		} else{
			    			callback({"error":this.statusText});
			    		}
			    	}
			    };
			    for (key in config.data) {
			    	uri += encodeURIComponent(key) + '=' + encodeURIComponent(config.data[key]) + '&';
			    }
			    client.send(uri);
			};
			
			/*
			 * Bind an event handler to the �scroll� JavaScript event, or trigger that event on an element.
			 * Scroll link
			 * */
			this.scroll = function() {
				var instance = this;
				definitionOfCall(function(){
					instance.constructor.scrollIntoView();
				}, function(){
					[].map.call(instance.constructor, function(obj){
						obj.scrollIntoView();
					});
				});
			};
			
			/*
			 * Returns the number of pixels to scroll existing x
			 * */
			this.scrollX = function(value){
				return this.top.scrollX;
			};
			
			/*
			 * Returns the number of pixels to scroll existing y
			 * */
			this.scrollY = function(value){
				return this.top.scrollY;
			};
			
			/*
			 * Checks whether the scroll position are top is greater than the value reported
			 * */
			this.factScrollTopAfter = function(value){
				return (this.top.scrollY >= value);
			};
			
			/*
			* Adds the specified class(es) to each of the set of matched elements.
			* */
			this.addClass = function(data) {
				var instance = this;
				definitionOfCall(function(){
					instance.constructor.className += ' ' + data;
				}, function(){
					[].map.call(instance.constructor, function(obj){
						obj.className += ' ' + data;
					});
				});
			};
	            
			/*
			* Remove a single class, multiple classes, or all classes from each element in the set of matched elements.
			* */
			this.removeClass = function(data){
				var instance = this;
				definitionOfCall(function(){
					var current = instance.constructor.className;
					this.constructor.className = current.replace(data,'');
				}, function(){
					[].map.call(instance.constructor, function(obj){
						var current = obj.className;
						obj.className = current.replace(data,'');
					});
				});
			};
			
			/*
			 * Selects all elements that are the last child of their parent.
			 * */
			this.lastChild = function(data){
				var instance = this;
				definitionOfCall(function(){
					return instance.constructor.lastChild;
				}, function(){
					return [].map.call(instance.constructor, function(obj){
						return obj.lastChild;
					});
				});
			};
			
			/*
			 * The number of elements in the object.
			 * */
			this.length = function(data){
				var instance = this;
				definitionOfCall(function(){
					return undefined;
				}, function(){
					return instance.constructor.length;
				});
			};
			
			/*
			 * Checks if this online
			 * */
			this.onLine = function(){
				return this.navigator.onLine;
			};
			
			return this;
		};
		return core(atributes);
	};
	
	window.$i = window.iQuery = iQuery;
	[].map.call(document.querySelectorAll('script'), function(src){ if(src.dataset.symbol != undefined){ new Function('window.' + src.dataset.symbol + ' = iQuery;')(); } });
})(window);
