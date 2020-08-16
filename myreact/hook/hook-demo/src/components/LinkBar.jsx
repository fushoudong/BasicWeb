import React from 'react'
import '../css/bar.css'
import {NavLink} from 'react-router-dom'

export default class ClassDemo extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '斐斐'
    }
  } 
  render() {
    return (
      <div>
        <ul className="menu">
          <NavLink className="nav-link" strict to="/class">class</NavLink>
          <NavLink className="nav-link" strict to="/base">base</NavLink>
          <NavLink className="nav-link" strict to="/random">random</NavLink>
          <NavLink className="nav-link" strict to="/title">title</NavLink>
          <NavLink className="nav-link" strict to="/token">token</NavLink>
          <NavLink className="nav-link" strict to="/todo">list</NavLink>
          <NavLink className="nav-link" strict to="/net">net</NavLink>
          <NavLink className="nav-link" strict to="/life">life</NavLink>
          <NavLink className="nav-link" strict to="/mome">Mome</NavLink>
          <NavLink className="nav-link" strict to="/call">Callback</NavLink>
          <NavLink className="nav-link" strict to="/reducer">Reducer</NavLink>
          <NavLink className="nav-link" strict to="/c1">Context1</NavLink>
        </ul>
      </div>
    )
  }
}