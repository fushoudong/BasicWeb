import * as count from '../constants'

const counter = (state = 0, action) => {
  switch(action.type) {
    case count.INCREASE:
      return state + 1;
    case count.DECREASE:
      return state - 1;
    default:
      return state;
  }
}
export default counter