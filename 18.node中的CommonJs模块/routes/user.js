let express = require('express'),
    route = express.Router();
// get请求： /user/login
route.get('/login',(req,res)=>{
  // 处理具体的请求信息
})

module.exports = route;