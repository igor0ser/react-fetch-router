import React, { PureComponent } from 'react';
import { Route, Router, browserHistory } from 'react-router';
import axios from 'axios';
import App from '../App';

const createFetchRouter = (routes) => {

  class Tab extends PureComponent {
    constructor(props){
      super(props);
      this.state = {
        isFetching: true,
        data: []
      }
      console.log(props);
    }

    fetchData(){
      this.setState({data: [], isFetching: true});
      const url = routes.find(route => 
        route.path === this.props.route.path).url;
      console.log(url);

      axios.get(url)
        .then((responce) => {
          console.log(12345);
          const data = responce.data.data.children;
          console.log(data);
          this.setState({data: data, isFetching: false});
        })
    }

    componentWillReceiveProps({ route }){
      console.log('componentWillReceiveProps');
      if (route.path === this.props.route.path) return;
      this.fetchData();
    }

    componentDidMount(){
      console.log('componentDidMount');
      this.fetchData();
    }

    render() {
      const { isFetching, data } = this.state;
      const Comp = routes.find(route => 
        route.path === this.props.route.path).component;
      return (
        <Comp
          isFetching={isFetching}
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
            <Route path={route.path} component={Tab} key={i}/>
          ))
        }
      </Route>
    </Router>
  )

  return router;

}

export default createFetchRouter;
