/*
 * Independence Query
 * @param {type} me
 * @returns {Object}
 */
$ = function(){
	var me = arguments[0];
    var core = {};
    var type = String(me.replace(/^\s+/,'')).substring(0,1);
    var me = me.replace(/^\s+/,'').replace(type,'');
    var obj = (type==='#')?document.getElementById(me):document.getElementsByClassName(me);

    Object.defineProperty(core, "html", {
            value : function(data){
                if(type === '#'){
                    obj.innerHTML = data;
                } else{
                    for(i=0;i<obj.length;i++){
                        obj[i].innerHTML = data;
                    }
                }
            },
            writable : true,
            configurable : true,
            enumerable : true
        }
    );

    Object.defineProperty(core, "empty", {
            value : function(){
                if(type === '#'){
                    obj.innerHTML = '';
                } else{
                    for(i=0;i<obj.length;i++){
                        obj[i].innerHTML = '';
                    }
                }
            },
            writable : true,
            configurable : true,
            enumerable : true
        }
    );

    Object.defineProperty(core, "scroll", {
            value : function(){
                 obj.scrollIntoView();
            },
            writable : true,
            configurable : true,
            enumerable : true
        }
    );

    Object.defineProperty(core, "addClass", {
            value : function(data){
                if(type === '#'){
                    obj.className = data;
                } else{
                    for(i=0;i<obj.length;i++){
                        obj[i].className = data;
                    }
                }
            },
            writable : true,
            configurable : true,
            enumerable : true
        }
    );

    Object.defineProperty(core, "removeClass", {
            value : function(data){
                if(type === '#'){
                    obj.className = '';
                } else{
                    for(i=0;i<obj.length;i++){
                        obj[i].className = obj[i].className.replace('/\b'+data+'\b/','');
                    }
                }
            },
            writable : true,
            configurable : true,
            enumerable : true
        }
    );
        
    Object.defineProperty(core, "click", {
            value : function(data){
                if(type === '#'){
                    obj.addEventListener('click', data, false);
                } else{
                    for(i=0;i<obj.length;i++){
                        obj[i].addEventListener('click', data, false);
                    }
                }
            },
            writable : true,
            configurable : true,
            enumerable : true
        }
    );
        
    Object.defineProperty(core, "onLine", {
            value : window.navigator.onLine
        }
    );
    
    return core;
}