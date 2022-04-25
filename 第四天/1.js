{
  // 求两个数的和,算完和后乘以10,然后在除以2
  // =>sum是函数名,代表这个函数
  // =>sum()是让函数执行,代表的是函数执行返回的结果
  // n/m是形参,是变量,用来存储执行函数时传递的实参
  function sum(n, m) {
    let result = n + m;
    result *= 10;
    result /= 2;
    return result;
  }
  let n = sum(10, 20);
  console.log(n);
}
{
  // ===========形参的细节
  // 创建函数的时候我们设置了形参变量，如果我们呢执行的时候并没有
  // 传递给对应的实参，那么形参变量就是：undefined
  function sum(n, m) {
    if(typeof n === 'undefined'){
      n = 0
    }
    if(typeof m === 'undefined'){
      m = 0
    }
    let result = n + m;
    result *= 10;
    result /= 2;
    console.log(result);
  }
  sum()
}
{
  // =======函数中的返回值
  // 函数执行的时候，函数内部创建的变量我们是无法获取和操作的，
  // 如果想要获取内部的信息，我们需要基于return返回值机制把信息返回
  // 才可以，执行的函数结果就是返回的值
  function sum(n, m) {
    let result = n + m;
    result *= 10;
    result /= 2;
    // RETURN的一定是值：此处十八RESULT变量存储的值返回给外面
    return result;
  }
  // 没有写RETURN，函数默认返回值是undefined
  let n = sum(40, 50);
  console.log(n);
}
{
  function sum(n, m) {
    if(n===undefined || m === undefined){
      // 函数体重遇到RETURN，后面的代码则不再执行了；
      return;
    }
    let result = n + m;
  }
}
{
  // ====================匿名函数
  // 匿名函数之函数表达式：把一个匿名函数本身作为值赋值给其他东西
  // 这种函数一般不是手动触发执行，而是靠其它程序驱动触发执行（例如
  // ：触发某个事件的时候把它执行）
  // document.body.onclick = function(){}
  setTimeout(() => {}, 1000);//=>设置定时器1s后执行匿名函数
  // 匿名函数之自执行函数：创建完一个匿名函数，紧接着就把当前函数加
  // 小括号执行 （传递实参）
  ~function(n){
    //n=>1
  }(1)
}