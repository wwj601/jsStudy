let fs = require('fs')

/* // let result = fs.readdirSync('./')
// console.log(result) ['A.js','B.js','C.js','fs1.js']

fs.readdir('./',(err,result)=>{
  // err存储读取失败后的错误信息
  // result存储读取成功后的结果 err是null
  console.log(err,result)
}) */

/* // fs.readFileSync([path],[encoding])
let result = fs.readFileSync('./A.js','utf-8');
console.log(result)

fs.readFile('./A.js','utf-8',(error,result)=>{

})

// 向某个文件写入内容（如果文件不存在，它会默认创建一个文件再写入，而且）
// fs.writeFileSync([path],[string,buffer],[endcoding])
fs.writeFileSync('./AA.txt','Hello world','utf-8') */
// let path = require('path')
// let {readFile} = require('./utils/promiseFS')
// console.log(path.resolve())
// readFile('./AA.txt').then(res=>{
//   console.log(res)
// })

fs.readFile('./static/img/banner1.jpg',null,(error,result)=>{
  console.log(error)
  console.log(result)
})