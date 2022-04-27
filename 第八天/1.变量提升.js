{
  // 变量var提前定义
  /* console.log(a);//undefined
  var a = 12
  var b = a
  b = 13;
  console.log(a);//12 */
}
{
  console.log(sum(10,10))
  function sum(n,m){
    return n+m
  }
  // 函数定义并提前声明
}
{
  // 函数表达式使用var来创建sum，变量提升阶段是会生命变量，不会赋值
  // 所以此时函数在前面执行，函数是没有值得（真实项目中这样当时最常用
  // 因为它操作严谨）

   /* 
   sum(10,20);//error:sum is not a function
   var sum = function (n,m){
     return n+m
   } 
   */
  let sum = (n,m) => n+ m;
  console.log(sum(10,20)) //30
}
{
  /* console.log(a);//ReferenceError: Cannot access 'a' before initialization
  let a = 12
  a = 13
  console.log(a) */
}
{
  console.log(a);//ReferenceError:a is not defined
  a = 13
  console.log(a)
}
{
 /*  var b = 4
  console.log(b)
  console.log(window.b) */
  
}