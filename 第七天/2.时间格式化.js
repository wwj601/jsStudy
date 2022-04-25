let addZero = val=>{
  val = val.toString();
  return val.padStart(2,0);
}
{
  // 基于字符串处理
  let time ="2022-4-23 12:0:5";
  function formatTime(time){
    let timeAry = time.split(/(?: |-|:)/g);
    let result = timeAry[0]+'年'+addZero(timeAry[1])+'月'+addZero(timeAry[2])+'日'
    +' '+addZero(timeAry[3])+':'+addZero(timeAry[4])+':'+addZero(timeAry[5])
    return result
  }
  console.log(formatTime(time))
}

{

  let formatTimeObj = time=>{
    time = time.replace(/-/g,'/');
    return new Date(time)
  }
  // 基于日期对象处理
  let time ="2022-4-24 12:8:5";
  time = formatTimeObj(time)
  function formatTime(time){
    let year = time.getFullYear(),
        month = time.getMonth() + 1,
        date = time.getDate(),
        hour = time.getHours(),
        minute = time.getMinutes(),
        second = time.getSeconds();
    return (year + '年' + addZero(month) + '月' + addZero(date) + '日'+" "
    +addZero(hour) + ':' + addZero(minute) + ":" + addZero(second))
  }
  console.log(formatTime(time))
}
{
  /* 
    封装一套公共的时间字符串格式化处理的方法
  */
 String.prototype.formatTime = function formatTime(template){
  typeof template === "undefined" ? template = "{0}年{1}月{2}日 {3}:{4}:{5}" :null;
  let matchAry = this.match(/\d+/g);
  template = template.replace(/\{(\d+)\}/g,(n,x)=>{
    let val = matchAry[x] || "00";
    val.length <2? val = '0'+val:null;
    return val
  })
  return template
 }
 let time ="2022-4-23 13:5:23";
 var str = time.formatTime("{1}/{2} {3}:{4}")
 console.log(str)
}