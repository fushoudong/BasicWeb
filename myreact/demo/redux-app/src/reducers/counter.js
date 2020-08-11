import * as con from '../constants'

const counter = (state = 0, action) => {
  switch(action.type) {
    case con.INCREASE:
      return state + action.num
    case con.DECREASE:
      return state - action.num
    default:
      return state
  }
}

export default counter
