let http = require('http');
let url = require('url');

let server = http.createServer((req,res)=>{
  // 当客户端向当前服务发送请求的时候，会触发此回调函数（请求N次也会触发
  // N次），而且每一次都能获取本次请求的相关信息
  // req：request 存储了客户端的请求信息
  // res:response 提供了对应的属性和方法，可以让服务器返回给客户端信息
  res.end('Hello World~~')
});
server.listen(8086,()=>{
  // 当服务创建成功，并且端口号已经完成，触发此回调函数执行
  console.log('server is create success! listening on 8086 port~')
});