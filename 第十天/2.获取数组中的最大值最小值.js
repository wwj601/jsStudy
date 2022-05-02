{
  /* 获取数组中的最大值最小值 */
  let ary = [12,24,13,8,35,15];

  /* 方案一：sort排序，排序后的数组中的第一项和最后一项就是需要的 */
  ary.sort((a,b)=>a-b)
  let min = ary[0];
  let max = ary[ary.length-1];
  console.log(min ,max)
}
{
  /* 方案二：Math.max、min 参数是一项项传递进来的*/
  let ary = [12,24,13,8,35,15];
  // 1.基于es6的...展开运算符
  // let min = Math.min(...ary);
  // let max = Math.max(...ary);

  // 2.利用apply的参数可以传递数组实现
  let min = Math.min.apply(Math,ary)
  let max = Math.max.apply(Math,ary)
  console.log(min ,max)
}
{
  /* 方案三：假设法 (假设数组第一个是最大的,让数组中的每一项分别和当前
    假设的值比较，如果比假设的值大，则把最大的值设为新的假设值，继续向后
    比较，最后得到的就是最大的)*/
  let ary = [12,24,13,8,35,15];
  let min = ary[0];
  let max = ary[0];
  // for(let i=1;i<ary.length;i++){
  //   min > ary[i] ? min = ary[i] :null;
  //   max < ary[i] ? max = ary[i] :null;
  // }
  ary.slice(1).forEach(item=>{
    min > item ? min = item :null;
    max < item ? max = item :null;
  })
  console.log(min ,max)
}