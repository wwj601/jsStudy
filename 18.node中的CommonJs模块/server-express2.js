let express =require('express'),
    {readFile,writeFile} = require('./utils/promiseFS'),
    bodyParser = require('body-parser');

let app = express();//执行express，创建一个服务
app.use(express.static('./static'));


app.get('/list',(req,res)=>{
  let {lx} = req.query;
  readFile('./package.json').then(result=>{
    result = JSON.parse(result);
    result = lx==='dev' ? result['devDependencies'] :result['dependencies'];
    res.status(200);
    res.type('application/json');
    res.send(result);
  }).catch(err=>{
    res.status(500);
    res.type('application/json');
    res.send(err);
  })
})

// =>中间件：在创建完服务和处理数据（文件）请求之前，我们提前做一些事情（公共的事情）
// app.use((req,res,next)=>{}):使用中间件 next执行是让其继续执行下面该做的事情
/* app.use((req,res,next)=>{
  let chunk = '';
  req.on('data',chart=>{
    chunk+=chart;
  })
  req.on('end',()=>{
    let qs = require('qs');
    // qs.stringify qs.parse 实现JSON对象和URLENCODE格式的转化
    req.body(qs.parse(chunk))
  }) 
}) */
// 通过执行不同的方法，把客户端传递的内容转化为对象存储在req.body上
// bodyParser.urlencoded/json/raw...
app.use(bodyParser.urlencoded({extended:true}))

// post请求  /add 存储到本地的AA.json文件中，返回给客户端成功或失败
app.post('/add',(req,res)=>{
  /* let chunk = '';
  req.on('data',chart=>{
    chunk+=chart;
  })
  req.on('end',()=>{
    let qs = require('qs');
    // qs.stringify qs.parse 实现JSON对象和URLENCODE格式的转化
    console.log(qs.parse(chunk))
  }) */
  res.status(200);
  res.type('application/json');
  writeFile('./AA.json',req.body).then(()=>{
    res.send({
      code:0,
      codeText:'保存成功'
    })
  }).catch(err=>{
    res.send({
      code:1,
      codeText:'保存失败'
    })
  })

})

app.use((req,res)=>{
  res.status(404);
  res.end('Not Found!')
});
app.listen(8088,()=>{
  console.log('server is create success! listening on 8088 port~')
})