import React, { PureComponent } from 'react';
import { Route, Router, browserHistory } from 'react-router';
import axios from 'axios';
import App from '../App';

const fetchDataRouter = (routes) => {

  const getRoute = (path) => 
    routes.find(route => route.path === path);

  class Page extends PureComponent {
    constructor(props){
      super(props);
      this.state = {
        loading: true,
        data: [],
        route: getRoute(this.props.route.path)
      }
    }

    fetchData(url){
      axios.get(url)
        .then((responce) => {
          const data = responce.data.data.children;
          this.setState({data: data, loading: false});
        })
    }

    componentWillReceiveProps({ route }){
      if (route.path === this.props.route.path) return;

      const nextRoute = getRoute(route.path);
      this.setState({
        loading: true,
        data: [],
        route: nextRoute
      });
      this.fetchData(nextRoute.url);

    }

    componentDidMount(){
      this.fetchData(this.state.route.url);
    }

    render() {
      const { loading, data, route } = this.state;
      const Comp = route.component;
      return (
        <Comp
          loading={loading}
          data={data}
        />
      );
    }

  }

  const router = (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        {
          routes.map((route, i) => (
            <Route path={route.path} component={Page} key={i}/>
          ))
        }
      </Route>
    </Router>
  )

  return router;

}

export default fetchDataRouter;
