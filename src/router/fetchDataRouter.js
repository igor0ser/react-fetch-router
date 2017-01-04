import React, { PureComponent, PropTypes } from 'react';
import { Route } from 'react-router';
import axios from 'axios';

function fetchDataRouter(routes) {
  const getRoute = path =>
    routes.find(route => route.path === path);

  class Page extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
        data: [],
        route: getRoute(this.props.route.path)
      };
    }

    componentDidMount() {
      this.fetchData(this.state.route.url);
    }

    componentWillReceiveProps({ route }) {
      if (route.path === this.props.route.path) return;

      const nextRoute = getRoute(route.path);
      this.setState({
        loading: true,
        data: [],
        route: nextRoute
      });
      this.fetchData(nextRoute.url);
    }

    fetchData(url) {
      axios.get(url)
        .then((responce) => {
          const data = responce.data.data.children;
          this.setState({ data, loading: false });
        });
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

  Page.propTypes = {
    route: PropTypes.shape({
      path: PropTypes.string.isRequired
    }).isRequired
  };

  return routes.map(route =>
    (
      <Route path={route.path} component={Page} key={route.path} />
    )
  );
}

export default fetchDataRouter;
