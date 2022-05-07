(function (global, factory) {
  "use strict";
  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = global.document ? factory(global, true) :
      function (w) {
        if (!w.document) {
          throw new Error("jQuery requires a window with a document");
        }
        return factory(w);
      };
    // =>支持CommonJs模块规范的执行这里(NODE.JS)
  } else {
    // 可以初步理解为是浏览器或者(WEB-VIEW)环境
    // global === window
    factory(global);
  }
})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {
  // window =>window  noGlobal=>undefined
  "use strict";
  var version = "3.4.1",
    jQuery = function (selector, context) {
      return new jQuery.fn.init(selector, context);
    },
    rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

  // JQuery是一个类,JQuery.fn是给原型设置一个别名
  jQuery.fn = jQuery.prototype = {
    // 公共的属性和方法
    jquery: version,
    constructor: jQuery,
    length: 0,
    // 转化为数组的方法
    toArray: function () {
      // this:当前类jQuery的实例
      return slice.call(this);
    },
    // 把JQ对象转换为原生JS对象
    get: function (num) {
      if (num == null) {
        return slice.call(this);
      }
      return num < 0 ? this[num + this.length] : this[num];
    },
    each: function (callback) {
      return jQuery.each(this, callback);
    },
    eq: function (i) {
      var len = this.length,
        j= +i +( i< 0 ? len : i)
      return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
    },
  };

  // extend 
  jQuery.extend = jQuery.fn.extend = function() {
    var options, name, src, copy, copyIsArray, clone,
      target = arguments[ 0 ] || {},
      i = 1,
      length = arguments.length,
      deep = false;
  
    // Handle a deep copy situation
    if ( typeof target === "boolean" ) {
      deep = target;
  
      // Skip the boolean and the target
      target = arguments[ i ] || {};
      i++;
    }
  
    // Handle case when target is a string or something (possible in deep copy)
    if ( typeof target !== "object" && !isFunction( target ) ) {
      target = {};
    }
  
    // Extend jQuery itself if only one argument is passed
    if ( i === length ) {
      target = this;
      i--;
    }
  
    for ( ; i < length; i++ ) {
  
      // Only deal with non-null/undefined values
      if ( ( options = arguments[ i ] ) != null ) {
  
        // Extend the base object
        for ( name in options ) {
          copy = options[ name ];
  
          // Prevent Object.prototype pollution
          // Prevent never-ending loop
          if ( name === "__proto__" || target === copy ) {
            continue;
          }
  
          // Recurse if we're merging plain objects or arrays
          if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
            ( copyIsArray = Array.isArray( copy ) ) ) ) {
            src = target[ name ];
  
            // Ensure proper type for the source value
            if ( copyIsArray && !Array.isArray( src ) ) {
              clone = [];
            } else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
              clone = {};
            } else {
              clone = src;
            }
            copyIsArray = false;
  
            // Never move original objects, clone them
            target[ name ] = jQuery.extend( deep, clone, copy );
  
          // Don't bring in undefined values
          } else if ( copy !== undefined ) {
            target[ name ] = copy;
          }
        }
      }
    }
  
    // Return the modified object
    return target;
  };

  // jQuery是一个普通对象
  jQuery.ajax = function () {};
  var rootjQuery,
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
  init = jQuery.fn.init = function (selector, context, root) {
    var match, elem;

    // HANDLE: $(""), $(null), $(undefined), $(false)
    if (!selector) {
      return this;
    }

    // Method init() accepts an alternate rootjQuery
    // so migrate can support jQuery.sub (gh-2101)
    root = root || rootjQuery;

    // Handle HTML strings
    if (typeof selector === "string") {
      if (selector[0] === "<" &&
        selector[selector.length - 1] === ">" &&
        selector.length >= 3) {

        // Assume that strings that start and end with <> are HTML and skip the regex check
        match = [null, selector, null];

      } else {
        match = rquickExpr.exec(selector);
      }

      // Match html or make sure no context is specified for #id
      if (match && (match[1] || !context)) {

        // HANDLE: $(html) -> $(array)
        if (match[1]) {
          context = context instanceof jQuery ? context[0] : context;

          // Option to run scripts is true for back-compat
          // Intentionally let the error be thrown if parseHTML is not present
          jQuery.merge(this, jQuery.parseHTML(
            match[1],
            context && context.nodeType ? context.ownerDocument || context : document,
            true
          ));

          // HANDLE: $(html, props)
          if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
            for (match in context) {

              // Properties of context are called as methods if possible
              if (isFunction(this[match])) {
                this[match](context[match]);

                // ...and otherwise set as attributes
              } else {
                this.attr(match, context[match]);
              }
            }
          }

          return this;

          // HANDLE: $(#id)
        } else {
          elem = document.getElementById(match[2]);

          if (elem) {

            // Inject the element directly into the jQuery object
            this[0] = elem;
            this.length = 1;
          }
          return this;
        }

        // HANDLE: $(expr, $(...))
      } else if (!context || context.jquery) {
        return (context || root).find(selector);

        // HANDLE: $(expr, context)
        // (which is just equivalent to: $(context).find(expr)
      } else {
        return this.constructor(context).find(selector);
      }

      // HANDLE: $(DOMElement)
    } else if (selector.nodeType) {
      this[0] = selector;
      this.length = 1;
      return this;

      // HANDLE: $(function)
      // Shortcut for document ready
    } else if (isFunction(selector)) {
      return root.ready !== undefined ?
        root.ready(selector) :

        // Execute immediately if ready is not present
        selector(jQuery);
    }

    return jQuery.makeArray(selector, this);
  };
  init.prototype = jQuery.fn;
  rootjQuery = jQuery( document );

  var
	_jQuery = window.jQuery,
	_$ = window.$;

  jQuery.noConflict = function( deep ) {
    if ( window.$ === jQuery ) {
      window.$ = _$;
    }

    if ( deep && window.jQuery === jQuery ) {
      window.jQuery = _jQuery;
    }

    return jQuery;
  };
  if (!noGlobal) {
    // 把jQuery赋值给window下的jQuery和$
    window.jQuery = window.$ = jQuery;
  }
})
// extend:向JQ中继续扩展方法
$.extend({});//=>扩展到JQ对象上,一般是为了完善类库,提供更多的工具方法
$.extend(true,{});//=>深度扩展,覆盖Jq原来的方法
$.fn.extend(true,{});//=>扩展到JQ原型上:一般是为了写JQ插件,让JQ的实例来调用
// 扩展
$.extend({
  queryURLParams:function(url){
    // ...
  }
})
// 使用
$.queryURLParams("http://....")

