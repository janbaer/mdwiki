import {h} from "../../../web_modules/preact.js";
import {route} from "../../../web_modules/preact-router.js";
import NavbarButton from "./navbar-button.js";
import "./login-button.css.proxy.js";
const LoginButton = ({user = {}}) => {
  return /* @__PURE__ */ h(NavbarButton, {
    title: `Your're logged in as ${user.userName}`,
    onClick: () => route("/connect?logout")
  }, /* @__PURE__ */ h("img", {
    class: "LoginButton-userImage",
    src: user.avatarUrl,
    alt: user.userName
  }));
};
export default LoginButton;
