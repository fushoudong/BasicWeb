import React from "react";

export default class ExtendsDemo extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        {this.props.left}
        {this.props.right}
        {this.props.title}
        {this.props.message}
      </div>
    );
  }
}
