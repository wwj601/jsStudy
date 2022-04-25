{
  function sum(n, m) {
    return n, m
  }
  console.log(sum(10, 20))

  let sum2 = (n, m) => {
    return n + m
  }

  // 如果函数体中只有一行代码RETURN,可以忽略RETURN和大括号,一行搞定
  sum2 = (n, m) => n + m;
  
}
{
  function fn(n) {
    return function (m) {
      return n + m;
    }
  }
  // 使用箭头函数简写
  let fn2 = n => m => n + m;

  // 形参赋值默认值:当没有给形参传递实参的时候,执行默认值
  let sum = (n=0, m=0) => n + m;
}
{
  // 箭头函数中没有arguments
  let sum = (...arg)=>{
    // ... 剩余运算符,获取到传递的实参集合(它是数组)
    console.log(arg);//[10,20]
    return eval(arg.join('+'))
  }
  sum(10,20)
}