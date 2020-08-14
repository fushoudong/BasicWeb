import React from 'react'
export default class Parent extends React.Component {
  constructor(props) {
    super(props)
  }

  shouldComponentUpdate(nextProp, nextState) {
    // console.log(nextProp, this.props)
    return (nextProp.value !== this.props.value)
  }
  
  render() {
    // console.log('child => ')
  
    return (
      <div>
        son: {this.props.value}
      </div>
    )
  }
}