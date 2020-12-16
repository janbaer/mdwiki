import {h} from "../../../web_modules/preact.js";
import hamburgerMenuSvg from "../../images/hamburger-menu.svg.proxy.js";
import "./sidebar-button.css.proxy.js";
const SidebarButton = ({showSidebar, onClick}) => {
  return /* @__PURE__ */ h("button", {
    class: "SidebarButton-button",
    title: "Add",
    onClick
  }, /* @__PURE__ */ h("img", {
    src: hamburgerMenuSvg
  }));
};
export default SidebarButton;
