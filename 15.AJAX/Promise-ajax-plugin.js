/**
 * 支持的功能
 *    1.支持全局默认配置项
 *    2.发送请求_ajax.get/post
 *    3.每一次请求都会返回Promise实例，基于Promise设计模式进行管理
 *    4.支持_ajax.all
 *  
 */
~ function () {
  class Ajax {
    constructor(url, options) {
      this.url = url;
      this.options = options;
      return this.init();
    }
    init() {
      let {
        baseURL,
        headers,
        params,
        method,
        data,
        withCredentials,
        timeout,
        validataStatus,
        transFormRequest,
        transformResponse
      } = this.options;
      // 处理transformResonponse合法性
      Array.isArray(transformResponse) ?  null : transformResponse =[];

      return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        // 处理url
        let url = ``
        url+=baseURL+this.url;
        // 处理params
        xhr.open(method, url);

        xhr.onreadystatechange = () => {
          let flag = validataStatus(xhr.status);
          console.log(xhr.readyState)
          if (!flag) {
            return reject({
              status: xhr.status,
              statusText: xhr.statusText,
              msg: xhr.responseText
            })
          };
          
          if (xhr.readyState === 2 && method.toUpperCase() === 'HEAD') {
            return resolve({
              data: this.handleGetHeaders(xhr.getAllResponseHeaders())
            })
          }
          if (xhr.readyState === 4 &&  method.toUpperCase() !== 'HEAD') {
            
            return resolve({
              status:xhr.status,
              statusText:xhr.statusText,
              data: JSON.parse(xhr.responseText)
            })
          }
        }
        
        // 处理headers
        for(let key in headers){
          xhr.setRequestHeader(encodeURI(key),encodeURI(headers[key]));
        }
        // 处理withCredentials
        xhr.withCredentials =withCredentials;
        // 处理timeout
        xhr.timeout  =timeout;
        // 处理transFormRequest
        xhr.send(data)
      })
    }
    // 处理getAllResponseHeaders
    handleGetHeaders(headers) {
      let res_headers = {};
      headers.split(/\n/g).forEach(item => {
        let [key = '', value = ''] = item.split(': ');
        if (key === '') return;
        res_headers[key.trim()] = value.trim();
      })
      return res_headers
    }
  }
  // 参数初始化
  function _init(options = {}) {
    return Object.assign(_axios.defaults, options);
  }

  function _axios() {}
  _axios.defaults = {
    baseURL: '',
    timeout: 0,
    method: 'get',
    data: {},
    params: {},
    headers: {},
    withCredentials: false,
    transFormRequest: [function (data) {
      return data;
    }],
    transformResponse: [function (res) {
      return res.data
    }, function (error) {
      return error;
    }],
    validataStatus: function (status) {
      console.log(status)
      return status >= 200 && status < 300;
    }
  };
  ['get', 'delete', 'head', 'options'].forEach(key => {
    _axios[key] = function (url, options={}) {
      options.method = key;
      return new Ajax(url, _init(options));
    }
  });

  ['post', 'put'].forEach(key => {
    _axios[key] = function (url, data, options = {}) {
      options.data = data;
      options.method = key;
      return new Ajax(url, _init(options));
    }
  });

  _axios.all = function (promiseAry) {
    return Promise.all(promiseAry)
  }

  window._axios = _axios;
}()