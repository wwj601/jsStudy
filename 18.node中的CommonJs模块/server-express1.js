let express =require('express'),
    app = express();//执行express，创建一个服务
    
app.use(express.static('./static'));
app.use((req,res)=>{
  res.status(404);
  res.end('Not Found!')
});


app.listen(8088,()=>{
  console.log('server is create success! listening on 8088 port~')
})