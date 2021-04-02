import {h, Component} from "../../_snowpack/pkg/preact.js";
import {Router, route} from "../../_snowpack/pkg/preact-router.js";
import {createHashHistory} from "../../_snowpack/pkg/history.js";
import Home from "./pages/home/index.js";
import Connect from "./pages/connect/index.js";
import Search from "./pages/search/index.js";
import configuration from "./services/configuration.service.js";
class App extends Component {
  constructor() {
    super();
    this.handleRoute = this.handleRoute.bind(this);
  }
  isConnected() {
    return !!configuration.user;
  }
  handleRoute(e) {
    const {path, token} = e.current.props;
    if (path === "/connect") {
      return;
    }
    const isConnected = this.isConnected();
    if (!isConnected) {
      let newPath = "/connect";
      if (token) {
        newPath += `?token=${token}`;
      }
      route(newPath, true);
    }
  }
  render() {
    return /* @__PURE__ */ h(Router, {
      history: createHashHistory(),
      onChange: this.handleRoute
    }, /* @__PURE__ */ h(Connect, {
      path: "/connect"
    }), /* @__PURE__ */ h(Search, {
      path: "/search"
    }), /* @__PURE__ */ h(Home, {
      default: true
    }));
  }
}
export default App;
