import React from "react";
import {doRegister} from '../network/register'
import classnames from "classnames";
export default class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      confirmInfo: "",
      status: -1,
      warningMsg: "",
      isFetching: false,
      doRegisterUn: true
    };
  }
  handleSubmit = (e) => {
    this.setState({
      isFetching: true,
      doRegisterUn: true
    })
    e.preventDefault();
    doRegister(this.state)
    .then(res => {
      this.setState({
        isFetching: false
      })
      if(res.exception) {
        this.setState({
          status:res.status,
          warningMsg: res.message
        })
      }else {
        if(res.status === 0) {
          console.log('重定向')
          this.props.history.push('/login')
        }else {
          this.setState({
            status:"",
            warningMsg: "",
            doRegisterUn: false
          })
        }
      }
    }).catch(error => {
      console.log(error)
    })
  };
  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
    })
  }
  closeMessage = () => {
    this.setState({
      doRegisterUn: true
    })
  }
  render() {
    const { name, email, password, confirmInfo, status, warningMsg } = this.state;
    console.log(status, warningMsg)
    return (
      <div>
        <div className="">
          <h1>Join our Community!</h1>
          <div className="alert alert-danger" role="alert" hidden={this.state.doRegisterUn}>
            <span>当前账户已存在</span>
            <button data-dismiss="toast" aria-label="Close" className="close" onClick={this.closeMessage}>&times;</button>
          </div>
          <form onSubmit={this.handleSubmit} action="">
            <div style={{ marginBottom: "20px" }}>
              <label
                className="form-group"
                style={{ width: "500px", height: "40px" }}
                >Username
                <input
                  type="text"
                  className={classnames("form-control",{"is-invalid": status===0})}
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                />
              </label>
              <p style={{color: 'red'}}>{status===0? warningMsg: ""}</p>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label
                className="form-group"
                style={{ width: "500px", height: "40px" }}
                >Email
                <input
                  type="email"
                  className={classnames("form-control",{"is-invalid": status===1})}                  
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
              </label>
              <p style={{color: 'red'}}>{status===1? warningMsg: ""}</p>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label
                className="form-group"
                style={{ width: "500px", height: "40px" }}
                >Password
                <input
                  type="password"
                  className={classnames("form-control",{"is-invalid": status===2})}                  
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                />
              </label>
              <p style={{color: 'red'}}>{status===2? warningMsg: ""}</p>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label
                className="form-group"
                style={{ width: "500px", height: "40px" }}
               >ConfirmInfo
                <input
                  type="password"
                  className={classnames("form-control",{"is-invalid": status===3})}
                  name="confirmInfo"
                  value={confirmInfo}
                  onChange={this.handleChange}
                />
              </label>
              <p style={{color: 'red'}}>{status===3? warningMsg: ""}</p>
            </div>
            <p>
              <button type="submit" className="btn btn-primary" disabled={this.state.isFetching}>
                REGISTER
              </button>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
