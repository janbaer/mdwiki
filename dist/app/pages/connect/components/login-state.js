import {h} from "../../../../../web_modules/preact.js";
import githubSvg from "../../../../images/github.svg.proxy.js";
const LoginState = ({user, onLoginClick}) => {
  if (user) {
    return /* @__PURE__ */ h("div", {
      class: "ConnectPage-userContainer"
    }, /* @__PURE__ */ h("h3", null, "You're logged in as:"), /* @__PURE__ */ h("img", {
      class: "ConnectPage-userImage",
      src: user.avatarUrl,
      alt: user.userName
    }), /* @__PURE__ */ h("span", {
      class: "ConnectPage-userName"
    }, user.userName));
  }
  return /* @__PURE__ */ h("button", {
    class: "button button-primary ConnectPage-githubButton",
    onClick: () => onLoginClick()
  }, /* @__PURE__ */ h("img", {
    src: githubSvg
  }), "Login with using Github");
};
export default LoginState;
