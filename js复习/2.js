/* 
  如何把一个字符串的大小写取反（大写变小写，小写变大写）例如‘Abc’变成‘aBC’
*/
let str = "JinTiandetianQIhai是那么的热，60天Mei见到宝贝了,ai!";
str = str.replace(/[a-zA-Z]/g,content=>{
  // content:每一次正则匹配的结果
  // 验证是否为大写字母：把字母转换为大写后和之前一样那就是大写
  // ASCII表中找出大写的取值范围进行判断 （65-90）
  // content.charCodeAt() >=65 && content.charCodeAt() <=90;
  return content.toUpperCase() === content? content.toLowerCase() : content.toUpperCase();
})
console.log(str)