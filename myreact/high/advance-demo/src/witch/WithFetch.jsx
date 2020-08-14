import React from "react";

export const WithFetch = (ComposeComponent, url) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null,
      };
    }
    componentWillMount() {
      fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        this.setState({
          data
        });
      });
    }
    render() {
      return (
        <div>
          <ComposeComponent {...this.state} />
        </div>
      );
    }
  };
};
