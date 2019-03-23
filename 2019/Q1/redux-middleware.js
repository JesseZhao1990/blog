
/**
 *  redux 中间件的实现原理
 * 
 * */ 

 // 中间件1
let middleWare01 = (next)=>(action)=>{
  console.log(1);
  next(action);
  console.log(2);
}

// 中间件2
let middleWare02 = (next)=>(action)=>{
  console.log(3);
  next(action);
  console.log(4);
}


function compose(middleWares){
  return middleWares.reduce((result,current)=>{
    return (next) => result(current(next));
  })
}

let  dispatch = (action)=> {
  console.log('zhaojianxin')
  console.log(action);
  console.log(dispatch)
}

dispatch = compose([middleWare01,middleWare02])(dispatch);

dispatch('触发了action')











// redux 中间件实现的原理

let middleWare01 = (next)=>(action)=>{
  console.log(1);
  next();
  console.log(2);
}

let middleWare02 = (next) => (action) => {
  console.log(3);
  next();
  console.log(4);
}


function dispatch(action){
  console.log(action);
}


function compose(middleWares){
  
}