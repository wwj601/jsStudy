/* 
  原型继承
*/
{
  function A(x) {
    this.x = x
  }

  A.prototype.getX = function () {
    console.log(this.x);
  }

  function B(y) {
    this.y = y
  }

  B.prototype = new A(200);
  B.prototype.constructor = B;
  B.prototype.gety = function () {
    console.log(this.y);
  }
  let b1 = new B(100);
  b1.getX()
}
/* 
 *call继承：
 *  寄生组合继承 call+Object.create()
 */
{
  function A(x) {
    this.x = x
  }

  A.prototype.getX = function () {
    console.log(this.x);
  }

  function B(y) {
    this.y = y;
    A.call(this, 200)
  }
  B.prototype = Object.create(A.prototype)
  B.prototype.constructor = B;
  B.prototype.gety = function () {
    console.log(this.y);
  }
  let b1 = new B(100);
  b1.getX()
}
/* 
  es6中基于class创造出来的类不能当作普通函数执行，也不能重定向原型的指向
  ES6中的继承：extends
*/
{
  class A {
    constructor(x) {
      super(200)
      this.x = x;
    }
    getX() {
      console.log(this.x)
    }
  }

  class B extends A {
    constructor(y) {
      this.y = y;
    }
    getY() {
      console.log(this.y)
    }
  }

}