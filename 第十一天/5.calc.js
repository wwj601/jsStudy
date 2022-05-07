let calcModel = (function($){
  let $btns = $('.list li'),
      $counts = $('.list em'),
      $strongs= $('list strong'),
      $ems = $('.info em');

  // =>实现加号减号的点击事件
  function handleClick(){
    $btns.click(function(){
      let $this = $(this),
          n = $this.index();
      // =>根据点击按钮,获取当前行中:存储数字/单价/总价这几个元素
      let $par = $this.parent(),
          $count = $par.children('em'),
          $price = $par.find('strong').eq(0),//=>eq获取的是Jq对象,get获取的是JS对象
          $total = $par.find('strong').eq(1);
      
      // n=>0 减号 n=>2 加号
      let $num =parsetFloat($count.html())
      if(n===0){
        $num --;
        $num = $num < 0 ? 0 : $num;
        
      }else{
        $num ++;
        $num = $num > 10 ? 10 : $num;
      }
      $count.html($num);
      // =>获取单价计算总价
      $total.html(parseFloat( $price.html())* $num +'元');
      // =>计算总信息
      computed();
    })
  }

  // =>计算总信息
  function computed(){
    let allcount = 0,
        allMoney = 0,
        allPrice = [];
    // 总购买数
    $counts.each((index,item)=>{
      allcount += parseFloat($(item).html());
    })
    $ems.eq(0).html(allcount);
    // 总价格
    $strongs.each((index,item)=>{
      let itemVal = parseFloat($(item).html())
      if(index % 2 === 1){
        allMoney+= itemVal;
      }else{
        // 只有购买了才进入比较单价的序列
        $(item).next('strong').text() ==0 ? null : allPrice.push(itemVal)
      }
    })
    $ems.eq(1).html(allMoney);
    $ems.eq(2).html(Math.max(...allPrice));
  }

  return {
    init:function(){
      handleClick();
    }
  }
})(jQuery);

calcModel.init();