import {h} from "../../../_snowpack/pkg/preact.js";
import "./navbar-button.css.proxy.js";
const NavbarButton = ({children, title, onClick}) => {
  return /* @__PURE__ */ h("button", {
    class: "NavbarButton-button",
    title,
    onClick
  }, children);
};
export default NavbarButton;
