import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {createStore} from 'redux'
import counter from './reducers/count'
import {Provider} from 'react-redux'

const store = createStore(counter)

const render = () => {
  ReactDOM.render(<App 
    onIncrease= {() => store.dispatch({type: 'INCREASE'})}
    onDecrease= {() => store.dispatch({type: 'DECREASE'})}
    value={store.getState()}
    />, document.getElementById("root"));  
} 
render()
store.subscribe(render)
