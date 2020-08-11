import * as constant from '../constants'

const getVisibleTodos = (todos, action) => {
  switch(action.type) {
    case constant.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    case constant.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case constant.SHOW_ALL:
    default: 
      return todos
  }
}

export default getVisibleTodos