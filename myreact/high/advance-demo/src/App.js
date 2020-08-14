import React from 'react';
import Parent from './components/Parent'
import Home from './components/Home'
import Table from './components/Table'
import ContextDemo from './components/ContextDemo'
import CApp from './components/CApp'
import HighC from './views/HighC'

import FetchView from './views/FetchView'

import {
  HashRouter, 
  Switch, 
  Route
} from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route exact path="/parent" component={Parent}></Route>
        <Route exact path="/table" component={Table}></Route>
        <Route exact path="/context" component={ContextDemo}></Route>
        <Route exact path="/app" component={CApp}></Route>
        <Route exact path="/highc" component={HighC} ></Route>
        <Route exact path="/fetch" component={FetchView} ></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
