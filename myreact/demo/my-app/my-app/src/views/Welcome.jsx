import React from "react";
export default class Welcome extends React.Component {
  /**
   * 子组件，显示父组件传递的参数
   */
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleClick() {
    console.log(this)
  }
  render() {
    return (
      <div>
        <p>组件，获取的数据{this.props.data}</p>
        <h1>{ this.props.name }</h1>
        <button onClick={this.handleClick.bind(this)}>测试this</button>
      </div>
    );
  }
}
