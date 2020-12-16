import {h} from "../../../../../web_modules/preact.js";
import navigator2 from "../../../services/navigator.service.js";
import "./link.css.proxy.js";
function isExternalLink(href) {
  if (href) {
    return href.startsWith("http");
  }
  return true;
}
;
const Link = ({href, children}) => {
  if (isExternalLink(href)) {
    return /* @__PURE__ */ h("a", {
      href,
      target: "_blank",
      rel: "noopener noreferrer"
    }, children);
  }
  const pageName = href.substr(1);
  return /* @__PURE__ */ h("button", {
    type: "button",
    className: "Link-button",
    onClick: () => navigator2.gotoPage(pageName)
  }, children);
};
export default Link;