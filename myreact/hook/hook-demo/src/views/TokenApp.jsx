import React, { useState, useEffect } from "react";

class TokenForm extends React.Component {
  constructor() {
    super()
    this.state = {
      token: ''
    }
  }
  changeState = (e) => {
    this.setState({
      token: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { setToken } = this.props;
    console.log(this.props);
    if(this.state.token) {
      setToken(this.state.token)
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.token}
            onChange={this.changeState}
          />
        </form>
      </div>
    );
  }
}

export default () => {
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  useEffect(() => {
    sessionStorage.setItem("token", token);
  });
  console.log(token);
  return (
    <div>
      {token !== null ? <p>{token}</p> : <TokenForm setToken={setToken} />}
    </div>
  );
};
