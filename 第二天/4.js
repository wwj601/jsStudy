{
  let person = {
    name:'wwj',
    age:28,
    height:'185CM',
    weight:'80KG',
    1:100
  }
  // 设置属性名属性值:
  person.GF = '园园';
  console.log(person['GF']);//园园

  // 获取属性名对应的属性值
  // =>对象.属性名 属性名不能是数字
  // =>对象[属性名] 属性名是数字或者字符串格式的
  // =>如果获取的属性名不存在,默认的属性值是undefined
  console.log(person.name);//wwj
  console.log(person['age']);//28
  console.log(person[1]);//100
  console.log(person.sex);//undefined

  // 删除属性
  // =>真删除:把属性彻底删除
  delete person[1];
  // =>假删除:属性还在,值为空
  person.weight = null;
  console.log(person);
}

{
  // 数组 是特殊对象
  // 1. 我们中括号中设置的是属性值,他的属性名是默认生成的数字,从零
  // 开始逐步递增,而且这个数字代表每一项的位置,我们把其成为"索引"
  // =>从零开始,连续递增,代表每一项位置的数字属性名
  // 2.天生默认有一个属性名 length,存储的是数组的长度
  let ary = [12,'哈哈',true,13];
  console.log(ary)
  console.log(ary.length);
  console.log(ary['length']);
  console.log(ary[1]);//'哈哈'
  // 第一项索引是0 最后一项索引 ary.length-1

  // 向数组末尾追加内容
  ary[ary.length] = 100;
  console.log(ary);
}