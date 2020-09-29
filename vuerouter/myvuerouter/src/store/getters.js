export default {
  getPerson(state) {
    return state.person.filter(item => item.age > 31)
  }
}