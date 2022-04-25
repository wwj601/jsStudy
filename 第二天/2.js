{
  // string
  let a = 12;
  console.log(a.toString());//=>'12'
  console.log((NaN).toString());//=>'NaN'

  // null 和undefined是禁止直接toString的
  // 但是null和undefined一样转换为字符串的结果就是'null'/'undefined'
  // 普通对象.toString()的结果是""[object Object]"=>
  // Object.prototype.toString方法不是转换为字符串的，而是用来检测数据类型的

  // =====================字符串拼接
  // 四则运算符，只有加法可能存在字符串拼接，其余都是数学计算
  console.log('10'+10); //=>'1010'
  console.log('10'-10); //=>0
  console.log('10px' - 10); //=>NaN
}
{
  let a =10 + null + true +[] +undefined + 'wwj' +null+ []+10 + false;
  console.log(a)//11undefinedwwjnull10false
  // 10+null -> 10+0 ->10
  // 10 + true -> 10+1 -> 11
  // 11+[] -> 11+'' -> '11'
  // '11'+undefined ->'11undefined'
  // ...
  // '11undefinedwwjnull10false'
}