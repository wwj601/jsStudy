// 基于typeof检测出来的结果
// 1、首先是一个字符串
// 2、字符串中包含对应的类型
// 局限性
// 1.typeof null => 'object' 但是null并不是对象
// 2.基于typeof无法细分出当前值是普通对象还是数组对象等，因为
// 只要是对象数据类型,返回的结果都是"object"
console.log(typeof 1)//'number'
let a = NaN
console.log(typeof a)//'number'

console.log(typeof '12')//'string'
console.log(typeof true)//'boolean'
console.log(typeof null)//'object'
console.log(typeof undefined)//'undefined'
console.log(typeof {})//'object'
console.log(typeof [])//'object'
console.log(typeof /\d+/)//'object'
console.log(typeof function (){})//'function'

// 因为typeof检测的结果都是字符串,所以只要两个及以上同时检测,结果是"string"
console.log(typeof typeof typeof [])//'string'
