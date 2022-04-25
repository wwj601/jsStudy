{
  let url = "https://sports.qq.com/kbsweb/game.htm?lx=1&name=wwj&teacher=aaa#box"
  /* 
    结果：{
      Lx:1,
      name:'wwj',
      teacher:'aaa',
      HASH:'box'
    }
  */
  let askIndex = url.indexOf('?');
  let wellIndex = url.indexOf('#');
  let askText = url.slice(askIndex + 1, wellIndex);
  let wellText = url.slice(wellIndex + 1);
  let askAry = askText.split('&');
  let result = {};
  askAry.forEach(item => {
    let n = item.split('=');
    let key = n[0];
    let value = n[1];
    result[key] = value;
  })
  result['HASH'] = wellText;
  console.log(result); //{ lx: '1', name: 'wwj', teacher: 'aaa', HASH: 'box' }
} {
  let url = "https://sports.qq.com/kbsweb/game.htm?lx=1&name=wwj&teacher=aaa#box"

  /* 
    queryURLPamams:获取URL地址中问好传参的信息和哈希值
      @params
        url [string] 要解析的URL字符串
      @return
        [object] 包含参数和哈希值信息的对象
  */
  function queryURLPamams(url) {
    let askIn = url.indexOf('?'),
      wellIn = url.indexOf('#'),
      askText = '',
      wellText = '',
      result = {};
    // #不存在
    wellIn === -1 ? wellIn = url.length : null;
    // 获取? # 后面的字符串
    askText = askIn > -1 ? url.substring(askIn + 1, wellIn) : '';
    wellText = url.substring(wellIn + 1);
    // 判断 ?是否存在
    if (askText !== '') {
      let askAry = askText.split('&');
      askAry.forEach(item => {
        let ary = item.split('=');
        result[ary[0]] = ary[1];
      })
    }
    if (wellText !== '') {
      result['HASH'] = wellText
    }
    return result;
  }
  let params = queryURLPamams(url);
  console.log(params)
} {
  let url = "https://sports.qq.com/kbsweb/game.htm?lx=1&name=wwj&teacher=aaa#box"

  // 利用正则，replace 操作获取
  function queryURLPamams(url) {
    let result = {},
      reg1 = /([^?#=&]+)=([^?#=&]+)/g,
      reg2 = /#([^?#=&]+)/g;
    url.replace(reg1, (n, x, y) => result[x] = y);
    url.replace(reg2, (n, x) => result['HASH'] = x);
    return result;
  }
  let params = queryURLPamams(url);
  console.log(params)
}