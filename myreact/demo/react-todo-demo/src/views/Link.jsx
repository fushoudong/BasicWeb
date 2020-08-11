import React from 'react'

export default class Link extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  handleClick = (e) => {
    e.preventDefault();
    this.props.onClick()
  }
  render() {
    const {active, children} = this.props
    return (
      <div>
        {
          active? 
          <span>{children}</span>: 
          <a onClick={this.handleClick}>{children}</a>
        }
      </div>
    )
  }
}