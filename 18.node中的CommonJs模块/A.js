/* function sum(...args){
  let total = 0;
  args.forEach(item=>{
    total+=Number(item);
  })
  return total;
} */
let sum = (...args)=> eval(args.join('+'));

module.exports={
  sum
}