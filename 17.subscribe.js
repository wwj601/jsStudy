let subscribe = (function(){
  /**
   * Subscribe:自己利用事件池机制构建发布订阅模式类
   *    by Mr_wan on 2022/5/21
   */
  class Subscribe{
    constructor(){
      // 创建一个事件池，用来存储后期需要执行的方法
      this.pound = [];
    }
    // =>向事件池中追加方法（做重复处理）
    add(func){
      this.pound.includes(func) ? null :this.pound.push(func);
    }
    // =>从事件池中移除方法
    remove(func){
      this.pound.includes(func) ? this.pound[this.pound.indexOf(func)]=null :null;
    }
    // =>执行事件池中的方法
    fire(...args){
      for(let i = 0;i<this.pound.length;i++){
        let item = this.pound[i];
        if(item === null){
          this.pound.splice(i,1);
          i--;
          continue;
        }
        item.apply(this,args);
      }
    }
  }
  return function (){
    return new Subscribe();
  }
})();
let s1 = subscribe();
console.log(s1);// Subscribe { pound: [] }