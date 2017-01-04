import ReactDOM from 'react-dom';
import Help from './help/Help';
import Home from './home/Home';
import Main from './main/Main';
import { Route, Router, browserHistory } from 'react-router';
import React, { PureComponent } from 'react';
import App from './App';
import fetchDataRouter from './router/fetchDataRouter';
import './index.css';

const routes = [{
  component: Help,
  path: 'help',
  url: 'https://www.reddit.com/r/help.json'
}, {
  component: Home,
  path: 'home',
  url: 'https://www.reddit.com/r/home.json'
}, {
  component: Main,
  path: 'main',
  url: 'https://www.reddit.com/r/help.json'
}];

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      {fetchDataRouter(routes)}
    </Route>
  </Router>,
  document.getElementById('root')
);
