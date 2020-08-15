import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reducer from './reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {applyMiddleware} from 'redux'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {setUser} from './actions/login'
import setAuthorization from './setAuthorization'
// 创建redux存储实例
const store = createStore(reducer, {}, composeWithDevTools(applyMiddleware(logger, thunk)))
if(localStorage.getItem('jwt')) {
  setAuthorization(localStorage.getItem('jwt'))
  store.dispatch(setUser({user: localStorage.getItem('jwt')}))
}else {

}
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"));
