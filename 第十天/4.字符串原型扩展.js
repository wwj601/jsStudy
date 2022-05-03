let time = new Date();
time = time.toLocaleString(); //'2022/5/3 11:35:11'

// 想要转变的格式: "05月03日 11时35分"

~ function () {
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
console.log(time.formatTime("{1}/{2} {3}:{4}:{5}"));
let url = "http://www.baidu.com?name=wwj&age=28#time"
console.log(url.queryURLParams("name")); //wwj
let num = '15628954'; //=>"15,628,954" 千分符
// num = '112345678256874'

/* // 实现大数字的千分符处理
num = num.split('').reverse().join('');
for(var i=3;i<num.length;i+=4){
  let prev = num.substring(0,i),
      next = num.slice(i);
  num = prev+','+next
}
num = num.split('').reverse().join(''); */
console.log(num.milliMeter())