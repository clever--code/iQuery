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
 * 
 * http://closure-compiler.appspot.com/
 */
(function(f){f.$i=f.iQuery=function(){var e={};try{e=1==arguments.length?document.querySelectorAll(arguments[0]):document.querySelectorAll("body")}catch(f){e=arguments[0]}var d=function(d,a){void 0==this.constructor.length?d():a()},h=function(d,a,b){1==d.length?b():a()};return function(e){this.constructor=e;this.obj=function(){var a=arguments;if(void 0==constructor.length)return this.constructor;if(1==constructor.length)return this.constructor[0];[].map.call(this.constructor,function(b){a[0](b)})};
this.html=function(){var a=this,b=arguments;h(b,function(){d(function(){a=a.constructor.innerHTML},function(){var b=[].map.call(a.constructor,function(a){return a.innerHTML});a=1===b.length?b[0]:b})},function(){d(function(){a.constructor.innerHTML=b[0]},function(){var c=b[0];[].map.call(a.constructor,function(a){a.innerHTML=c})})});return a};this.empty=function(){var a=this;d(function(){a.constructor.innerHTML=""},function(){[].map.call(a.constructor,function(a){a.innerHTML=""})})};this.toggle=function(){var a=
this;d(function(){a.constructor.style.display=""===a.constructor.style.display?"none":"none"===a.constructor.style.display?"inline-block":"none"},function(){[].map.call(a.constructor,function(a){a.style.display=""===a.style.display?"none":"none"===a.style.display?"inline-block":"none"})})};this.each=this.forEach=function(a){[].map.call(this.constructor,function(b){a(b)})};this.attr=function(){var a=this,b=arguments;h(b,function(){d(function(){a.constructor.setAttribute(b[0],b[1])},function(){[].map.call(a.constructor,
function(a){a.setAttribute(b[0],b[1])})})},function(){d(function(){a=a.constructor.getAttribute(b[0])},function(){a=[].map.call(a.constructor,function(a){return a.getAttribute(b[0])})})});return a};this.click=function(a){var b=this;d(function(){constructor.addEventListener("click",a)},function(){[].map.call(b.constructor,function(b){b.addEventListener("click",a)})})};this.live=function(){var a=function(a,b){var c=this;d(function(){c.constructor.addEventListener(a,b)},function(){[].map.call(c.constructor,
function(c){c.addEventListener(a,b)})})};if(2>=arguments.length){var b=arguments[0],c=arguments[1];a(b,c)}else for(var g=0;g<arguments.length-1;g++)b=arguments[g],c=arguments[arguments.length-1],a(b,c)};this.show=function(){var a=this;d(function(){a.constructor.style.display="inline-block"},function(){[].map.call(a.constructor,function(a){a.style.display="inline-block"})})};this.fadeIn=function(a){var b=void 0!=a?"2s":"0.4s",c=this;d(function(){c.constructor.style.transition=b;c.style.WebkitTransition=
"opacity "+b;c.style.MozTransition="opacity "+b;c.constructor.style.opacity="1"},function(){[].map.call(c.constructor,function(a){a.style.transition=b;a.style.WebkitTransition="opacity "+b;a.style.MozTransition="opacity "+b;a.style.opacity="1"})})};this.hide=function(){var a=this;d(function(){a.constructor.style.display="none"},function(){[].map.call(a.constructor,function(a){a.style.display="none"})})};this.fadeOut=function(a){var b=void 0!=a?"2s":"0.4s",c=this;d(function(){c.constructor.style.transition=
b;c.style.WebkitTransition="opacity "+b;c.style.MozTransition="opacity "+b;c.constructor.style.opacity="0"},function(){[].map.call(c.constructor,function(a){a.style.transition=b;a.style.WebkitTransition="opacity "+b;a.style.MozTransition="opacity "+b;a.style.opacity="0"})})};this.parent=function(){var a=this;d(function(){return a.constructor.parentNode},function(){return a.constructor[0].parentNode})};this.googleChart=function(a,b,c){b=google.visualization.arrayToDataTable(b);switch(a){case "LineChart":(new google.visualization.LineChart(this.constructor[0])).draw(b,
c);break;case "PieChart":(new google.visualization.PieChart(this.constructor[0])).draw(b,c);break;case "BarChart":(new google.visualization.BarChart(this.constructor[0])).draw(b,c);break;case "ColumnChart":(new google.visualization.ColumnChart(this.constructor[0])).draw(b,c);break;case "Table":(new google.visualization.Table(this.constructor[0])).draw(b,c);break;default:(new google.visualization.PieChart(this.constructor[0])).draw(b,c)}};this.val=function(){var a=this;d(function(){return a.constructor.value},
function(){var b=[].map.call(a.constructor,function(a){return a.value});a=1===b.length?b[0]:b});return a};this.post=function(){var a=new XMLHttpRequest,b=arguments[arguments.length-1];a.open("POST",arguments[0],!0);a.setRequestHeader("Content-type","application/x-www-form-urlencoded");a.onload=function(){b(eval("["+this.response+"]")[0])};var c="";if(3==arguments.length)for(key in arguments[1])c+=encodeURIComponent(key)+"="+encodeURIComponent(arguments[1][key])+"&";a.send(c)};this.get=function(){var a=
new XMLHttpRequest,b=arguments[arguments.length-1];a.open("GET",arguments[0],!0);a.setRequestHeader("Content-type","application/x-www-form-urlencoded");a.onload=function(){b(eval("["+this.response+"]")[0])};var c="";if(3==arguments.length)for(key in arguments[1])c+=encodeURIComponent(key)+"="+encodeURIComponent(arguments[1][key])+"&";a.send(c)};this.load=function(){var a=arguments,b=new XMLHttpRequest,c=this.constructor;b.open("GET",a[0],!0);b.setRequestHeader("Content-type","application/x-www-form-urlencoded");
b.setRequestHeader("Cache-Control","no-cache");b.onload=function(){var b=this.response;void 0==c.length?c.innerHTML=b:[].map.call(c,function(a){a.innerHTML=b});if(2==a.length)a[1]()};b.send()};this.ajax=function(a,b){var c=new XMLHttpRequest,d="";c.open(a.type,a.url,void 0!=a.async?a.async:!1);c.setRequestHeader("Content-type",void 0!=a.contentType?a.contentType:"application/x-www-form-urlencoded");c.setRequestHeader("Cache-Control",void 0!=a.CacheControl?a.CacheControl:"no-cache");c.onreadystatechange=
function(){4==this.readyState&&(200==this.status?"json"===a.dataType?b(eval("["+this.response+"]")[0]):b(this.response):b({error:this.statusText}))};for(key in a.data)d+=encodeURIComponent(key)+"="+encodeURIComponent(a.data[key])+"&";c.send(d)};this.scroll=function(){var a=this;d(function(){a.constructor.scrollIntoView()},function(){[].map.call(a.constructor,function(a){a.scrollIntoView()})})};this.scrollX=function(){return this.top.scrollX};this.scrollY=function(){return this.top.scrollY};this.scrollByPages=
function(a){return this.top.scrollByPages(a)};this.scrollByLines=function(a){return this.top.scrollByLines(a)};this.scrollTo=function(a,b){return this.top.scroll(a,b)};this.scrollBy=function(a,b){return this.top.scrollBy(a,b)};this.factScrollTopAfter=function(a){return this.top.scrollY>=a};this.addClass=function(a){var b=this;d(function(){b.constructor.classList.add(a)},function(){[].map.call(b.constructor,function(b){b.classList.add(a)})})};this.removeClass=function(a){var b=this;d(function(){b.constructor.classList.remove(a)},
function(){[].map.call(b.constructor,function(b){b.classList.remove(a)})})};this.toggleClass=function(a){var b=this;d(function(){b.constructor.classList.toggle(a)},function(){[].map.call(b.constructor,function(b){b.classList.toggle(a)})})};this.lastChild=function(a){var b=this;d(function(){return b.constructor.lastChild},function(){return[].map.call(b.constructor,function(a){return a.lastChild})})};this.length=function(a){var b=this;d(function(){},function(){return b.constructor.length})};this.onLine=
function(){return this.navigator.onLine};this.desktopDragOut=function(a,b){var c=this;d(function(){c.constructor.setAttribute("data-downloadurl",a+":"+b+":"+(void 0!=c.constructor.getAttribute("href")?c.constructor.getAttribute("href"):void 0!=c.constructor.getAttribute("src")?c.constructor.getAttribute("src"):""));c.constructor.setAttribute("draggable","true");c.constructor.addEventListener("dragstart",function(a){a.dataTransfer.setData("DownloadURL",this.dataset.downloadurl)},!1)},function(){[].map.call(c.constructor,
function(c){(function(){c.setAttribute("data-downloadurl",a+":"+b+":"+(void 0!=c.getAttribute("href")?c.getAttribute("href"):void 0!=c.getAttribute("src")?c.getAttribute("src"):""));c.setAttribute("draggable","true");c.addEventListener("dragstart",function(a){a.dataTransfer.setData("DownloadURL",c.getAttribute("data-downloadurl"))},!1)})()})})};return this}(e)};[].map.call(document.querySelectorAll("script"),function(e){void 0!=e.dataset.symbol&&(new Function("window."+e.dataset.symbol+" = iQuery;"))()})})(window);
