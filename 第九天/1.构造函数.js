function CreatePerson(name, age) {
  this.name = name;
  this.age = age;
}

// CreatePerson('张三',18);//=> this:window 普通函数执行

let person1 = new CreatePerson('李四', 19);


/* 
  new CreatePerson()执行和普通函数执行的联系：
  1.new这种执行方式叫做”构造函数执行模式“，此时的CreatePerson不仅仅是一个函数名，
  被称为”类“，而返回的结果（赋值给person1的）是一个对象，我们称之为实例，
  而函数体中出现的this都是这个实例

*/


/* 
  instanceof:用来检测某个实例是否属于这个类
    实例 instanceof 类   属于返回TEUE，不属于返回FALSE
  [局限性]
    1.instanceof 检测不了基本数据类型，要检测的实例必须是对象数据类型
*/
console.log(person1 instanceof CreatePerson) //=>true


let ary = [12, 23];
console.log(ary instanceof Array); //TRUE
console.log(ary instanceof Object); //TRUE

/* 
    基本数据类型再JS中的特殊性
    1.一定是自己所属类的实例
    2.但是不一定是对象数据类型的
 */

// 字面量创建方式（也是Number类的实例，也可以调取内置的共有方法） 
let n = 10;
console.log(typeof n); //=>'number'

// 构造函数创建模式(创建出来的实例是对象类型的)
let m = new Number(10);
console.log(typeof m); //=>'object'


console.log(1 instanceof Number); //FALSE


// =============================
{

  function Fn(n) {
    let m = 10;
    this.total = n + m;
    this.say = function(){
      console.log(this.total)
    }
  }
  let f1 = new Fn(10)
  let f2 = new Fn(20);
  let f3 = new Fn;

  console.log(f1.m);//undefined
  console.log(f2.n);//undefined
  console.log(f1.total);//20
  f2.say();//30
  console.log(f1 === f2);//false

}