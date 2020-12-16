import {h, Component} from "../../web_modules/preact.js";
import {Router, route} from "../../web_modules/preact-router.js";
import {createHashHistory} from "../../web_modules/history.js";
import Home from "./pages/home/index.js";
import Connect from "./pages/connect/index.js";
import Search from "./pages/search/index.js";
import configuration2 from "./services/configuration.service.js";
class App extends Component {
  constructor() {
    super();
    this.handleRoute = this.handleRoute.bind(this);
  }
  isConnected() {
    return !!configuration2.user;
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
