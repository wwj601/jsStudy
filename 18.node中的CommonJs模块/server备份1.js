let http = require('http');
let url = require('url');
let path = require('path')
let mime = require('mime');
const fs = require('fs');

let suffixREG = /\.([0-9a-z]+)$/i,
    encodeREG = /^(png|jpg|gif|jpeg|webp|bmp|ico|svg|mpa|mp4|wma|wav|ogg|m3u8)$/i;

function suffixHandle(pathname){
  let suffix = suffixREG.test(pathname) ?suffixREG.exec(pathname)[1] : '',
      encoding = 'utf-8';
      encodeREG.test(suffix) ? encoding = null: null;
  return encoding;
}

let server = http.createServer((req,res)=>{
  let {url:reqUrl} = req;  //url:存储的时请求信息中的资源文件的路径和问号传参的信息
  let {pathname} = url.parse(reqUrl,true)
  pathname = path.resolve('./static'+pathname);
  let suffix = suffixREG.test(pathname) ? suffixREG.exec(pathname)[1]:null;
  fs.readFile(pathname,suffixHandle(pathname),(err,result)=>{
    // 处理静态资源文件
    if(suffix!==null){
      if(err!==null){
        res.writeHead(404,{
          'content-type':'application/json;charest=utf8'
        });
        res.end(JSON.stringify(err))
        return;
      }
      let mimeType = mime.getType(suffix);

      charset = !encodeREG.test(suffix) ?  'charset=utf8' : '';
      res.writeHead(200,{
        'content-type':`${mimeType};${charset}`
      });
      res.end(result);
      return;
    }
  })
  // 处理api接口
  
});
server.listen(8086,()=>{

  console.log('server is create success! listening on 8086 port~')
});