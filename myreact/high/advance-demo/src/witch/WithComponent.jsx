import React from "react";

export const WithComponent = (ComponseComponent) => {
  return class extends React.Component {
    render() {
      return (
        <div>
          封装的组件: {this.props.value}
          <ComponseComponent {...this.props}/>
        </div>
      );
    }
  };
};
