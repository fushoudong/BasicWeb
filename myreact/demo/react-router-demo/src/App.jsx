import React from "react";
import NavBar from "./views/NavBar";
import Home from "./views/Home";
import Register from "./views/Register";
import Sub from "./views/SubPage";
import Ucenter from './views/Ucenter'
import Not from './views/404'
import RenderDemo from './views/RenderDemo'
import Params from './views/Params'
import Query from './views/Query'
import Shop from './views/Shop'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import 'antd/dist/antd.css'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/home" component={Home}></Route>
          <Route exact strict path="/register" component={Register}></Route>
          <Route exact strict path="/home/sub" component={Sub}></Route>
          <Route exact strict path="/home/ucnter" component={Ucenter}></Route>
          <Route path="/params/:id?/:name?" component={Params}></Route>
          <Route path="/query" component={Query}></Route>
          <Route exact path="/demo" render={() => <div>我爱小斐斐</div>}></Route>
          <Route exact path="/demo1" render={(props) => <RenderDemo {...props} name="爱斐斐" />}></Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Redirect from="/" to="/home"></Redirect>
          <Route component={Not}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
