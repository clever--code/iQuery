/*
 * Independence Query
 * @param {type} me
 * @returns {Object}
 */
(function(window, undefined) {
	iQuery = function() {
		var me = arguments[0] ? arguments[0] : {};
		var core;

		try {
			core = document.querySelectorAll(me);
		} catch (e) {
			core = me;
		}

		core.html = function(data) {
			for ( var i = 0; i < this.length; i++) {
				this[i].innerHTML = data;
			}
		};

		core.empty = function() {
			for ( var i = 0; i < this.length; i++) {
				this[i].innerHTML = '';
			}
		};

		core.scroll = function() {
			for ( var i = 0; i < this.length; i++) {
				this[i].scrollIntoView();
			}
		};

		core.addClass = function(data) {
			for ( var i = 0; i < this.length; i++) {
				this[i].className = data;
			}
		};

		core.removeClass = function() {
			for ( var i = 0; i < this.length; i++) {
				this[i].className = '';
			}
		};

		core.click = function(data) {
			for ( var i = 0; i < this.length; i++) {
				this[i].addEventListener('click', data, false);
			}
		};

		core.load = function(url, data) {
			var formData = new FormData();
			var obj = this;
			for (key in data) {
				formData.append(key, data[key]);
			}
			var client = new XMLHttpRequest();
			client.open("POST", url, true);
			client.onload = function() {
				for ( var i = 0; i < obj.length; i++) {
					obj[i].innerHTML = this.response;
				}
			};
			client.send(formData);
		};

		core.each = function(each) {
			for ( var i = 0; i < this.length; i++) {
				each(this[i]);
			}
		};

		core.attr = function(attr) {
			var collection;
			if (Object.prototype.toString.call(this) === '[object HTMLSpanElement]') {
				collection = this.getAttribute(attr);
			} else {
				collection = [];
				for ( var i = 0; i < this.length; i++) {
					collection[collection.length] = this[i].getAttribute(attr);
				}
			}
			return collection;
		};

		core.onLine = function() {
			console.log('funfou');
			return false;
		};

		return core;
	}

	window.iQuery = window.$ = iQuery;
	
})(window);