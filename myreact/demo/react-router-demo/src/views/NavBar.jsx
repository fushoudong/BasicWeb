import React from "react";
import {NavLink } from "react-router-dom";
import '../styles/navbar.css'

export default class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <ul className="menu">
          <li><NavLink exact to="/home">Home</NavLink></li>
          <li><NavLink to="/register">Register</NavLink></li>
          <li><NavLink to="/home/sub">Sub</NavLink></li>
          <li><NavLink to="/home/ucnter">Ucenter</NavLink></li>
        </ul>
      </div>
    );
  }
}
