{
  let str = 'zhiqiran，erzhiqisuoyiran'
  str.length //字符串的长度
  str[0];
  str[str.length]
  for(let i =0;i<str.length;i++){
    let char = str[i]
    // console.log(char)
  }
}
{
  /* 
  charAt:根据索引获取指定位置的字符
  charCodeAt：获取指定字符的ASCII码值（Unicode编码值）
  @params
    n[number] 获取字符串指定的索引
  @return
    返回查找到的字符
    找不到返回的是空字符串不是undefined，或者对应的编码值
  */
  let str = 'zhiqiran，erzhiqisuoyiran';
  console.log(str.charAt(0));//'z'
  console.log(str.charAt(10000));//''
  console.log(str[10000]);//undefined

  console.log(str.charCodeAt(0));//122 =>ASCII码表中的十进制的编码值
  console.log(String.fromCharCode(122)) //=>'z' 把编码值转换成真实值
}
{
  /* 
    都是为了实现字符串的截取
    substr(n,m) ：从索引n开始截取m个字符，m不屑截取到末尾
    substring(n,m)：从索引n开始截取到索引m （不含m）
    slice(n,m)：从索引n开始截取到索引m （不含m）
  */
 let str = "zhiqiran，erzhiqisuoyiran";
 console.log(str.substr(3,7));//"qiran，e"
 console.log(str.substring(3,7));//"qira"
 console.log(str.slice(3,7));//"qira"

 console.log(str.substring(-7,-3));//"" 负数转化为0
 console.log(str.slice(-7,-3));//"uoyi" 负数索引 STR.LENGHTH+负索引

}
 {
   /* 
    indexOf(x,y):获取x第一次出现位置的索引，y是控制查找的起始位置索引 
    lastIndexOf(x):最后一个出现位置的索引 =》没找到返回-1
   */
  let str = "zhiqiran，erzhiqisuoyiran";
  console.log(str.indexOf('n'));//7
  console.log(str.lastIndexOf('n'));//23
  console.log(str.indexOf('@'));//-1

  console.log(str.indexOf('ran'));//5 验证整体第一次出现的位置
  // 返回的索引是满足条件的第一个字符所在的索引值

  //从索引8开始查找n第一次出现的位置
  console.log(str.indexOf('n',8)); //=>23

  str.includes('@')
 }
 {
  /* 
    字符串中字母大小写的转换
    toUpperCase：把所有字符都转大写
    toLowerCase：把所有字符都转小写
  */
  let str = "zhiqiran，erzhiqisuoyiran";
  str = str.toUpperCase();
  str = str.toLowerCase();
  console.log(str);

  // 实现首字母大写
  str = str.substr(0,1).toUpperCase() + str.substr(1).toLowerCase()
  console.log(str);//Zhiqiran，erzhiqisuoyiran
 }
 {
   /* 
    split([分隔符]):把字符串按照指定的分隔符拆分成数组（和数组中的
    join相对应）
    split支持传递正则表达式
   */
  let str = 'music|movie|eat|sport';
  let ary = str.split('|');//[ 'music', 'movie', 'eat', 'sport' ]
  str = ary.join(',');//'music,movie,eat,sport'
  console.log(str)
 }
 {
   /* 
    replace([老字符],[新字符])：实现字符串替换（经常伴随着正则使用）
   */
  let str = '好好@学习@天天@向上';
  //str = str.replace('@','-');//好好-学习@天天@向上 在不使用正则表达式的情况下，
  // 执行依次REPLACE只能替换一次字符
  str = str.replace(/@/g,'-');
  console.log(str);//好好-学习-天天-向上

 }
 {
   let addZero = val => val.length <2 ? '0'+val : val
   /* 
    时间排序字符串
   */
    let time = '2022-4-22 17:6:5'
    // 变为自己需要呈现的格式，例如：
    // "2022年04月22日 17点06分05秒"
    // "2022年04月22日"
    // "04/22 17:06"
    // 方案一： 全都使用replace替换
    // 方案二：获取到年月日小时分钟秒这几个值后，silice 最后想拼成什么就可以
    // 方案三： 使用split拆分成想要的格式 str.split(/(?: |-|:)/g)
    let ary = time.split(/(?: |-|:)/g);
    time = ary[0]+'年'+addZero(ary[1])+'月'+addZero(ary[2])+'日';
    console.log(time)
 }