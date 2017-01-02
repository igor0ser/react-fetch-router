import ReactDOM from 'react-dom';
import Help from './help/Help';
import Home from './home/Home';
import Main from './main/Main';
import createFetchRouter from './router/createFetchRouter';
import './index.css';

const routes = [{
  component: Help,
  path: 'help'
}, {
  component: Home,
  path: 'home'
}, {
  component: Main,
  path: 'main'
}];

ReactDOM.render(
  createFetchRouter(routes),
  document.getElementById('root')
);
