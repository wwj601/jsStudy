{
  /* 
    给定两个数组，写一个方法来计算他们的交集   交差并补？
  */
 let num1 = [1,2,2,1];
 let num2 = [2,2,3];


//  num1和num2的交集[2,2]
//  newAry = num1.filter(item=>num2.includes(item))
 
 // num1和num2的差集[1,1]
//  newAry = num1.filter(item=>!num2.includes(item))

//  num1和num2的并集[ 1, 2, 2, 1 ]
// newAry = num1.concat(num2.filter(item=>!num1.includes(item) ))

// num1和num2的补集
newAry = num1.filter(item=>!num2.includes(item)).concat(num2.filter(item=>!num1.includes(item)))

console.log(newAry)

}
{
  /* 
    旋转数组 给定一个数组，将数组中的元素向有移动k个位置，其中k是非负数
    输入：[1,2,3,4,5,6,7] k=3     length=7   4
    输出:[5,6,7,1,2,3,4]
  */
 let ary = [1,2,3,4,5,6,7],
      k = 3;
  let newAry = []
  // 1.循环数组依次把每一项向后移k位，移动的位置大于数组的长度，索引要减去数组的长度
  /* for(var i= 0;i<ary.length;i++){
    let n = i+k;
    if(n >= ary.length){
      n -=ary.length
    }
    newAry[n] = ary[i]
  } */
  /* ary.forEach((item,index)=>{
    n = index + k >= ary.length ?index + k -ary.length:index + k ;
    newAry[n] = item;
  }) */

  // 2.等于几就把后面几项移到最前面
  // ary.splice(0,0,...ary.splice(-k));
  // [...ary.splice(-k),...this];

  // 3.循环k次每次把数组最后一项放到第一个
  new Array(k).fill(null).forEach(()=>ary.unshift(ary.pop()))
  console.log(ary)
}
{
  /* 
    实现一个add函数，满足以下功能
      柯里化思想：
        预先处理的思想（利用闭包的保存机制，把变量等信息保存下来，供下面的作用域使用）
  */
 /**
  * 
  * @param {Function} fn 处理的函数
  * @param {Number} length 需要处理的数字长度
  * @returns 返回执行后的结果
  */
  function currying(fn,length=fn.length){
    return function(...args){
      if(args.length>=length){
        return fn(...args)
      }
      return currying(fn.bind(null,...args),length-args.length)
    }
  }
  let add = currying((...args)=>{
    return eval(args.join('+'))
  },3)
  // console.log(add(1));//1
  // console.log(add(1)(2));//3
  console.log(add(1)(2)(3));//6
  console.log(add(1)(2,3));//6
  console.log(add(1,2)(3));//6
  console.log(add(1,2,3));//6
}