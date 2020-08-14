import React from 'react'
export default class Child1 extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('child => ')
  
    return (
      <div>
        son: {this.props.value}
      </div>
    )
  }
}