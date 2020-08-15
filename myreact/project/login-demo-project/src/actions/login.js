import * as con from "../constants";
// import { request } from "../libs/requset";
import setAuthorization from '../setAuthorization'
import axios from 'axios'
export function setUser(user) {
  return {
    type: con.ADD_USER,
    user,
  };
}

export const doLogin = (params) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios.post("/api/login", params).then(res => {
        localStorage.setItem('jwt', res.data.token)
        setAuthorization(res.data.token)
        dispatch(setUser(res.data))
        resolve(res.data)
      })
    })
  };
};
