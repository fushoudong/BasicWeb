export default {
  increase(state, payload) {
    state.count += payload.count
  },
  decrease(state, payload) {
    state.count -= payload.count
  },

}