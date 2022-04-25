{
  console.log(Boolean(0));//false
  console.log(Boolean(""));//false
  console.log(Boolean(" "));//true
  console.log(Boolean(null));//false
  console.log(Boolean(undefined));//false
  console.log(Boolean([]));//true
  console.log(Boolean([12]));//true

  // !取反(先转换为布尔，然后取反)
  // !! 取反再取反，只相当于转换为布尔 <=> Boolean
  console.log(!1);//false
  console.log(!!1);//true

  // 如果条件只是一个值，不是==/===/!=/>= 等这些比较，是要把这个值
  // 先转换为布尔类型，再验证真假
  if(1){
    console.log('进来了')
  }
  if('3px'+3){
    // =>'3px3'
    console.log('呵呵')
  }
  if('3px'-3){
    // NaN - 3 =>NaN   false条件不成立
    console.log('嘿嘿')
  }
}
