/* 
  基于内置类的原型扩展方法
    在内置类原型上的方法，类所对应的实例可以直接调取使用，例如：实例.方法（）
    ary.push()；如果我们也把自己写的方法放到原型上，那么当前类的实例也可以
    直接这样调取使用了，很方便使用
  但是也有需要注意的地方
  1、自己扩展的方法，不能影响原有内置的方法（我们自己设置的方法最好加
  前缀：my）
  2.扩展方法中的THIS一般都是当前类的实例（也就是要操作的值）：实例.方法()
*/
// function unique(ary){
//   let obj = {}
//   for (let i = 0; i < ary.length; i++) {
//     let item = ary[i];
//     if(item in obj){
//       ary[i] = ary[ary.length-1]
//       ary.length--;
//       i--;
//       continue;
//     }
//     obj[item] = item;
//   }
//   obj = null;
//   return ary
// }
let ary = [10,1,2,15,10,4,2,4,]
// console.log(unique(ary))

/**
 * wanUnique:实现数组去重
 *   @params
 *   @return
 *      [Array]去重后的数组
 * by Mr_wan on 20220429 
 */
Array.prototype.wanUnique = function wanUnique(){
  let obj = {}
  for (let i = 0; i < this.length; i++) {
    let item = this[i];
    if(item in obj){
      this[i] = this[this.length-1]
      this.length--;
      i--;
      continue;
    }
    obj[item] = item;
  }
  obj = null;
  return this;
}

// console.log(ary.wanUnique())

// 链式写法：保证返回的值依然是当前类的实例 一般都会RETURN THIS
ary.wanUnique().sort((a,b)=>a-b).reverse()
console.log(ary)

function queryURLParams(url){
  // ...
}
// 每一个字符串都是String这个类的实例，subString方法在String.prototype
'https://www.baidu.com'.substring()


String.prototype.queryURLParams = function queryURLParams(){

} 
