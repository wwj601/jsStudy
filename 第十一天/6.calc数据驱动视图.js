let calcModel = (function ($) {
  let $list = $('.list'),
    $info = $('.info'),
    $btns = null;

  // 准备数据模型（页面就是按照书库模型渲染出来的）
  let _DATA = [{
    id: 1,
    count: 0,
    price: 12.5,
    total: 0
  }, {
    id: 2,
    count: 0,
    price: 10.5,
    total: 0
  }, {
    id: 3,
    count: 0,
    price: 8.5,
    total: 0
  }, {
    id: 4,
    count: 0,
    price: 8,
    total: 0
  }, {
    id: 5,
    count: 0,
    price: 14.5,
    total: 0
  }]

  // 按照数据模型渲染视图
  function render() {
    let str = ``;
    $.each(_DATA, (index, {
      id,
      count,
      price,
      total
    }) => {
      str += `<li >
        <i group="${id}"></i>
        <em>${count}</em>
        <i group="${id}"></i>
        <span>
          单价：<strong>${price}</strong>
          小计：<strong>${total}</strong>
        </span>
      </li>
      `
      $list.html(str);
      // 渲染总计信息区视图
      let counts = 0,
        totals = 0,
        maxPrice = 0;
      _DATA.forEach(item => {
        counts += item.count;
        totals += item.total;
        // 购买才进入最高价格的计算
        if (item.count > 0) {
          maxPrice < item.price ? maxPrice = item.price : null;
        }
      })
      str = `<span>商品共合计：<em>${counts}</em>件</span>
      <span>共花费了：<em></em>${totals}</span>
      <span>其中最贵的商品单价是：<em>${maxPrice}</em>元</span>`;
      $info.html(str);
    })
    // 执行绑定事件
    handleClick();
  }

  // 点击按钮操作（不操作DOM，只改变_DATA的数据）
  function handleClick(){
    $btns = $list.find('i');
    $btns.click(function(){
      let $this = $(this),
          n = $this.index(),
          group = parseFloat($this.attr('group'));

      _DATA = _DATA.map((item)=>{
          if(item.id === group){
            if(n===0){
              item.count--;
              item.count <0 ? item.count = 0:null;
            }else{
            item.count++;
            item.count >10 ? item.count = 10:null;
            }
          item.total = item.price * item.count;
          }
          return item;
      })
      render();

    })
  }

  return {
    init: function () {
      render();
      
    }
  }
})(jQuery);

calcModel.init();