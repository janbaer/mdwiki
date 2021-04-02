import {h} from "../../../_snowpack/pkg/preact.js";
import NavbarButton from "./navbar-button.js";
import githubSvg from "../../images/github.svg.proxy.js";
import navigator from "../services/navigator.service.js";
import "./connect-button.css.proxy.js";
const ConnectButton = () => {
  return /* @__PURE__ */ h(NavbarButton, {
    title: "Connect to a GitHub repository",
    onClick: () => navigator.gotoConnect()
  }, /* @__PURE__ */ h("img", {
    src: githubSvg,
    class: "ConnectButton-icon"
  }));
};
export default ConnectButton;
