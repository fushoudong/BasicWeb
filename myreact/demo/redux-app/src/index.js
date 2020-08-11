import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import {Provider} from 'react-redux'
// import logger from 'redux-logger'
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'


// const logger = store => next => action => {
//   console.log("dispatch => ", action)
//   let result = next(action)
//   console.log("next state => ", store.getState())
//   return result
// }

const store = createStore(reducer, {}, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>, 
  document.getElementById("root"));
