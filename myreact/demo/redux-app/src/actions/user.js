import * as con from "../constants";
const add_user = (user) => {
  return {
    type: con.ADD_USER,
    user,
  };
};

export function fetch_padding() {
  return {
    type: con.FETCH_PADDING,
    user: {}
  }
}

export function fetch_user(user) {
  return {
    type: con.FETCH_SUCCESS,
    user  
  };
}

export const get_user = () => {
  return dispatch => {
    dispatch(fetch_padding())
    fetch("http://iwenwiki.com/api/blueberrypai/getChengpinInfo.php")
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetch_user(data.chengpinInfo[0]));
      })
    
  };
};

export { add_user };
