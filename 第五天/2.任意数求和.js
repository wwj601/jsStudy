{
  
  // 任意数求和
  // 1.传递实参的个数不定
  // 2.传递的值是否为有效数字不定
  // =>把传递的有效数字进行相加求和

  // arguments :函数内置的实参集合
    // 1.类数组集合,集合中存储着所有函数执行时,传递的实参信息
    // 2.不论是否设置形参,arguments都存在
    // 3.无论是否传递实参,arguments也都存在
    // arguments.callee:存储的是当前函数本身(一般不用的,JS严格模式下禁止使用)

  function sum(){
    console.log(arguments)
    let total = null;
    for (let i = 0; i < arguments.length; i++) {
      const item = Number(arguments[i]);
      if(isNaN(item)){
        continue;
      }
      total+=item;
    }
    return total;
  }
  let total = sum(10,20,30,'AA');
  console.log(total) ;
}