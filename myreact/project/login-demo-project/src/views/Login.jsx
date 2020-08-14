import React from "react";
import {doLogin} from '../network/login'
import classnames from 'classnames'
export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      account: '',
      password: '',
      status: -1,
      respMsg: '',
      warnInfo: '',
      doLoginUn: true
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      doLoginUn: true
    })
    doLogin(this.state)
    .then(res => {
      console.log(res)
      if(res.exception) {
        this.setState({
          status: res.status,
          respMsg: res.message
        })
      }else {
        if(res.status === -1) {
          this.setState({
            status: -1,
            respMsg: "",
            warnInfo: res.msg,
            doLoginUn: false
          })
        }else {
          console.log(res.msg)
        }
      }
    })
    .catch(error => {
      console.log(error)
    })
  }
  handleDataChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
    },() => {
      console.log(this.state)
    })
  }
  closeMessage = () => {
    this.setState({
      doLoginUn: true
    })
  }
  render() {
    const {account, password, status, respMsg, warnInfo} = this.state
    return (
      <div>
      <div className="alert alert-danger" role="alert" hidden={this.state.doLoginUn}>
        <span>{warnInfo}</span>
        <button data-dismiss="toast" aria-label="Close" className="close" onClick={this.closeMessage}>&times;</button>
      </div>
        <div className="jumbotron jumbotron-fluid">
          <h1>Hi React Redux Login</h1>
        </div>
        <form className="form-horizontal text-center col-12" onSubmit={this.handleSubmit} action="">
          <div className="form-group col-sm-12 d-flex justy-content-center">
            <label className="col-sm-2 control-label">
              账号
            </label>
            <div className="col-sm-4">
              <input
                type="text"
                className={classnames("form-control", {"is-invalid": status === 0})}
                name="account"
                placeholder="请输入账号"
                value={account}
                onChange={this.handleDataChange}
              />
            </div><br/>
            <p style={{color: 'red', lineHeight: '34px'}} hidden={status !== 0}>{respMsg}</p>
          </div>
          <div className="form-group col-sm-12 d-flex justy-content-center">
            <label className="col-sm-2 control-label">
              密码
            </label>
            <div className="col-sm-4">
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="请输入密码"
                className={classnames("form-control", {"is-invalid": status === 1})}
                value={password}
                onChange={this.handleDataChange}
              />
              </div>
              <p style={{color: 'red', lineHeight: '34px'}} hidden={status !== 1}>{respMsg}</p>
          </div>
          <div className="form-group">
            <div className="col-sm-8 text-center">
              <button type="submit" className="btn btn-primary" style={{
                width: '200px',
                height: '40px'
              }}>
                登录
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
