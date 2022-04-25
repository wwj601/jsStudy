var name = 10;
var obj = {
  name: 'wwj'
}
// 获取OBJ这个对象的NAME属性对应的值
console.log(obj.name); //wwj
console.log(obj['name']) //wwj
// 一个对象的属性名只有两种格式：数字或者字符串(等基本类型值)

// obj[name变量代表的值] =>obj[10] =>undefined
console.log(obj[name]) //undefined

{
  var name = '学习js'
  var obj = {
    // name:'学习js',
    // 属性名：属性值(放的是变量也是把变量存储的值拿过来做属性值)
    name: name
  }
} 
{
  // for in循环:用来循环遍历对象中的键值对的(continue 和break同样适用)
  var obj = {
    name:'春亮',
    age:'22',
    fieneds:'王鹏,志刚',
    1:20,
    2:149,
    3:140
  }
  // 对象中有多少组键值对,循环就执行几次
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const element = obj[key];
      console.log('属性名:'+key+'属性值:'+element)
    }
  }
  // for in 在遍历的时候,有限循环数字属性名(从小到大)
}