{
  let ary = [12, 23, 34, 45];
  typeof ary; //"object"

  /* ary={
    0:12,
    1:23,
    2:34,
    3:45,
    length:4
  } 
  数字作为索引(KEY 属性名)
  length代表长度
  ary.length 获取数组的长度
  ary.length-1 最后一项的索引
  
  */
} {
  // push :向数组末尾增加内容
  let ary = [12, 23, 34, 45]
  let res = ary.push(56, 'AA');
  console.log(res); //6 =>返回数组的长度
  ary[ary.length] = 'BB';

} {
  // unshift :向数组开始位置增加内容
  let ary = [12, 23, 34, 45]
  let res = ary.unshift(56, 'AA');
  console.log(res, ary); //6 =>返回数组的长度 改变原来的数组
} {
  // shift:删除数组中的第一项
  let ary = [12, 23, 34, 45]
  let res = ary.shift();
  console.log(res, ary); // 12 => 返回的删除的那一项
  //基于原生JS的DELETE,把数组当作普通的对象,确实可以删除掉某一项的
  // 内容,但是不会影响数组本身的结构特点(length长度不会跟着修改)
  // 但是项目中杜绝这样的删除使用
  delete ary[0];
} {
  // pop 删除数组中的最后一项
  let ary = [12, 23, 34, 45]
  let res = ary.pop();
  console.log(res, ary); //45 [12,23,34]

  // 基于原生Js让数组长度干掉一位,默认干掉的就是最后一项
  ary.length--; //[12,23]
} {
  /* splice :实现数组的增加/删除/修改
   @params 
   n,m 都是数字,从索引n开始删除m个元素(m不写删除到末尾) 
   @return (返回值)
    把删除的部分用新数组存储起来返回 
  */
  let ary = [10, 20, 30, 40, 50, 60, 70, 80, 90];

  let res = ary.splice(2, 4)
  console.log(res, ary);
  //  基于这种方法可以清空一个数组,把原始数组中的内容以新的数组存储起来
  // (有点雷士数组克隆:把原来的数组克隆一份给新数组)
  //  ary.splice(0);//清空数组
  //  console.log(ary);//[]
  ary.splice(0, 1); //删除第一项
  let str = ary.splice(ary.length - 1); //删除最后一项
  console.log(str)
} {
  /* splice :实现数组的增加/修改
   @params 
   n,m,x (修改),从索引n开始删除m个元素,用x占用删除的部分
   n,0,x （增加）从索引开始一个都不删，把x放到索引n的前面
   @return (返回值)
    把删除的部分用新数组存储起来返回 
  */
  let ary = [10, 20, 30, 40, 50];
  let res = ary.splice(1, 2, '好好学习', 'javascript')
  console.log(res, ary); //[ 20, 30 ] [ 10, '好好学习', 'javascript', 40, 50 ]
  ary.splice(1, 0, '哈哈哈')
  // 向数组末尾追加
  ary.splice(ary.length, 0, 'AAA')
  // 向数组开始追加
  ary.splice(0, 0, 'BBB')
  console.log(ary)
} {
  /*  slice :实现数组查询 
      @params 
        n,m 从索引n开始，找到索引为m的地方 不包含m这一项
      @return
        把找到的内容以一个新数组的形式返回
  */
  let ary = [10, 20, 30, 40, 50];
  let res = ary.slice(1, 3);
  console.log(res); //[20,30]
  res = ary.slice(1)
  console.log(res); //[20, 30, 40, 50]

  // 数组的克隆，参数0不写也可以
  ary.slice(0);
} {
  /* 
    concat：实现数组的拼接
    @params 
       多个任意类型值
    @return
      拼接后的新数组，（原来数组不变）
  */
  let ary1 = [10, 20, 30]
  let ary2 = [40, 50, 60]
  let res = ary1.concat('好好学习JS', ary2);
  console.log(res); //[ 10, 20, 30, '好好学习JS', 40, 50, 60 ]
}

{
  /* 
    把数组转换为字符串
    toString
    @params
    @return 
      返回转换后的字符串
  */
  let ary = [10, 20, 30]
  console.log(ary.toString()); //"10,20,30"
  console.log([].toString()); //"" 空字符串

  console.log(ary.join('+')); //"10+20+30"
  console.log(ary.join('')); //"102030"

  console.log(eval(ary.join('+'))); //60 eval 把字符串变为JS表达式
} {
  /* 
    indexOf / lastIndexOf :检测当前项再数组中第一次/最后一次出现的
    索引值，（IE6-8不兼容）
    @params
      要检索的这一项内容
    @return
      这一项出现的位置索引值（数字），如果数组中没有这一项，
      返回的结果是-1,原来的数组不变
  */
  let ary = [10, 20, 30, 10, 20, 30];
  console.log(ary.indexOf(20)); //1
  console.log(ary.lastIndexOf(20)); //4

  if (ary.indexOf('好好学习') > -1) {
    console.log('包含这一项内容')
  }

  // 使用ES6新提供的includes方法判断数组中是否存在某一项
  console.log(ary.includes(30)); //true
} {
  /* 
    reverse :把数组倒过来排列
    @params
    @return
      排列后的新数组 （原来数组改变）
  */
  let ary = [12, 15, 9, 28, 10, 22];
  ary.reverse()
  console.log(ary); //[ 22, 10, 28, 9, 15, 12 ]
} {
  /* 
    sort :把数组进行排序
    @params
      可以没有，也可以是个函数
    @return
      排序后的新数组 （原来数组改变）
  */
  let ary = [12, 15, 9, 28, 10, 22];
  // sort如果不传递参数，不能处理10以上数字排序的（默认按照每一项
  // 第一个字符来排，不是我们想要的效果）
  ary.sort()
  console.log(ary); //[ 10, 12, 15, 22, 28, 9 ]

  // 想要实现多位数正常排序，需要给sort传递一个函数，函数中返回
  // a-b实现升序，返回b-a实现降序
  // ary.sort(function(a,b){
  //   console.log(a,b);//a,b 相邻的两项 a是后一项，b是前一项
  // })
  // ary.sort((a, b) => a - b);//从小到大排序
  // console.log(ary);//[ 9, 10, 12, 15, 22, 28 ]
  // ary.sort((a, b) => b - a);//从大到小排序

}
{
  /* 
    forEach:遍历数组中的每一项内容
    @params
      回调函数
    @return
      原来数组不变
  */
  let ary = [12, 15, 9, 28, 10, 22];
  // 基于原生JS中的循环可以实现遍历循环
  for (let i = 0; i < ary.length; i++) {
    const item = ary[i];
    // i:当前循环这一项的索引
    // ary[i]:根据索引获取循环的那一项
  }
  ary.forEach((item,index) => {
    // 函数有多少项，函数就会被默认执行多少次
    // 每一次执行函数：item是数组中当前要操作的那一项，index是当前的索引
    console.log('内容：'+item+' 索引：'+index)
  });
}
