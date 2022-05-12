var b = 10;
(function b(){
  b = 20;
  console.log(b);//=> 还是函数
})()
console.log(b);//10


/* 
let fn = function AAA(){
  console.log(AAA);
}
AAA()//报错 AAA is not defined
1.本应匿名的函数如果设置了函数名，在外面无法使用函数名调用，但是函数里面是可以使用的
2.而且类似于创建常量一样，这个名字存储的值不能在被修改（非严格模式下不会报错，但是
没有任何的效果，严格模式下直接报错，我们把AAA可以理解为使用const 创建出来的）
fn()

*/

/* var b = 10;
(function b(){
  var b = 20;
  console.log(b);//=> 20 里面的b一定是私有的，不能是全局的（声明它或改为形参）
})()
console.log(b);//10 */


/* 
  ==进行比较的时候，如果左右两边数据类型不一样，则先转换为相同的数据类型然后再继续比较
  1. {}=={}  比较的是堆内存地址
  2.null == undefined =>true   null === ubdefined =>false
  3.NaN == NaN NaN和谁都不想等
  4.[12] == "12" 对象和字符串比较，是把对象toString()转换为字符串再进行比较
  5.剩余所有的情况再进行比较的时候，都是转换为数字（前提是数据类型不一样）
*/

{
  /* 
  // 对象和数字比较，先把对象toString变为字符串，然后再转换为数字比较
  var a =  {
    n:0,
    toString:function(){
      return ++this.n;
    }
  };
  a.toString();//此时调取的就不再是Object.prototype上的toString了，调取的是自己私有的
  */

  /* 
  利用shift删除第一项，返回的是删除的内容
  var a = [1,2,3]
  a.toString = a.shift;
  */

  /* 
    Object.defineProperty  

    Object.defineProperty(window,'a',{
      get:function(){
        // this:要操作的那个属性=>window.a     
        // this.value:就是要操作的那个属性值
        this.value ? this.value++ : this.value = 1;
        return this.value; 
      }
    })
  */
  if(a==1 && a==2 && a==3){
    console.log('ok')
  }
}

{
  /**
   *  ES6中新增加的一下方法
   * String.fromcharCode() <=> 'z'.charCodeAt()
   * Array.from() 
   * Array.isArray()
   * Object.create([OBJ])
   * Object.defineProperty
  */
/*  let obj = {};
 Object.defineProperty(obj,'name',{
   value:'wwj'
 })
 obj.name //'wwj' */

 let obj = {};
 var bValue;
 Object.defineProperty(obj,'name',{
    get:function(){
      return bValue
    },
    set:function(newValue){
      bValue = newValue
    },
    enumerable:true,
    configurable:true
  })
  obj.name="wwj";
  obj.name // 'wwj'

}

{
  /* 
    数组原型上的push方法实现原理：
    Array.prototype.push = function @@(val){
      this[this.length] = val;
      // =>this.lenght在原来的基础上加1
      return this.length;
    } 
  */

  let obj = {
    2:3,//=>
    3:4,
    length:2,
    push:Array.prototype.push
  }
  //@@(1)=> obj[obj.length] =val  =>obj[2] = 1  再让length加1 obj.length = 3
  obj.push(1);

  //@@(2)=> obj[obj.length] =val  =>obj[3] = 2  再让length加1 obj.length = 4
  obj.push(2);

  console.log(obj);//{2:1,3:2,length:4,push:Array.prototype.push}
}
{
  // 公司1-12月的数据{1:222,2:333,5:888},想要这样的格式[222,333,null,null,888,null,null,null,null,null,null,null]
  let obj = {
    1:222,
    2:333,
    5:888
  }
  // 1.给obj添加length属性，使用from转换为数组
  /* obj.length = 12
  let ary = Array.from(obj).map((item,index)=>{
    return obj[index+1] || null;
  });
   */
  

  /* ary = Array.from({length:12}).map((item,index)=>{
    return obj[index+1] || null;
  }) */

  let res = new Array(12).fill(null);
  Object.keys(obj).forEach(item=>{
    res[item-1] = obj[item] 
  })
  console.log(res)
}