/**
 * 快速排序的思想：
 *   找到数组的中间项，拿出来，并把它移除，循环剩下的每一项和中间项比较
 *  比它小的放到左边数组中，比它大的放到右边数组中，然后每一边继续重复的操作
 * 直到左边和右边的数组都小于等于一项了，把左边和中间项还有右边拼接成一个新数组返回
 */

/**
 * 
 * @param {Array} ary:需要排序的数组
 * @return {ARRAY} 排序后的新数组 
 */
function quick(ary){
  // 4.如果数组中小于等于一项了就结束递归
  if(ary.length<=1){
    return ary;
  }
  // 1.找到中间项索引，并把它删除
  let middleIndex = Math.floor(ary.length/2);
  let minddleValue = ary.splice(middleIndex,1)[0];
  // 2.准备左边和右边两个数组，拿出数组每一项和中间项比较，小的放左边数组
  // 大的放右边数组
  let leftAry = [],
      rightArt = [];
  for(var i = 0;i<ary.length;i++){
    console.log(i)
    let item = ary[i];
    item < minddleValue ? leftAry.push(item):rightArt.push(item)
  }
  // 3.递归把左边和右边的继续这样执行，然后把左边和中间项还有右边拼接在一起
  return quick(leftAry).concat(minddleValue,quick(rightArt))
}
 let ary = [24,16,12,8,1,15];
 ary = quick(ary);
 console.log(ary)