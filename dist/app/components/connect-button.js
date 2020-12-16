import {h} from "../../../web_modules/preact.js";
import NavbarButton from "./navbar-button.js";
import githubSvg from "../../images/github.svg.proxy.js";
import navigator2 from "../services/navigator.service.js";
import "./connect-button.css.proxy.js";
const ConnectButton = () => {
  return /* @__PURE__ */ h(NavbarButton, {
    title: "Connect to a GitHub repository",
    onClick: () => navigator2.gotoConnect()
  }, /* @__PURE__ */ h("img", {
    src: githubSvg,
    class: "ConnectButton-icon"
  }));
};
export default ConnectButton;
