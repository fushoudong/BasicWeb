import React, { Fragment } from "react";
import classnames from 'classnames'
import { NavLink } from "react-router-dom";
import {connect} from 'react-redux'
class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0
    };
  }
  handleClick1 = () => {
    this.setState({
      index: 0
    })
  }
  handleClick2 = () => {
    this.setState({
      index: 1
    })
  }
  componentWillMount() {
    console.log(this.props.isLogin)
  }
  render() {
    const logout = (
        <ul className="nav nav-tabs" style={{marginTop: "20px"}}>
          <li className="nav-link">
            <a href="" className="link">Logout</a>
          </li>
        </ul>
    )
    const main =  (
        <ul className="nav nav-tabs" style={{marginTop: "20px"}}>
          <li role="presentation" 
              onClick={this.handleClick1} 
              className={classnames({'active': this.state.index === 0})}>
              <NavLink
                role="presentation"
                activeClassName="active"
                to="/login"
                strict
              >Login
              </NavLink>
            </li>
            <li role="presentation"
              onClick={this.handleClick2}
              className={classnames({'active': this.state.index === 1})}>
              <NavLink
                role="presentation"
                activeClassName="active"
                to="/register"
                strict
              >Register
              </NavLink>
            </li>
        </ul>
    )
    return (
      <div>
        {
          this.props.isLogin? logout: main
        }
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    isLogin: store.login.isLogin
  }
}

export default connect(mapStateToProps)(NavBar)