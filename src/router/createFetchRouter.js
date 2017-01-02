import React, { PureComponent } from 'react';
import { Route, Router, browserHistory } from 'react-router';
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

    componentDidMount(){
      
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
          routes.map((route) => (
            <Route path={route.path} component={Tab}/>
          ))
        }
      </Route>
    </Router>
  )

  return router;

}

export default createFetchRouter;
