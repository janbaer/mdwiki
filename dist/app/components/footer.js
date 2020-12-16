import {h} from "../../../web_modules/preact.js";
import "./footer.css.proxy.js";
const Footer = ({appVersion}) => /* @__PURE__ */ h("footer", null, /* @__PURE__ */ h("strong", null, "MDWiki ", appVersion), "\xA0-\xA0Copyright ", new Date().getFullYear(), " by Jan Baer");
export default Footer;
