/* 
编写代码实现图片懒加载
  1.前端性能优化的重要方案,通过图片或者数据的延迟加载,可以加快页面渲染的速度,让第一次打开页面的速度变快
  只要滑动到某个区域,我们才加载真实的图片,这样也可以节省加载的流量
  处理方案:把所有的需要延迟加载的图片用一个盒子包起来,设置宽高和默认的占位图
  开始让所有的img的src为空,把真实的图片地址放到img的自定义属性上,让img隐藏
  等到所有的其他资源都加载完了,我们在开始加载图片
  对于很多图片,需要当页面滚动的时候,当前图片区域显示出来后再加载真实图片
*/

/* let $imgBox = $('.imgBox'),
    $img = $imgBox.children('img'),
    $window = $(window);

  $window.on('load scroll',function(){
    if($img.attr('isLoad') === 'true') {
      return;
    }
    let $A = $imgBox.outerHeight() + $imgBox.offset().top,
        $B = $window.outerHeight() + $window.scrollTop();
    console.log($A,$B)
    if($A<=$B){
      console.log(123)
      $img.attr('src',$img.attr('data-img'))
      $img.on('load',function(){
        // $img.css('display','block')
        $img.stop().fadeIn()
      })
      $img.attr('isLoad',true)
    }
  }) */

let str = ``,
    $container = $('.container'),
    $window = $(window);;
new Array(20).fill(null).forEach(item=>{
  str+=`<div class="imgBox">
          <img src="" data-img="http:www.zhufengpeixun.cn/main/img/banner10.png">
        </div>`
})
$container.html(str);
$imgBoxs = $container.children('.imgBox');
$window.on('load scroll',function(){
  let $B = $window.outerHeight() + $window.scrollTop();
  $imgBoxs.each((index,item)=>{
    let $item = $(item),
        $itemA = $item.outerHeight()/2 + $item.offset().top;
        isLoad = $item.attr('isLoad');
    if($itemA<=$B && isLoad !== 'true'){
      console.log(1)
      let $img = $item.children('img') ;
      $img.attr('src',$img.attr('data-img'));
      $img.on('load',()=>$img.stop().fadeIn());
      $item.attr('isLoad',true)
    }
  })
})