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
// 创建redux存储实例
const store = createStore(reducer, {}, composeWithDevTools(applyMiddleware(logger, thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"));
