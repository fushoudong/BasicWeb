import React from 'react';
import {HashRouter as Router} from 'react-router-dom'
import NavBar from './components/LinkBar'
import Routes from './components/Routes'

function App() {
  return (
    <div className="container">
      <Router>
        <NavBar />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
