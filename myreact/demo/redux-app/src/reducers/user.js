import * as con from '../constants'

const user = (state = {}, action) => {
  switch(action.type) {
    case con.ADD_USER:
      return Object.assign({}, state, action.user)
    case con.FETCH_SUCCESS:
      return action.user
    case con.FETCH_PADDING: 
      return action.user
    default:
      return state
  }
}

export default user