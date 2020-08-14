import React from 'react'
import PropTypes from 'prop-types'

function Comment(props, context) {
  console.log(context)
  return (
    <div>
      Comment:{context.theme}
    </div>
  )
}

class Topic extends React.Component {
  shouldComponentUpdate() {
    return true
  }
  render() {
    return (
      <div>
        <Comment />
      </div>
    )
  }
}

export default class ContextDemo extends React.Component {
  constructor() {
    super()
    this.state = {
      data: '传递参数'
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: '我爱小斐斐'
      })
    }, 2000)
  }
  getChildContext() {
    return {
      theme: this.state.data
    }
  }
  render() {
    return (
      <div>
        <Topic theme={this.state.data}/>
      </div>
    )
  }
}
Comment.contextTypes = {
  theme: PropTypes.string.isRequired
}

ContextDemo.childContextTypes = {
  theme: PropTypes.string.isRequired
}