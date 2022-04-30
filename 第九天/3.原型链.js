function Fn(){
  // this 当前类创建的实例 f1
  this.x = 100
  this.y = 100
  this.say=function(){
    console.log(this.x)
  }

}
Fn.prototype.say = function(){
  console.log(this.y)
}
Fn.prototype.eat = function(){
  console.log(this.x+this.y)
}
Fn.write = function(){
  this.z = 1000
}
let f1 = new Fn();
/* 
  面向对象当中有关私有/公有方法中的THIS问题
  1、方法执行，看前面是否有点，点前面是谁THIS就是谁
  2、把方法总的THIS进行替换
  3、在基于原型链查找的方法确定结果即可
*/
f1.say();//this:f1  f1.x =>100
f1.eat();//this:f1  =>f1.x+f1.y=>300
f1.__proto__.say();//=>this:f1.__proto__  =>undefined
Fn.prototype.eat();//this:Fn.prototype this.x+this.y =>NaN
f1.write();// this:f1 =>f1.z = 1000 => 给f1设置一个私有属性z = 1000
//this:Fn.prototype =>Fn.prototype.z = 1000 =>给原型上设置一个
// 属性z=1000（属性是实例的公有属性）
Fn.prototype.write();