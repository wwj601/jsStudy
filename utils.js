/**
 * _type[key](val):检测全部数据类型
 *    @return
 *      [boolean]
 * by Mr_wan on 2020/5/20
 */
let _type = (function () {
  var _obj = {
    isNumberic: "Number",
    isBoolean: "Boolean",
    isString: "String",
    isNull: "Null",
    isUndefined: "Undefined",
    isSymbol: "Symbol",
    isPlainObject: "Object",
    isArray: "Array",
    isRegExp: "RegExp",
    isDate: "Date",
    isFunction: "Function",
    isWindow: "Window"
  };
  var _type = {},
    _tostring = _type.toString;
  for (var key in _obj) {
    if (_obj.hasOwnProperty(key)) {
      _type[key] = (function () {
        var reg = new RegExp('\\[object ' + _obj[key] + '\\]');
        return function (val) {
          return reg.test(_tostring.call(val))
        }
      })();
    }
  }
  return _type;
})();
/**
 * _each:遍历数组、类数组、对象中的每一项
 *    @params
 *        obj:需要迭代的对象
 *        callback:回调函数 执行回调函数把属性值、属性名传递，接收返回结果，
 * 如果返回false则结束当前的循环，如果是其他值，让返回的值替换对象中的当前项，
 * 无返回值，不做处理
 *     context：改变this指向
 *    @returns
 *      返回一个新的数组或者对象（原数组或对象不改变）
 * by Mr_wan on 2020/5/20
 * */
function _each(obj, callback, context = window) {
  let likeArry = _type.isArray(obj) || ('length' in obj && _type.isNumberic(obj.length));
  typeof callback !== 'function' ? callback = Function.prototype : null;
  // 类数组或数组
  if (likeArry) {
    let ary = [...obj];
    for (let i = 0, len = ary.length; i < len; i++) {
      let result = callback.call(context, ary[i], i);
      if (result === false) break;
      if (typeof result === 'undefined') continue;
      ary[i] = result;
    }
    return ary
  }
  // 对象处理
  let opp = {
    ...obj
  };
  for (let key in opp) {
    if (opp.hasOwnProperty(key)) {
      let result = callback.call(context, opp[key], key);
      if (result === false) break;
      if (typeof result === 'undefined') continue;
      opp[key] = result;
    }
  }
  return opp;
}


/**
 * debounce:防抖，在指定的时间间隔内执行一次
 *  @params
 *    fnc:要执行的函数
 *    wait：时间间隔
 *    immediate：是否开始就触发函数执行
 *  @return
 *    可被调用的函数
 *  by Mr_wan on 2020/5/8
 */
function debounce(fnc, wait, immediate) {
  var timer = null,
    result = null;
  return function (...args) {
    var context = this,
      callNow = immediate && !timer;
    clearTimeout(timer); //重要：在设置新的定时器之前，都要把之前设置的定时器清除掉
    // 因为在防抖的时间间隔内，只能执行一次；
    timer = setTimeout(() => {
      timer = null;
      if (!immediate) result = fnc.apply(context, args);
    }, wait)
    if (callNow) result = fnc.apply(context, args);
    return result;
  }
}
/**
 * debounce:节流，为了缩减执行的频率，达到了一定的时间间隔就会执行一次
 *  @params
 *    fnc:要执行的函数
 *    wait：时间间隔
 *  @return
 *    可被调用的函数
 * by Mr_wan on 2020/5/8
 */
function throttle(fnc, wait) {
  let result = null,
    timer = null,
    previous = 0;
  return function (...args) {
    let now = new Date(),
      context = this;
    let remaining = wait - (now - previous);
    // remianing小于等于0，表示上次执行至此次已经经过了一个时间间隔
    if (remaining <= 0) {
      clearTimeout(timer);
      previous = now;
      timer = null;
      result = fnc.apply(context, args);
    } else if (!timer) {
      timer = setTimeout(() => {
        previous = new Date();
        timer = null;
        result = fnc.apply(context, args);
      }, remaining);
    }
    return result;
  }
}~ function () {
  /**
   * formatTime:时间字符串的格式化处理
   *    @params
   *      template:[string] 我们期望获取的日期格式模板
   *      模板规则:{0}=>年 {1-5}=>月/日/时/分/秒
   *    @return
   *     [string] 返回格式化后的时间字符串
   *  by Mr_wan on 2020/5/5
   */
  function formatTime(template = "{0}年{1}月{2}日 {3}时{4}分{5}秒") {
    let timeAry = this.match(/\d+/g);
    return template.replace(/\{(\d)\}/g, (...[, $1]) => {
      let time = timeAry[$1] || '00';
      return time.padStart(2, '0');
    })
  }
  /** 
   * queryURLParams:获取URL地址中问号传参的信息和哈希值,然后返回想要的参数
   *  @params
   *     name:[string] 要获取的参数 哈希值为'HASH'
   *  @return
   *     [string] 返回要获取的参数
   * by Mr_wan on 2020/5/5
   */
  function queryURLParams(name) {
    let result = {},
      reg1 = /([^?#=&]+)=([^?#=&]+)/g,
      reg2 = /#([^?#=&]+)/g;
    this.replace(reg1, (...[, $1, $2]) => result[$1] = $2);
    this.replace(reg2, (...[, $1]) => result['HASH'] = $1);
    param = name in result ? result[name] : null;
    result = null;
    return param;
  }
  /**
   * milliMeter:实现大数字的千分符处理
   *  @params
   *  @return
   *    [string] 千分符后的字符串
   *  by Mr_wan on 2020/5/5
   */
  function milliMeter() {
    let reg = /\d{1,3}(?=(\d{3})+$)/g;
    return this.replace(reg, content => content + ',')
  }
  // 扩展到内置类String的原型上
  ['formatTime', 'queryURLParams', 'milliMeter'].forEach(item => {
    String.prototype[item] = eval(item);
  })
}();

/**
 * unique：利用对象检测重复项 如果当前数组项存在，把数组最后一项赋值给当前项
 * @param {ary} Array 要去重的数组
 * @return Array 去重后的数组
 * by Mr_wan on 2020/5/1 
 */
function unique(ary) {
  let obj = {};
  for (let i = 0; i < ary.length; i++) {
    let item = ary[i];
    if (item in obj) {
      ary[i] = ary[ary.length - 1];
      ary.length--;
      i--;
      continue;
    }
    obj[item] = item;
  }
  obj = null;
  return ary;
}