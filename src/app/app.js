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
    const { path, token } = e.current.props;
    if (path === '/connect') {
      return;
    }

    const isConnected = this.isConnected();
    if (!isConnected) {
      let newPath = '/connect';
      if (token) {
        newPath += `?token=${token}`;
      }
      route(newPath, true);
    }
  }

  render() {
    return (
      <Router history={createHashHistory()} onChange={this.handleRoute}>
        <Connect path="/connect" />
        <Search path="/search" />
        <Home default />
      </Router>
    );
  }
}

export default App;
