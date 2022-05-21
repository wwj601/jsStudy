~ function () {
  function Ajax(options) {
    return new Init(options)
  }
  let regGET = /^(GET|DELETE|HEAD|OPTIONS)$/i;
  let _default = {
    url: '',
    method: 'GET',
    data: null,
    dataType: 'JSON',
    async: true,
    cache: true,
    timeout: null,
    headers: null,
    success: null,
    error: null
  }

  function Init(options = {}) {
    this.options = Object.assign(_default,options);
    console.log(this.options)
    let xhr = null,
      {
        method,
        url,
        async,
        data,
        cache,
        timeout,
        headers,
        dataType,
        success,
        error
      } = this.options;
    this.xhr = xhr = new XMLHttpRequest;
    // 处理data:如果是get请求把data放到url末尾
    if (data && regGET.test(method)) {
      url += `${this.checkASK(url)}${this.bandleData(data)}`;
      data = null
    }
    // cache处理：如果是get请求，并且不想要缓存
    if (!cache && regGET.test(method)) {
      url += `${this.checkASK(url)}_=${new Date().getTime()}`
    }
    xhr.open(method, url, async);
    // 超时处理
    timeout && (xhr.timeout = timeout);
    // headers处理 须在open之后
    if (Object.prototype.toString.call(headers) === "[object Object]") {
      for (const key in headers) {
        if (Object.hasOwnProperty.call(headers, key)) {
          xhr.setRequestHeader(key, encodeURIComponent(headers[key]))
        }
      }
    }
    xhr.onreadystatechange = () => {
      let {
        status,
        statusText,
        readyState: state,
        responseText,
        responseXML
      } = xhr;
      
      if(/^(2|3)\d{2}$/.test(status)){
        if(state===2 && /^HEAD$/i.test(method)){
          xhr.getAllResponseHeaders()
          success && success(xhr);
        }
        
        if(state === 4 && typeof success==='function' && !/^HEAD$/i.test(method)){
          
          if(dataType.toUpperCase()==='JSON'){
            responseText = JSON.parse(responseText)
          }else if(dataType.toUpperCase()==='XML'){
            responseText = responseXML
          }
          success(responseText,statusText,xhr);
        }
        return;
      }
      xhr.timeout = function () {
        xhr.abort(); //超时手动中断请求
      }
      typeof error === 'function' ? error(statusText,statusText,xhr):null
      
    }
    xhr.send(data);
  }
  Ajax.prototype = {
    constructor: Ajax,
    version: 1.0,
    bandleData(data) {
      if (data === null || typeof data === 'string') return data;
      let str = ``;
      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          str += `${key}=${data[key]}&`
        }
      }
      str = str.substring(0, str.length - 1);
      return str;
    },
    checkASK(url) {
      return url.includes('?') ? '&' : '?'
    }
  }
  Init.prototype = Ajax.prototype;
  window.ajax = Ajax;
}()