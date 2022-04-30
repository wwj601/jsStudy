/* 
 *函数数据类型
 *  1、普通函数
 *  2、类（内置类 OR 自定义类）
 * 对象数据类型
 *  1、{}普通对象 []数组对象 /^$/正则对象 日期对象 Math数学函数对象
 *  arguments等类数组对象
 *  2、实例也是对象数据类型的
 *  3、类的原型prototype也是对象数据类型的（Function.prototype除外，
 *    它是一个匿名空函数）
 *  4、函数也是对象
 * ======================================
 * 函数有三种角色
 *  1、普通函数
 *    + 形参、实参、arguments、return、箭头函数
 *    + 私有作用域（栈内存、执行上下文）
 *    + 形参赋值
 *    + 作用域链
 *    + 栈内存的释放和不释放（闭包）
 *    + ...
 *  2.构造函数（类）
 *    + 类和实例
 *    + prototype和__proto__
 *    + instanceof
 *    + constructor
 *    + hasOwnProperty
 *    + ...
 *  3.普通对象
 *    + 它是由键值对组成的
 *    + ...
 *  函数中的THIS也是重点需要学习的内容
 */

function Fn(n, m) {
  this.x = n + m;
  this.y = n - m;
  let total = n * m;
  return total;
}
Fn.prototype.say = function () {
  console.log('SAY')
}

// =>普通函数执行
let total = Fn(20, 10);

// 构造函数（类和实例）
let f1 = new Fn(20,10)

// 普通对象
Fn.total = 1000;