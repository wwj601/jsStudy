{
  console.log(typeof Math);//=>"object"
  /* 
    Math={
      PI:3.141592653589793,
      abs:function([native code]){},
      ceil:function([native code]){},
      ...
    }
  */
 console.log(Math.abs(-2));//2
 console.log(Math.abs(-12.5));//12.5
 console.log(Math.abs('-12.5'));//12.5
 console.log(Math.abs('-12.5px'));//NaN
 Math.PI;

 console.log(Math.ceil(12.3))//13
 console.log(Math.ceil(12.8))//13
 console.log(Math.ceil(-12.1))//-12
 console.log(Math.ceil(-12.9))//-12
 
 console.log(Math.floor(12.6))//12
 console.log(Math.floor(12.1))//12
 console.log(Math.floor(-12.1))//-13

 console.log(Math.round(12.4))//12
 console.log(Math.round(12.5))//13  正数中.5属于入
 console.log(Math.round(-12.5))//-12 负数中.5属于舍
 console.log(Math.round(-12.8))//-13

 console.log(Math.max(12,5,7,27,89,56));//89
 console.log(Math.min(12,5,7,27,89,56));//5
 console.log(Math.min([12,5,7,27,89,56]));//NaN

 console.log(Math.sqrt(18));//4.242640687119285
 console.log(Math.pow(2,10));//1024

 console.log(Math.random())

//  1-10之间的随机整数
    var num = Math.round(Math.random() * (10-1) +1 ) 
    console.log(num)
}