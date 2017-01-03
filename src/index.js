import ReactDOM from 'react-dom';
import Help from './help/Help';
import Home from './home/Home';
import Main from './main/Main';
import createFetchRouter from './router/createFetchRouter';
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
  createFetchRouter(routes),
  document.getElementById('root')
);
