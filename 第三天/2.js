{
  // 条件语句
  let a = 10;
  if (a <= 0) {
    console.log('哈哈')
  } else if (a > 0 && a < 10) {
    // A && B:A和B都成立采薇TRUE
    // A || B:A或者B只有一个成立就为TRUE
    console.log('呵呵')
  } else if (a == 10) {
    console.log('嘿嘿')
  } else {
    console.log('嘻嘻')
  }
  if (!a) {
    // 条件可以多样性:等于 大于 小的的比较 或者一个值或者取反=>
    // 最后都要计算出是true还是false
  }
} {
  // 三元运算符:简单if else的特殊处理
  let a = 10;
  if (a >= 10) {
    console.log('呵呵')
  } else {
    console.log('哈哈')
  }

  // 条件?成立处理的事情:不成立处理的事情;
  // 1.如果处理的事情比较多,我们用括号抱起来,每一件事情用逗号分隔
  // 2.如果不需要处理事情,可以用null/undefined占位
  if (a > 0 && a < 20) {
    a++;
    console.log(a);
  }
  a > 0 && a < 20 ? (a++, console.log(a)) : null


  a >= 10 ? console.log('呵呵') : console.log('哈哈')


  a > 0 ? (a < 10 ? a++ : a--) : (a > -10 ? a += 2 : null)
}
{
  // switch catch:一个变量在不同值情况下的不同操作
  // 1.每一种CASE情况结束后最好都加上BREAK
  // 2.default 相当于else 以上都不成立才执行
  // 3.switch case语句比较都是==="绝对相等" 
  let a = 5;
  switch (a) {
    case 2:
      console.log('嘿嘿')
      break;
    case 5:
      console.log('哈哈')
      break;
    default:
      console.log('嘻嘻')
  }
}
{
  // 不加break,满足条件成立执行完成后,后面条件不论是否成立都要执行,
  // 直到遇到break为止(不加break可以实现变量在某些值的情况下做相同
  // 的事情=>编程开发人员要具备探索尝试之心)
  let a = 1
  switch (1) {
    case 1:
    case 5:
      a+=2
      break;
    default:
      a--
  }
  console.log(a)
}