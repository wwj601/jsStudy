let A = require('./A')

let avg = (...args)=>{
  args = args.sort((a,b)=>a-b).slice(1,args.length-1);
  return (A.sum(...args)/args.length).toFixed(2);
}

module.exports = {
  avg
}