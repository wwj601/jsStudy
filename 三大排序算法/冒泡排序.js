{
  /**
   * 冒泡排序的思想：
   *  让数组中的当前项和后一项进行比较，如果当前项比后一项大，则两项
   *  交换位置（让大的靠后）即可
   */
  let ary = [24,16,12,8,1,15];

  /**
   * 
   * @param {Array} ary:需要排序的数组
   * @return {ARRAY} 排序后的新数组 
   */
  function bubble(ary){
    let temp=null;
    // 外层循环控制的是循环几轮
    for(var i = 0;i<ary.length-1;i++){
      // i=0  比较四次
      // i=1  比较三次
      // i=2  比较二次
      // i=3  比较一次
      // 内层循环控制比较次数
      for(var j = 0;j<ary.length-1-i;j++){
        console.log(j)
        if(ary[j] > ary[j+1]){
          // temp = ary[j];
          // ary[j] = ary[j+1];
          // ary[j+1] = temp;
          [ary[j],ary[j+1]] = [ary[j+1],ary[j]];//es6 解构赋值交换位置
        }
      }
    }
    return ary
  }
  ary = bubble(ary)
  console.log(ary)


  /* 
  for(var i = 0;i<ary.length;i++){
    for(var j=i+1;j<ary.length;j++){
      let a = ary[i];
      if(ary[i]>ary[j]){
        ary[i] = ary[j];
        ary[j] = a;
      }
    }
  } 
  */

}