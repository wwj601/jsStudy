/**
 *  简易的拖拽插件
 *    new Drag([selectot],[options]);
 *  select：按住谁来实现拖拽  
 *  options[Object]
 *    element:拖拽中要移动的元素（默认值：当前按住的元素）
 *    boundary：是否进行边界校验（默认值：true，不能超过要移动的元素所在
 * 范围，需要开发者保证当前移动的元素是相当于它所在容器定位的）
 *    生命周期函数（钩子函数）
 *    dragstart：拖拽开始
 *    dragmove：拖拽中
 *    dragend：拖拽结束
 * */
~ function () {
  class Drag {
    constructor(selector, options) {
      this.initParams(selector, options);
      this.DOWN = this.down.bind(this)
      this._selector.addEventListener('mousedown', this.DOWN)
    }
    // =>参数初始化(尽可能保证方法中的this都是当前实例)
    initParams(selector, options = {}) {
      this._selector = document.querySelector(selector);
      let _default = {
        element: this._selector,
        boundary: true,
        dragstart: null,
        dragmove: null,
        dragend: null,
      }
      Object.assign(_default, options);
      Drag.each(_default, (value, key) => {
        this['_' + key] = value;
      });
      if (typeof this._element === 'string') {
        this._element = document.querySelector(this._element)
      }
    }
    // =>实现拖拽的效果
    down(ev) {
      let {
        _element
      } = this;
      this.startX = ev.pageX;
      this.startY = ev.pageY;
      this.startL = Drag.queryCss(_element, 'left');
      this.startT = Drag.queryCss(_element, 'top');
      this.MOVE = this.move.bind(this);
      this.UP = this.up.bind(this);
      document.addEventListener('mousemove',this.MOVE);
      document.addEventListener('mouseup',this.UP);
      // =>钩子函数处理
      this._dragstart && this._dragstart(this,ev);
    }
    move(ev) {
      let {
        _element,
        _boundary,
        startL,
        startT,
        startX,
        startY
      } = this;
      let curL = ev.pageX - startX + startL,
        curT = ev.pageY - startY + startT;
      if (_boundary) {
        let parent = _element.offsetParent,
          minL = 0,
          maxL = parent.offsetWidth - _element.offsetWidth,
          minT = 0,
          maxT = parent.offsetHeight - _element.offsetHeight;
        curL = curL < minL ? minL : (curL > maxL ? maxL : curL);
        curT = curT < minT ? minT : (curT > maxT ? maxT : curT);
      }
      this.curL = curL;
      this.curT = curT;
      _element.style.left = curL+'px';
      _element.style.top = curT+'px';

      // 钩子函数处理
      this._dragmove && this._dragmove(this,ev);
    }
    up(ev) {
      document.removeEventListener('mousemove',this.MOVE);
      document.removeEventListener('mouseup',this.UP);
      this._dragend && this._dragend(this,ev)
      
    }

    // =>设置工具类方法（当作普通对象的私有方法）
    static each(arr, callbak) {
      // 数组和类数组
      if ('length' in arr) {
        for (let i = 0; i < arr.length; i++) {
          callbak && callbak(arr[i], i)
        }
        return;
      }
      // 对象
      if (typeof arr === 'object') {
        for (const key in arr) {
          if (Object.hasOwnProperty.call(arr, key)) {
            callbak && callbak(arr[key], key)
          }
        }
      }
    }
    static queryCss(curEle, attr) {
      return parseFloat(window.getComputedStyle(curEle)[attr]);
    }
  }
  window.Drag = Drag;
}();