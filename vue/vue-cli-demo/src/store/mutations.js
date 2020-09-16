import * as con from '../constants/store'

export default {
  [con.INCREASE](state) {
    state.count ++
  },
  [con.CHANGE_IDENTIFY](state, payload) {
    if (!typeof state.identify === "string") {
      state.identify = payload
    }else {
      state.identify = true
    }
  },
  [con.SET_TITLE](state, payload) {
    state.title = payload.title
  },
  [con.SET_DELAY](state, payload) {
    state.delay = payload.delay
    state.data = payload.data
  },
}
