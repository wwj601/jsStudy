{
  // 数组去重1  新建一个数组，依次判断，把不重复的放到新数组
  let ary = [1,2,3,1,2,3,1,2,3];

  let newAry = [];
  for (let i = 0; i < ary.length; i++) {
    const item = ary[i];
    if(newAry.includes(item)){
      // 新数组中存在这一项，继续下一轮循环
      continue;
    }
    newAry.push(item)
  }
  console.log(newAry);
}
{
  /* 方案二：先分别拿出数组中的每一项，用这一项和它后面的每项依次进行比较，
  如果遇到和当前项相等的，在原数组中使用splice把这一项移除掉 */
  let ary = [1,2,3,1,2,1,2,3,2,1,2,3];
  for(var i=0;i<ary.length;i++){
    for(var j=i+1;j<ary.length;j++){
      if(ary[i] === ary[j]){
        ary.splice(j,1);
        j--;//解决数组塌陷问题
      }
    }
  }
  console.log(ary)
}
// 基于splice删除 性能不好，当前项被删后，后面的每一项索引都要向前提一位，
// 如果后面内容过多，一定影响性能；还会造成数组塌陷问题
{
  // 方法三：利用对象不能有重复的属性名去重
  let ary = [1,2,3,1,2,1,2,3,2,1,2,3];
  var obj = {}
  for(var i=0;i<ary.length;i++){
    var item = ary[i];
    if(item in obj){
      ary.splice(i,1);
      i--;
      continue;
    }
    obj[item] = item;
  }
  obj = null;
  console.log(ary)
}
{
  // 利用对象检测重复项 如果当前数组项存在，把数组最后一项赋值给当前项
  // 索引不加1，删除数组最后一项，循环继续；
  let ary = [1,2,3,1,2,1,2,3,2,1,2,3];
  var obj = {}
  for(var i=0;i<ary.length;i++){
    var item = ary[i];
    if(item in obj){
      ary[i] = ary[ary.length-1];
      ary.length--;
      i--;
      continue;
    }
    obj[item] = item;
  }
  obj=null;
  console.log(ary)
}
{
  /**
   * 
   * @param {ary} Array 要去重的数组
   * @return Array 去重后的数组 
   */
  function unique(ary){
    let obj = {};
    for(let i=0;i<ary.length;i++){
      let item = ary[i];
      if(item in obj){
        ary[i] = ary[ary.length-1];
        ary.length--;
        i--;
        continue;
      }
      obj[item] = item;
    }
    obj = null;
    return ary;
  }
  let ary = [12,23,12,15,35,25,16,15]
  ary = unique(ary);
  console.log(ary);//[ 12, 23, 15, 16, 35, 25 ]
}
{
  // es6 Set数组去重
  let ary = [12,23,12,15,35,25,16,15];
  ary = [...new Set(ary)]
  console.log(ary)
}