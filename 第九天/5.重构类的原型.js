/* 
 * 重构类的原型：让某个类的原型执行新的堆内存地址（重定向项指向）
 * 问题1：重定向后的空间中不一定有construcor属性（只有浏览器默认
 * 给prototype开辟的堆内存中才存在constructor），这样导致类和原型机制
 * 不完整：所以需要我们手动再给新的原型空间设置constructor属性
 * 问题2：在重新指向之前，我们需要确保原有原型的堆内存中没有设置属性
 * 和方法，因为重定向后，原有的属性和方法就没啥用了（如果需要克隆到
 * 新的原型堆内存中，我们还需要额外的处理） =>但是内置类的原型，由于
 * 担心这样的改变会让内置的方法都消失，所以禁止了我们给内置类原型的
 * 空间重定向，例如：Array.prototype={...}这样没有用，如果我们想加
 * 公共方法可以Array.prototype.xxx = function(){}
 */
function Fn() { 
  // ...
}
// 批量给原型设置属性方法的时候：重构类原型
Fn.prototype = {
  constructor:Fn,//手动设置constructor指向
  getA:function(){},
  getB:function(){},
  getC:function(){},
}



/* // 批量给原型设置属性方法的时候：设置别名
let proto = Fn.prototype
proto.getA = function () {}
proto.getB = function () {}
proto.getC = function () {} */



function Fn2(){
  this.x = 100
  this.y = 200;
}
Fn.prototype.getX = function(){

  console.log(this.x)
}
let f1 = new Fn2;
Fn.prototype = {
  getY:function(){
    console.log(this.y)
  }
}
let f2 = new Fn2;

let n = 10;
function checkX(x){
  x = Number(x)
  return isNaN(x)?0:x
}
Number.prototype.plus = function(num){
  return this + checkX(num)
} 
Number.prototype.minus = function(num){
  return this - checkX(num)
} 
let m = n.plus(10).minus(5)
console.log(m)