// 转移$的使用权 使用j接收jQuery的实例,就可以 jQuery()或j()使用了
// 但是如果参数传了true 那就只能使用接收的那个值来使用jQuery j();
let j = $.noConflict(true);  //j=>jQuery
/**
 * 基于JQ选择器创建出来的JQ类是一个实例,就可以调取jQuery.prototype
 * 上的方法
 * 1.创建出来的JQ实例是一个类数组(JQ对象) 基于makeArray创建出来的
 * 2.select支持三种数据格式
 *    [string]: 选择器$('.box') 拆功能键元素$('<div></div>')
 *    [元素对象:Js原生对象]:
 *        把原生JS对象转换为JQ对象(只有这样才能调取JQ中的方法)$(原生对象)
 *        把JQ对象转换为原生兑现给,直接基于索引获取即可,例:$A[0],真实项目
 * 中使用JQ自带的get方法实现,因为他更加完善,可以支持负数索引$A.get(0)
 *        eq方法也是根据索引获取集合中的某一项(也支持负数索引),只不过返回
 * 的结果不是原生Js对象,依然是JQ的一个实例
 *     [函数]:
 *        $(function(){}) 等待页面中的DOM结构在家完成在执行函数,等价于
 * $(document).ready(function(){})
 * */ 



/* 
 * jQuery给我们提供的方法放到了两个位置上
 *   1.原型上 jQuery.prototype
 *      $().get()
 *      只有jQuery的实例才可以调用
 *   2.对象上jQuery.Ajax= ...
 *      $.ajax()
 *      直接调取使用
 */



/* 
Jq只有一个each方法,就是走这个
$list.each(function(){}) == $.each($list,function(){})

each: function( obj, callback ) {
		var length, i = 0;
		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},
*/

/* 
检测当前对象是否为数组/类数组
function isArrayLike( obj ) {
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
*/