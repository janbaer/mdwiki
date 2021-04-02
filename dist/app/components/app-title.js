import {h} from "../../../_snowpack/pkg/preact.js";
import logoSvg from "../../images/wiki.svg.proxy.js";
import "./app-title.css.proxy.js";
const AppTitle = () => {
  return /* @__PURE__ */ h("a", {
    href: "/",
    title: "MDWiki"
  }, /* @__PURE__ */ h("img", {
    src: logoSvg,
    class: "AppTitle-logoSvg"
  }));
};
export default AppTitle;
