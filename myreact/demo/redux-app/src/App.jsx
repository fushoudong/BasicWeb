import React from 'react';
import {Button} from 'antd'
import 'antd/dist/antd.css'
import './App.css'
import {connect} from 'react-redux'
// import {increase, decrease} from './actions/counter'
import * as counterActions from './actions/counter'
import {bindActionCreators} from 'redux'

import User from './views/User'

function App(props) {
  const {counter, user } = props
  const {increase, decrease} = props.counterActions
  return (
    <div className="App">
      <h1>{ counter }</h1>
      <p>
        <Button type="primary" onClick={() => increase(5)}>Increase</Button>
        <Button type="primary" danger onClick={() => decrease(10)}>Decrease</Button>
      </p>
      <User value={user}/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    user: state.user
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increase: () => dispatch(increase()),
//     decrease: () => dispatch(decrease()),
//   }
// }
const mapDispatchToProps = (dispatch) => {
  return {
    counterActions: bindActionCreators(counterActions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
