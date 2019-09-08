import { h, Component } from 'preact';
import { Router, route } from 'preact-router';
import { createHashHistory } from 'history';
import Home from './pages/home';
import Connect from './pages/connect';
import Search from './pages/search';
import configuration from '~/app/services/configuration.service';

class App extends Component {
  constructor() {
    super();
    this.handleRoute = this.handleRoute.bind(this);
  }

  isConnected() {
    return !!configuration.user;
  }

  handleRoute(e) {
    switch (e.current.props.path) {
      case '/':
        const isConnected = this.isConnected();
        if (!isConnected) {
          let path = '/connect';
          if (e.current.props.token) {
            path += `?token=${e.current.props.token}`;
          }
          route(path, true);
        }
        break;
    }
  }

  render() {
    return (
      <Router history={createHashHistory()} onChange={this.handleRoute}>
        <Home path="/" />
        <Connect path="/connect" />
        <Search path="/search" />
      </Router>
    );
  }
}

export default App;
