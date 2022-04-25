{ // isNaN([val])  []参数描述占位符
  console.log(isNaN(10)); //false 有效数字
  console.log(isNaN('aa')); //true 非有效数字

  console.log(isNaN('10')); //false 有效数字 (先隐形转换再检测)
} 
{
  // ===============Number=============
  // 把字符串转换为数字，只要字符串中包含任意一个非有效数字字符
  // （第一个小数点除外）结果都是NaN，空字符串会变成数字0
  console.log(Number('12.5')) //=>12.5
  console.log(Number('12.5px')) //=> NaN
  console.log(Number('')) //=> 0

  // 布尔转换为数字
  console.log(Number(true)) //=>1
  console.log(Number(false))//=>0
  console.log(isNaN(false))//=>false 先转换为数字0 是有效数字

  // null -> 0 undefined ->NaN
  console.log(Number(null)) //0
  console.log(Number(undefined)) //NaN

  // 把引用数据类型转换为数字，是先把他基于toString方法转换
  
  // 为字符串，然后再转换为数字
  console.log(Number({name:'xxx'})); //=>NaN
  console.log(Number({})); //=>NaN
  // 普通对象数据类型的toString是检测数据类型的 '[object Object]'

  console.log(Number([])); //=>0
  console.log(Number([12])); //=>12
  console.log(Number([12,23])); //=>NaN
}
{
  // parseInt parseFloat
  let str = '12.5px'
  console.log(parseInt(str))//12
  console.log(parseFloat(str))//12.5
  console.log(parseFloat(true))//NaN
}