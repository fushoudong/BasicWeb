import * as con from '../constants'
import jwtDecode from 'jwt-decode'

const login = (state={}, action) => {
  switch(action.type) {
    case con.ADD_USER:
      return {
        isLogin: true,
        user: action.user
      }
    default:
      return state
  }
}
export default login