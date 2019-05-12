const dom =  new Proxy({},{
  get(target,property) {
    return function( attrs = {}, ...children){
      const el = document.createElement(property);

      for(let prop of Object.keys(attrs)){
        el.setAttribute(prop,attrs[prop]);
      }

      for(let child of children){
        if( typeof child === 'string') {
          child = document.createTextNode(child);
        }
        el.appendChild(child);
      }

      return el;
    }
  }
});

const el = dom.div({},
  'hello. my name is',
  dom.a({href:'www.baidu.com'},'mark'),
  '. i like:',
  dom.ul({},
    dom.li({},'the web'),
    dom.li({},'food'),
    dom.li({},'llllll')
    )
  )

document.body.appendChild(el);