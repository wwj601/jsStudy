{
  /* 
  var a =12
  var a = 13
  console.log(a);//13 
  */
}


{
  /* 
  let b =12
  let b = 13
  // 语法错误，所有代码将不会执行
  console.log(b);//SyntaxError: Identifier 'b' has already been declared 
  */
}
{
  console.log(1);//1
  // 引用错误，报错之前的代码还会照常执行，报错后面的代码不执行
  console.log(a);//ReferenceError: Cannot access 'a' before initialization
  let a = 12
}
{
  // 所谓重复是：不管之前通过什么办法，只要当前栈内存中存在了这个变量
  // 我们使用let/const等使用了重复再声明这个变量就是语法错误
  /* 
  var a =12
  let a = 13
  console.log(a);//SyntaxError: Identifier 'a' has already been declared 
   */
}