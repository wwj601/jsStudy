/* 1.call和apply的区别是什么，那个性能更好一些 
都是Function内置类原型上的公有方法，改变this的指向只要是这个类的实例都可以调用这两个
方法，call传参是一个个传的，apply是把所有的参数放在数组里传递的，同样方法的
还有bind这个方法，预先改变this指向，但是没有把这个函数执行，
call的性能要比apply好那么一些，（尤其是传递给函数的参数超过三个的时候），开发的时候
可以使用call多一些

let ary = [10,20,30]
fn，call(obj,...ary)
*/
// =>自己实现性能测试（只供参考）：任何的代码性能测试都是和测试的环境
// 有关系的，例如CPU、内存、GPU等电脑当前性能不会有相同的情况，不同浏览器
// 也会导致测出的性能不同；
// console.time可以测试出一段程序执行的时间
console.time('A')
for (var i = 0; i < 1000000; i++) {

}
console.timeEnd('A')

/* 
2.实现(5).add(3).minus(2)
*/
~function(){
  // 每次执行完，都要返回NUMBER这个类的实例，才能实现链式写法
  function check(n){
    n = Number(n);
    return isNaN(n) ? 0 :n;
  }
  function add(num){
    num = check(num);
    return this+num;
  }
  function minus(num){
    num = check(num);
    return this - num;
  }
  ['add','minus'].forEach(item=>{
    Number.prototype[item] = eval(item)
  })
}()

/* 
3.箭头函数和普通函数的区别是什么？构造函数可以使用new生成实例，那么箭头函数可以吗？

  1）箭头函数语法上比普通函数更加简洁（ES6中每一种函数都可以使用形参赋值默认值，和剩余运算符）
  2）箭头函数中没有自己的this它的this是继承函数所处上下文中的this
  3）箭头函数中没有agruments，可以使用...剩余运算符接收传递的参数，接收的值是数组
  4)箭头函数不能被new执行（因为：箭头函数没有this也没有prototype）
*/


/* function Fn(){
  this.x = 100;
}
Fn.prototype.getX = function(){}
let f = new Fn; */

let Fn = ()=>{
  this.x = 200;
}
// let f = new Fn;//报错，箭头函数不能被new执行

// 在原型上自己写一个each循环 
Array.prototype.each = function each(callback,context=window){
  for(var i =0;i<this.length;i++){
    var flag = callback.call(context,this[i],i)
    if(flag===false){
      break;
    }else{
      this.splice(i,1,flag);
    }
  }
  return this;
}

let arr = [10,20,30,'AA',40];
let obj = {};
arr = arr.each((item,index)=>{
  console.log(this)
  if(isNaN(item)){
    return false;
  }
  return item *10
})
console.log(arr);