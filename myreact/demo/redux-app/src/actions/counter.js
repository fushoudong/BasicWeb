import * as con from '../constants'
// const increase = (num) => {
//   return {
//     type: con.INCREASE,
//     num
//   }
// }
const increase = (num) => {
  return dispatch => {
    setTimeout( () => {
      dispatch({
        type: con.INCREASE,
        num
      }) 
    },1000)
  }
}
const decrease = (num) => {
  return {
    type: con.DECREASE,
    num
  }
}

export {increase, decrease}