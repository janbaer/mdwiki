import {h} from "../../../web_modules/preact.js";
import "./modal-dialog.css.proxy.js";
const ModalDialog = ({title, description, isValid = true, onHideDialog, children}) => {
  return /* @__PURE__ */ h("div", {
    class: "ModalDialog-backgroundContainer"
  }, /* @__PURE__ */ h("dialog", {
    class: "ModalDialog-dialog",
    open: true
  }, /* @__PURE__ */ h("h3", null, title), /* @__PURE__ */ h("div", {
    class: "ModalDialog-descriptionLabel"
  }, description), children, /* @__PURE__ */ h("div", {
    class: "ModalDialog-dialogContainer"
  }, /* @__PURE__ */ h("button", {
    class: "button",
    onClick: () => onHideDialog(false)
  }, "Cancel"), /* @__PURE__ */ h("button", {
    class: "button button-primary",
    disabled: !isValid,
    onClick: () => onHideDialog(true)
  }, "Ok"))));
};
export default ModalDialog;
