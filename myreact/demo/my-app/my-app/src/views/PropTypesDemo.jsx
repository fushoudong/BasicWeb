import React from 'react'
import propTypes from 'prop-types'

export default class PropTypesDemo extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div>
        message：{this.props.title}——{this.props.name} 
      </div>
    )
  }
}
PropTypesDemo.propTypes = {
  title: propTypes.string
}
PropTypesDemo.defaultProps = {
  name: '我爱斐斐'
}