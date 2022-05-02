{
  let obj = {}
  // let fn = (context=window,...args) =>{
  //   // 箭头函数中没有arguments
  //   // console.log(arguments);
  //   //Uncaught ReferenceError: arguments is not defined
  //   console.log(args);
  // };
  // fn(obj,10,20,30)
}
{
  // window.name = "WINDOW"
  // let obj = {name:'OJBK'};
  // let fn = (n)=>{
  //   console.log(this.name)
  // }
  // fn(10);//window
}

{
  let obj = {
    name:'OBJ',
    fn:function(){
      // this:obj
      let f = ()=>{
        console.log(this)
      }
      // 箭头函数中的this是自己所处的执行环境中的this
      f();//这里的this就是obj 
      return f
    }
  }
  let f = obj.fn()

  f();//this=>obj
}
{
  /* 箭头函数的使用 */
  let obj = {
    // this:obj
    name:'OJBK',
    fn:function(){
      // 一秒后把obj的name该为'wwj'
      setTimeout(() => {
        // 由于箭头函数中没有this，所以向上级作用域查找this，上级
        // 作用域fn函数是通过obj.fn执行的。那么fn作用域的this就是obj
        this.name = 'wwj';//this ->obj
      }, 1000);
    }
  }
  obj.fn()
}
{
  /* 数组的解构赋值 */
  let ary = [10,20,30,40,50];
  /* 
    ...x拓展运算符：把剩下的内容存储到x中（x是个数组），
    但是它只能出现在最后
  */
  // let [n,m,...x] = ary;
  // console.log(n,m,x);//=>10,20,[30,40,50]
  let [n,,m] = ary;
  console.log(n,m);//=>10 30
}

{
  // 多维数组解构赋值
  let ary = [10,[20,30,[40,50]],60];
  let [n,[,,[,m]]] = ary;
  console.log(n,m);//10 50
}

{
  // 对象的解构赋值
  let obj={
    name:'wwj',
    age:28,
    sex:'BOY',
    friends:['张三','李四','王五','赵六']
  }
  // 创建的变量名要和对象的属性名一致（默认），可以通过、
  // 属性名：变量名，修改默认变量名
  let {name,age:nianling,friends:[,n]} = obj;
  console.log(name,nianling,n);//=>wwj 28 李四

  // 如果获取的属性为undefined，可以设置默认值
  let {height='180CM'} = obj;
  console.log(height);//180CM
}

{
  class Fn{
    constructor(n,m){
      this.x = n;
      this.y = m;
    }
    // 直接写方法就是加在原型prototype上的 === Fn.prototype.getX
    getX(){
      console.log(this.x)
    }
    ss = 100; //给实例设置私有属性

    // 前面设置static的：把当前Fn当作普通对象设置的键值对
    static query(){
      console.log('我是私有方法')
    };
    static b = 12;
  }
  let f = new Fn(10,20)
  f.getX();//调用原型上的公共方法
  //calss创建的类只能new执行，不能当作普通函数执行
  //Fn();//TypeError: Class constructor Fn cannot be invoked without 'new'
  Fn.query();//但是可以调用私有的方法
  console.log(f.ss);//获取实例上的私有属性
  console.log(Fn.b);//获取私有的属性
}
{
  function sum(){
    // ARGUMENTS:内置的实参集合（箭头函数中没有），不是数组而是类数组，不能直接使用数组的方法 arguments.__proto__ === Object.prototype
    // eval:把字符串转换为JS表达式执行
    return eval([].join.call(arguments,'+'));
  }
  let total = sum(10,20,30,40)
  console.log(total)
}