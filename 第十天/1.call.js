{
    // name = "WINDOW";
    // let obj = {name:'OBJ'};
    // let fn = function (){
    //   console.log(this.name)
    // }
    // //fn();//this:window =>"WINDOW"
    // // obj.fn();//TypeError: obj.fn is not a function
    // fn.call(obj);//this:obj =>"OBJ"
}

{
  ~function(){
    /**
     * call:改变函数中的THIS指向
     *  @params:
     *    context 可以不传递，传递必须是引用类型值（因为后面要给它加$fn属性）
     *  @return
     *    返回函数执行后的结果
     */
    function call(context){
      context = context || window;
      let args = [],
          result;
      for(let i = 1;i<arguments.length;i++){
        args.push(arguments[i]);
      }
      context.$fn =this;
      result = context.$fn(...args);
      delete context.$fn;
      return result;
      
    }
    /* 扩展到内置类的原型上 */
    Function.prototype.call = call;
  }()


  let obj = {name:'OJBK'};
  function fn1(n,m){
    console.log(this)
    return n + m
  }
  let total = fn1.call(obj,10,20);

  console.log(total)
}

{
  // 阿里面试题
  // function fn1(){console.log(1)}
  // function fn2(){console.log(2)}
  // fn1.call(fn2) ;//1
  // fn1.call.call(fn2);//2
  // Function.prototype.call(fn1);//=>Function.prototype() 没有输出
  // Function.prototype.call.call(fn1);//1
}
{

  ~function(){
    /**
     * apply:改变函数中的THIS指向
     *  @params:
     *    传递必须是引用类型值（因为后面要给它加$fn属性）
     *  @return
     *    返回函数执行后的结果
     */
    function apply(){
      context = arguments[0] || window
      let args = arguments[1],
          result;
      context.$fn =this;
      result = context.$fn(...args);
      delete context.$fn;
      return result;
    }
    /* 扩展到内置类的原型上 */
    Function.prototype.apply = apply;
  }()

  let obj = {name:'OJBK'};
  function fn1(n,m){
    console.log(this)
    return n + m
  }
  let total = fn1.apply(obj,[20,50]);
  console.log(total)
}