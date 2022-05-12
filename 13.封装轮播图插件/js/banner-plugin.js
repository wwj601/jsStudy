/**
 * 插件组件封装的思想：
 * 1.基于面向对象的方式来处理
 *   =>调取依次插件相当于创建插件的一个实例
 *   =>这样私有的可以设置，公有的方法也可以设置
 * 2.我们要保证几个事情
 *   =>灵活且功能强大（适配更多的应用场景）
 *   =>容错性和可扩展性要强
 *   =>追求极致的性能和优秀的代码管理方式
 *   =>开源精神
 * */
~ function () {
  /**
   * Banner:渐隐渐现轮播图插件
   *  @params
   *    selector:想要实现轮播的节点选择器或者元素节点对象
   *    options[object]:轮播图配置参数
   * by Mr_wan on 2022/5/12
   */
  class Banner {
    constructor(selector, options = {}) {
      console.log(this)
      // =>参数初始化
      this.initialParams(options);
      if (!selector) throw new ReferenceError('The first selector parameter must be passed~~');
      if (typeof selector === 'string') {
        this.container = document.querySelector(selector)
      } else if (selector.nodeType) {
        this.container = selector;
      }
      this.wrapper = this.container.querySelector('.wrapper');
      this.slideList = Array.from(this.wrapper.querySelectorAll('.slide')) ;
      this.timer = null;
      this.activeIndex = this.initalSlide;
      this.count = this.slideList.length;
      // =>初始展示SLIDE
      this.slideList.forEach((item, index) => {
        if (index === this.initalSlide) {
          item.style.zIndex = 1;
          item.style.opacity = 1;
          return;
        }
        item.style.zIndex = 0;
        item.style.opacity = 0;
      })

      // =>自动开启轮播处理
      if (this.autoplay) {
        // let anonymous = this.autoMove.bind(this);
        let anonymous = () => this.autoMove();
        this.timer = setInterval(anonymous, this.autoplay);
        this.container.addEventListener('mouseenter', () => {
          clearInterval(this.timer);
          this.timer = null;
        })
        this.container.addEventListener('mouseleave', () => {
          this.timer = setInterval(anonymous, this.autoplay);
        })
      }
      // =>分页器处理
      this.pagination && this.pagination.el && this.handlePagination();
      // =>左右点击按钮
      this.navigation && this.handleButton()
      // =>生命周期初始化完成
      this.on && this.on.init && this.on.init.call(this,this)
    }
    //=========Banner.prototype=======
    /**
     * initialParams:初始化插件的参数
     */
    initialParams(options) {
      let _default = {
        initalSlide: 0,
        spped: 300,
        autoplay: 3000,
        pagination: { //=>设置分页器
          el: '.pagination',
          triggerEvent: 'click'
        },
        navigation: { // =>设置前进后退按钮
          nextEl: '.button-next',
          prevEl: '.button-prev',
          hide: true //默认时隐藏的，鼠标进入容器中才显示
        },
        on: { // =>设置生命周期函数（钩子函数）
          init: function (examp) {
            // =>this:当前创建的Banner类的实例
            // =>examp等同于this
          },
          // =>切换动画运动开始
          transitionStart: function (examp) {},
          // =>切换动画运动完成
          transitionEnd: function (examp) {}
        }
      };
      for (const key in options) {
        if (/^(pagination|navigation|on)$/i.test(key)) continue;
        if (options.hasOwnProperty(key)) {
          _default[key] = options[key];
        }
      }

      let pagination = options.pagination === null ? _default['pagination'] = null : options.pagination || {};
      for (const key in pagination) {
        if (pagination.hasOwnProperty(key)) {
          _default['pagination'][key] = pagination[key]
        }
      }
      let navigation = options.navigation === null ? _default['navigation'] = null : options.navigation || {};
      for (const key in navigation) {
        if (navigation.hasOwnProperty(key)) {
          _default['navigation'][key] = navigation[key]
        }
      }
      let _on = options.on === null ? _default['on'] = null : options.on || {};
      for (const key in _on) {
        if (_on.hasOwnProperty(key)) {
          _default['on'][key] = _on[key]
        }
      }

      // =>把处理好的信息挂载到类的实例上
      for (let key in _default) {
        if (_default.hasOwnProperty(key)) {
          this[key] = _default[key]
        }
      }

    }
    /* 实现轮播图切换 */
    change() {
      this.slideList.forEach((item, index) => {
        if (index === this.activeIndex) {
          item.style.transition = `opacity ${this.spped}ms`
          item.style.zIndex = 1;
          return;
        }
        item.style.zIndex = 0;
        item.style.transition = 'opacity 0ms'
      })
      // =>动画开始钩子函数
      this.on && this.on.transitionStart && this.on.transitionStart.call(this,this);
      // 开始动画
      let active = this.slideList[this.activeIndex];
      active.style.opacity = 1;
      let activeFn = ()=>{
        this.slideList.forEach((item, index) => {
          if (index !== this.activeIndex) {
            item.style.opacity = 0;
          }
        })
        // =>动画结束钩子函数
        this.on && this.on.transitionEnd && this.on.transitionEnd.call(this,this);
      }
      active.addEventListener('transitionend', activeFn())
      // 解决多次触发结束钩子函数
      active.removeEventListener('transitionend',activeFn);
      // =>分页器焦点对齐
      if (this.paginationList) {
        this.paginationList.forEach((item, index) => {
          if (index === this.activeIndex) {
            item.className = 'active';
            return;
          }
          item.className = '';
        })
      }
    }
    /* 自动轮播 */
    autoMove() {
      this.activeIndex++;
      this.activeIndex >= this.count ? this.activeIndex = 0 : null;
      this.change();
    }
    /* 分页器处理 */
    handlePagination() {
      this.paginationBox = this.container.querySelector(this.pagination.el);
      let str = ``;
      for (let i = 0; i < this.count; i++) {
        str += `<span class="${i=== this.activeIndex ? 'active' : ''} "></span>`
      }
      this.paginationBox.innerHTML = str;
      this.paginationList = Array.from(this.paginationBox.querySelectorAll('span'));
      // =>是否焦点触发切换
      if (this.pagination.triggerEvent) {
        this.paginationList.forEach((item, index) => {
          item.addEventListener(this.pagination.triggerEvent, Banner.throttle(() => {
            this.activeIndex = index;
            this.change();
          },500))
        })
      }
    }
    /* 前进后退按钮 */
    handleButton(){
      this.prevEl = this.container.querySelector(this.navigation.prevEl)
      this.prevEl.addEventListener('click',Banner.throttle(()=>{
        this.activeIndex--;
        this.activeIndex<=0 ? this.activeIndex = this.count-1:null;
        this.change();
      },500)) 
      this.nextEl = this.container.querySelector(this.navigation.nextEl)  
      this.nextEl.addEventListener('click',Banner.throttle(this.autoMove.bind(this),500))
      // =>按钮显示隐藏处理
      if(this.navigation.hide){
        this.prevEl.style.display = 'none';
        this.nextEl.style.display = 'none';
        this.container.addEventListener('mouseenter',()=>{
          this.prevEl.style.display = 'block';
          this.nextEl.style.display = 'block';
        })
        this.container.addEventListener('mouseleave',()=>{
          this.prevEl.style.display = 'none';
          this.nextEl.style.display = 'none';
        })
      }
    }
    /* ===设置私有属性方法=== */
     /**
    * debounce:节流，为了缩减执行的频率，达到了一定的时间间隔就会执行一次
    *  @params
    *    fnc:要执行的函数
    *    wait：时间间隔
    *  @return
    *    可被调用的函数
    * by Mr_wan on 2022/5/12
   */
    static throttle(fnc,wait){
     let result =null,
         timer = null,
         previous = 0;
     return function(...args){
       let now = new Date(),
           context = this;
       let remaining = wait - (now -previous);
       // remianing小于等于0，表示上次执行至此次已经经过了一个时间间隔
       if(remaining<=0){
         clearTimeout(timer);
         previous = now;
         timer = null;
         result = fnc.apply(context,args);
       }else if(!timer) {
         timer = setTimeout(() => {
           previous = new Date();
           timer = null;
           result = fnc.apply(context,args);
         }, remaining);
       }
       return result;
     }
   }
  }
  window.Banner = Banner;
}();