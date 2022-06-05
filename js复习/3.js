/* 
实现一个字符串匹配算法，从字符串S中，查找是否存在字符串T，若存在返回所在位置，不存在返回-1（不能基于indexof/includes等内置方法）
*/

~function(){
  /* 
    思路：循环字符串截取t.length个，然后和t比较，相等则跳出循环返回索引，找不到返回-1
    let S = this.length,
        T = str.length,
        res = -1;
    if(S<T) return -1;
    for(let i = 0;i<=S-T;i++){
      if(this.substr(i,T) == str){
        res = i;
        break;
      }
    }
    return res;
  */
 /* 
    正则：
 */
  function myIndexOf(str){
    let reg = new RegExp(str),
        res = reg.exec(this); 
    return res === null ? -1 : res.index;
  }
  String.prototype.myIndexOf = myIndexOf;
}()

let s = 'jintianchuqugaungleyiquan',
    t = 'yiA';

console.log(s.myIndexOf(t))

{
  let a = {},b = '123',c = 123;
  a[b]="b";
  a[c] = "c";
  console.log(a[b]) //'c'
}
{
  // typeof Symbol('123'):'symbol'
  // Symbol('123') 创建的是唯一值
  var a = {},b = Symbol('123'),c = Symbol('123');
  a[b]="b";
  a[c] = "c";
  console.log(a[b]) //'b'
}
{
  var a = {},b = {key:'123'},c = {key:'456'};
  a[b]="b";
  a[c] = "c";
  console.log(a[b]) //'c'
  // 1.对象的属性名不能是一个对象（遇到对象属性名，或默认转换为字符串）
  // arr.toString() =>'12,23'
  // var arr = [12,23]; obj[arr] = 'wwj'  obj=>{"12,23":''wwj}
  // 2.普通对象.toString()调取的是object.prototype上的方法（是用来检测数据类型的）
  // obj = {} obj.toString() =>'[object Object]'
}

/* 
在输入框中如何判断输入的是一个正确的网址
*/
{

  let str = 'http://www.baidu.com?lx=1&from=wx#video';
  let reg = /^(?:(http|https|ftp):\/\/)?((?:[\w-]+\.)+[a-z0-9]+)((?:\/[^/?#]*)+)?(\?[^#]+)?(#.+)?$/i;
  console.log(reg.exec(str));
  // URL格式
  // 1.协议：、、 http/https/ftp
  // 2.域名
  // www.xxx.com
  // xxx.cn
  // kbs.spports.qq.com
  // 3.请求路径: /stu/index.html /stu/
  // 4.问号传参: ?xxx=xxx
  // 5.哈希值: #xxx
}

/* 
编写一个正则,一个6~16位的字符串,必须同时包含有大小写字母和数字
*/
let reg = /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![a-z0-9]+$)[a-zA-Z0-9]{6,16}$/;


{
/* 
  实现一个$attr(name,value)遍历
  属性名为name
  值为value的元素集合
*/

/* function $attr(property,value){
  let elements = document.getElementsByTagName('*'),
      arr = [];

  elements = Array.from(elements);
  elements.forEach(item=>{
    let itemValue = item.getAttribute(property);
    if(property == 'class'){
      let reg = RegExp('\\b'+value+'\\b');
      reg.test(itemValue)?arr.push(item):null
      return;
    }
    if(itemValue === value){
      arr.push(item);  
    }
  })
  return arr;
} */


// let ary = $attr('id','AAA');

}

{
/* 
  英文字母汉字组成的字符串，用正则给英文单词前后加空格
*/
let reg = /\b([a-z]+)\b/ig;
let str = 'ni好liu月';
str = str.replace(reg,function(...arg){
  let [,$1] = arg;
  return ' '+$1+' '
}).trim()
console.log(str)
}

{
/* 
将多维数组降维成一维数组，并按升序排序
*/
let ary = [1,2,[3,4,5,6,[7,8,9,5,[9,10,11,4],[4,5,6]]]];
//ary = Array.from(new Set(ary.flat(Infinity))).sort((a,b)=>a-b);
//ary =ary.toString().split(','); //toString不管有多少级都会变成以逗号分割的字符串


// while(ary.some(item=>Array.isArray(item))){
//   ary = [].concat(...ary);
// }

//JSON.stringify(ary).replace(/(\[|\])/g).split(',').map(item=>Number(item));

// 使用递归自己实现
~function(){
  function myFlag(){
    let result = [];
    let fn = function(ary){
      for(var i = 0;i<ary.length;i++){
        var item = ary[i];
        if( Array.isArray(item)){
          fn(item);
          continue;
        }
        result.push(item);
      }
    }
    fn(this);
    return result;
  }
  Array.prototype.myFlag = myFlag;
}()
ary = ary.myFlag();
console.log(ary)
}

/* 
自己实现一个 _new方法 创建构造函数
*/
function Dog(name){
  this.name = name;
  console.log(this)
}
Dog.prototype.brak = function(){
  console.log('wangwang')
}
Dog.prototype.sayName = function(){
  console.log('my name is'+this.name)
}

// Object.create([AA对象]) 创建一个空对象，让空对象obj作为AA对象所属构造函数
// 的一个实例(obj.__proto__ = AA)

function _new(Fn,...arg){
  // let obj = {};
  // obj.__proto__ = Fn.prototype;
  let obj = Object.create(Fn.prototype);
  Fn.call(obj,...arg)
  return obj;
}

let sanmao = _new(Dog,'三毛');

sanmao.brak()
sanmao.sayName();
console.log(sanmao instanceof Dog)
