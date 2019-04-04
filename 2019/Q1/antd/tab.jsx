
import React from 'react';
import ReactDOM from 'react-dom';


function callback(key) {
  console.log(key);
}

function TabHeader(props){
  return(<div>{
    props.tabs.map(t=><span>{t}</span>)
  }</div>)
}

class Tabs extends React.Component {
  constructor(props){
    super(props);
    let activeKey;
    if ('activeKey' in props) {
      activeKey = props.activeKey;
    } else if ('defaultActiveKey' in props) {
      activeKey = props.defaultActiveKey;
    }
    this.state = {
      activeKey
    }
  }

  generateContent(){
    return React.Children.map(this.props.children,child => {
      return React.cloneElement(child,{
        ...child.props,
      })
    }).filter(item =>{
      return String(item.key) === `.$${this.state.activeKey}`
    });
  }

  getTabs(){
    return React.Children.map(this.props.children,child => {
      return child.props.tab
    });
  }

  render(){
    let content = this.generateContent();
    return(<div>
       <TabHeader tabs={this.getTabs()}/>
      {content}
    </div>)
  }
}

class TabPane extends React.Component {
  render(){
    return(<div>{this.props.children}</div>)
  }
}


ReactDOM.render(
  <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
    <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
    <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
  </Tabs>,
  document.getElementById('container')
);
          