import {h} from "../../../_snowpack/pkg/preact.js";
import "./footer.css.proxy.js";
const Footer = ({appVersion}) => /* @__PURE__ */ h("footer", null, /* @__PURE__ */ h("strong", null, "MDWiki ", appVersion), " - Copyright ", new Date().getFullYear(), " by Jan Baer");
export default Footer;
