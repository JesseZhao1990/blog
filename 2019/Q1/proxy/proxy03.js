/**
 * Proxy 中的apple方法
 * 
 * apply方法拦截函数额调用，call和apply操作。
 * 
 * apply方法可以接受三个参数，分别是目标对象，目标对象的上下文（this），和目标对象的参数数组
 * 
 */

 let target = function (){
   return 'i am the target';
 }


 let handler  = {
   apply: function() {
     return 'I am the proxy';
   }
 }

 let p = new Proxy(target, handler);

 p();