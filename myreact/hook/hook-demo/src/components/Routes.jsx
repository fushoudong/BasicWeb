import React, { Fragment } from 'react'
import {Route} from 'react-router-dom'
import ClassDom from '../views/ClassDemo'
import Random from '../views/Random'
import Base from '../views/Base'
import Title from '../views/Title'
import Token from '../views/TokenApp'
import Todo from '../views/Todo'
import Net from '../views/NetPage'
import Life from '../views/Life'
import Mome from '../views/Mome'
import Callback from '../views/UseCallback'
import Reducer from '../views/UseReducer'
import Context1 from '../views/UseContext'

export default class Routes extends React.Component {
  constructor() {
    super()
    this.stae = {}
  }
  render() {
    return (
      <Fragment>
        <Route path="/class" component={ClassDom} />
        <Route path="/base" component={Base} />
        <Route path="/random" component={Random} />
        <Route path="/title" component={Title} />
        <Route path="/token" component={Token} />
        <Route path="/todo" component={Todo}/>
        <Route path="/net" component={Net}/>
        <Route path="/life" component={Life}/>
        <Route path="/mome" component={Mome}/>
        <Route path="/call" component={Callback}/>
        <Route path="/reducer" component={Reducer}/>
        <Route path="/c1" component={Context1}/>
      </Fragment>
    )
  }
}