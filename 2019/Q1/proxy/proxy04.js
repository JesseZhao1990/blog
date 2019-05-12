let twice = {
  apply(target,ctx, args){
    return Reflect.apply(...arguments) * 2;
  }
};

function sum (left,right){
  return left + right;
}

let proxy = new Proxy(sum,twice);

proxy(1,2);
proxy.call(null, 5, 6);
proxy.apply(null,[7,8]);



