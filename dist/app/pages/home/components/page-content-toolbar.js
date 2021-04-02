import {h} from "../../../../../_snowpack/pkg/preact.js";
import classnames from "../../../../../_snowpack/pkg/classnames.js";
import addSvg from "../../../../images/add.svg.proxy.js";
import editSvg from "../../../../images/edit.svg.proxy.js";
import deleteSvg from "../../../../images/delete.svg.proxy.js";
import "./page-content-toolbar.css.proxy.js";
const PageContentToolbar = ({onNewClick, onEditClick, onDeleteClick, canDelete}) => {
  const classname = classnames({"is-disabled": !canDelete});
  return /* @__PURE__ */ h("div", {
    class: "PageContent-toolbar editor-toolbar"
  }, /* @__PURE__ */ h("button", {
    onClick: () => onNewClick()
  }, /* @__PURE__ */ h("img", {
    src: addSvg
  })), /* @__PURE__ */ h("button", {
    onClick: () => onEditClick()
  }, /* @__PURE__ */ h("img", {
    src: editSvg
  })), /* @__PURE__ */ h("button", {
    class: classname,
    disabled: !canDelete,
    onClick: () => onDeleteClick()
  }, /* @__PURE__ */ h("img", {
    src: deleteSvg,
    class: classname
  })));
};
export default PageContentToolbar;
