import React from 'react'
import Todo from './Todo'
import PropTypes from 'prop-types'

export default class TodoList extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: []
    }
  }
  render() {
    const {todos, onTodoClick} = this.state
    return (
      <div>
        {
          todos.map((item, index) => {
            <Todo key={index} {...item} onClick = {onTodoClick(index)} />
          })
        }
      </div>
    )
  }
}
TodoList.propTypes = {

}