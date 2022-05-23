let fs = require('fs');
let path = require('path');

let exportsObj = {};
function suffixHandle(pathname){
  let suffixREG = /\.([0-9a-z]+)$/i,
      suffix = suffixREG.test(pathname) ?suffixREG.exec(pathname)[1] : '',
      encoding = 'utf-8';
  /^(png|jpg|gif|jpeg|webp|bmp|ico|svg|mpa|mp4|wma|wav|ogg|m3u8)$/i.test(suffix) ? encoding = null: null;
  return encoding;
}

;['readFile','mkdir','rmdir','unlink','reddir','copyFile'].forEach(item=>{
  exportsObj[item] = function annmouse(pathname){
    pathname = path.resolve(pathname);
    return new Promise((resolve,reject)=>{
      let encoding = suffixHandle(pathname);
      let callback = (error,result)=>{
            if(error !== null){
              return reject(error)
            }
            return resolve(result)
          };
      if(item === 'readFile'){
        encoding = callback;
        callback = null;
      }
      fs[item](pathname,encoding,callback)
    })
  }
})

;['writeFile','appendFile'].forEach(item=>{
  exportsObj[item] = function annmouse(pathname,content){
    pathname = path.resolve(pathname);

    return new Promise((resolve,reject)=>{
      let encoding = suffixHandle(pathname);
      let callback = error=>{
            if(error !== null){
              return reject(error)
            }
            return resolve(error)
          };

      fs[item](pathname,content,encoding,callback)
    })
  }
})

exportsObj['copyFile'] = function annmouse(pathname1,pathname2){
  pathname1 = path.resolve(pathname1);
  pathname2 = path.resolve(pathname1);
  return new Promise((resolve,reject)=>{
    let encoding = suffixHandle(pathname);

    fs[item](pathname,pathname2,error=>{
      if(error !== null){
        return reject(error)
      }
      return resolve(error)
    })
  })
}

module.exports = exportsObj;