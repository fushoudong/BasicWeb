import React from "react";
// import Welcome from './views/Welcome'
// import OperateCount from './views/OperateCount'
// import Clock from './views/Clock'
// import List from './views/List'
// import LifeCycle from './views/LifeCycle'
// import SetState from './views/SetState'
// import IfDemo from './views/IfDemo'
// import IfDemo2 from './views/IfDemo2'
// import FormDemo1 from './views/FormDemo1'
// import FormTextArea from './views/FormTextArea'
// import FormSelect from './views/FormSelect'
// import FormCheckbox from './views/FormCheckbox'
// import FormDemo2 from './views/FormDemo2'
// import Calculator from './components/Calculator'
// import ExtendsDemo from "./views/ExtendsDemo";
import PropTypesDemo from './views/PropTypesDemo'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // sonData: 0,
      // name: '我爱小斐斐'
    };
  }
  // handleButtonClick = () => {
  //   this.setState({
  //     name: this.state.name + '一生一世'
  //   })
  // }
  render() {
    // const tabs1 = ['前端', 'Css', 'HTML', 'JavaScript']
    // const tabs2 = ['后端', 'Java', 'C#', 'Node.js']
    return (
      <div>
        {/*
          <Clock/>
          <Welcome name="FeiFei"/>
          <h1>下面是导入的组件</h1>
          <Welcome data ={this.state.sonData} name='我爱你斐斐'/>8
          <OperateCount />
          <Father/>
          <List data={tabs1}/>
          <List data={tabs2}/>
          <LifeCycle name={this.state.name}/>
          <button onClick={this.handleButtonClick}>一生一世</button>
          <SetState />
          <IfDemo/>
          <IfDemo2/>
          <FormDemo1 />
          <FormTextArea />
          <FormSelect />
          <FormCheckbox />
          <FormDemo2 />
          <Calculator />
          <ExtendsDemo
            left={<div>你好</div>}
            right={<div>右侧</div>}
            title={<h1>标题</h1>}
            message={<h3>这是message</h3>}
          />
        */}
        <PropTypesDemo title={'小付砸'} name={1}/>
      </div>
    );
  }
}
export default App;
