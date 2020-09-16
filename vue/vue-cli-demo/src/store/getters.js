export default {
  doneTodos(state) {
    return state.todos.filter(state => state.done)
  },
  getDoneLength(state, getters) {
    return getters.doneTodos.length
  }
}
