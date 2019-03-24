/**
 * 柯里化
 * 
 * 柯里化的作用
 * 1. 参数复用
 * 2. 提前返回
 * 3. 延迟执行
 */


function add(...arg){
  let sum = arg.reduce((a,b)=>a+b);

  function temp(...arg){
    sum = sum + arg.reduce((a,b)=>a+b);
    return temp;
  }

  temp[Symbol.toPrimitive] = function(){
    return sum;
  }

  return temp;

}

console.log(add(1))
console.log(add(1)(2)(3))
console.log(add(1)(2)(3)(4))
console.log(add(1)(2)(3,4,5,6)(7)(8,9,10))
