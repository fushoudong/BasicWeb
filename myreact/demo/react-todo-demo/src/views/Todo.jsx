import React from 'react'
import PropTypes from 'prop-types'

export default class Todo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {onClick, text, completed} = this.props
    return (
      <div>
        <li onClick={onClick} style={{
          textDecoration: completed? 'line-through': 'none'
        }}>
          {text}
        </li>
      </div>
    )
  }
}
Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}