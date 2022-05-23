let express = require('express'),
    fs = require('./utils/promiseFS'),
    bodyParser = require('body-parser');

let app = express(),
    port = 9999;
    
app.listen(port,()=>{
  console.log(`create server success! port:${port}~~`)
})

// 数据接口API的请求处理
app.use(bodyParser.urlencoded({extended:true}))

// 构建express路由
// 请求的api地址符合/user的，都进入到指定的路由
app.use('/user',require('./routes/user'));

// 静态资源文件的请求处理
app.use(express.static('./static'));
app.use((req,res,next)=>{
  res.status(404);
  res.send(`您当前请求的资源文件${req.path}不存在`);
})

