export default {
  changeFlag(state, payload) {
    state.flag = payload.flag
    localStorage.setItem('flag', state.flag)
  }
}