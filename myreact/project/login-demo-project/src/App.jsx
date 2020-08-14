import React from 'react';
import Login from './views/Login'
import Register from './views/Register'
import NavBar from './components/NavBar'
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

function App() {
  return (
    <div className="App container">
      <Router>
        <NavBar/>
        <Switch>
          <Route strict path="/login" component={Login} />
          <Route strict path="/register" component={Register} />
          <Redirect strict from="/" to="/login"></Redirect>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
