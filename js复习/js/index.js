let flowModule = (function(){
  let $container = $('.container'),
      $columns = $container.children('.column'),
      _DATA = null;
  let queryData = function(){
    // ajax数据请求
  }
  // 实现页面数据绑定
  let bindHTML = function(){
    // 每三个为一组循环
    for(let i = 0;i<_DATA.length;i+=3){
      // 按照图片盒子的高度排序（升序）
      $columns.sort((A,B)=>{
        return $(A).outerHeight()-$(B).outerHeight()
      }).each((index,column)=>{
        let item = _DATA[i+index];
        if(!item) return false;
        $(column).append(`
            <a class="item">
              <div class="imgBox" style="height:${item.height}+'px'}">
                <img src="" true-img="${item.pic}">
              </div>
              <p>${item.title}</p>
            </a>
        `)
      })
    }
    // 实现图片延迟加载
    lazyImgs()
  }
  // 图片延迟加载
  let lazyImgs = function(){
    let $imgBoxs = $('.container .imgBox'),
        $B = $(window).outerHeight() + $(window).scrollTop();
    
  }
  return {
    init:function(){
      queryData()
      bindHTML()

    }
  }
})()

