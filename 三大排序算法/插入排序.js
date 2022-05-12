/**
 * 插入排序的思想：
 *    创建一个新数组，把目标数组的第一项放到新数组中，然后循环目标数组每一项
 *  和新数组的每一项从后向前进行比较，如果目标项大于新数组的那一项，则放到那一项
 * 后面，不然就继续往前找，一直找到新数组的第一项，放到第一项，新数组就是我们想要
 * 得到的数组
 */

/**
 * 
 * @param {Array} ary:需要排序的数组
 * @return {ARRAY} 排序后的新数组 
 */
function insert(ary){
  // 1.先把数组中的第一项放进一个新数组里
  let handle = [];
  handle.push(ary[0]);
  // 2.从数组里第二项依次把每一项取出来
  for(var i=1;i<ary.length;i++){
    let A = ary[i];
    // 拿到每一项和handle里比较（从后向前比）
    for(var j =handle.length-1;j>=0;j--){
      let B = handle[j];
      // 如果当前项比新数组的那一项大，就放到新数组那一项后面
      if(A>B){
        handle.splice(j+1,0,A);
        break;
      }
      // 已经比到第一项了，把当前项放到新数组最前面
      if(j==0){
        handle.unshift(A)
        break;
      }
    }
  }
  return handle;
}
 let ary = [24,16,12,8,1,15];
 ary = insert(ary);
 console.log(ary)