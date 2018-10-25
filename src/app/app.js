import { h, Component } from 'preact';
import { Router, route } from 'preact-router';
import Home from './pages/home';
import Connect from './pages/connect';
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
    switch (e.url) {
      case '/':
        const isConnected = this.isConnected();
        if (!isConnected) {
          route('/connect', true);
        }
        break;
    }
  }

  render() {
    return (
      <Router onChange={this.handleRoute}>
        <Home path="/" />
        <Connect path="/connect" />
      </Router>
    );
  }
}

export default App;
