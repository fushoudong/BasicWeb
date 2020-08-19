import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/index/IndexPage';
import SecondPage from './routes/second/SecondPage'
import ProductPage from './routes/product/ProductPage'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/second" exact component={SecondPage} />
        <Route path="/product" exact component={ProductPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
