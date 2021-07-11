import {h, Component} from "../../../../../_snowpack/pkg/preact.js";
import ReactMarkdown from "../../../../../_snowpack/pkg/react-markdown.js";
import Link from "./link.js";
import ModalDialog from "../../../components/modal-dialog.js";
import ModalInputDialog from "../../../components/modal-input-dialog.js";
import HotKey from "../../../components/hotkey.js";
import PageContentToolbar from "./page-content-toolbar.js";
import "./easymde.min.css.proxy.js";
import "./page-content.css.proxy.js";
export default class PageContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNewPageDialogShown: false,
      isDeletePageDialogShown: false
    };
    this.onNewPageDialogHide = this.onNewPageDialogHide.bind(this);
    this.onDeletePageHide = this.onDeletePageHide.bind(this);
  }
  async toggleNewPageDialog() {
    const isNewPageDialogShown = !this.state.isNewPageDialogShown;
    return new Promise((resolve) => {
      this.setState({isNewPageDialogShown}, resolve());
    });
  }
  async toggleDeletePageDialog() {
    const isDeletePageDialogShown = !this.state.isDeletePageDialogShown;
    return new Promise((resolve) => {
      this.setState({isDeletePageDialogShown}, resolve());
    });
  }
  async onNewPageDialogHide(dialogResult, pageName) {
    await this.toggleNewPageDialog();
    if (dialogResult) {
      await this.props.onNew(pageName);
    }
  }
  async onDeletePageHide(dialogResult) {
    await this.toggleDeletePageDialog();
    if (dialogResult) {
      await this.props.onDelete();
    }
  }
  renderNewPageDialog(isNewPageDialogShown) {
    if (!isNewPageDialogShown) {
      return null;
    }
    return /* @__PURE__ */ h(ModalInputDialog, {
      title: "New page",
      description: "Please enter a name for the new page",
      onHideDialog: this.onNewPageDialogHide
    });
  }
  renderDeletePageDialog(isDeletePageDialogShown) {
    if (!isDeletePageDialogShown) {
      return null;
    }
    return /* @__PURE__ */ h(ModalDialog, {
      title: "DeletePage",
      description: "Do you really want to delete the current page",
      onHideDialog: this.onDeletePageHide
    });
  }
  render({pageName, content, onNew, onEdit, onDelete}, {isNewPageDialogShown, isDeletePageDialogShown}) {
    const canDelete = pageName !== "index";
    return /* @__PURE__ */ h("div", {
      class: "PageContent-container"
    }, this.renderNewPageDialog(isNewPageDialogShown), this.renderDeletePageDialog(isDeletePageDialogShown), /* @__PURE__ */ h(PageContentToolbar, {
      onNewClick: () => this.toggleNewPageDialog(),
      onEditClick: onEdit,
      onDeleteClick: () => this.toggleDeletePageDialog(),
      canDelete
    }), /* @__PURE__ */ h("div", {
      class: "PageContent-body markdown-body"
    }, /* @__PURE__ */ h(ReactMarkdown, {
      children: content,
      components: {a: Link}
    })), /* @__PURE__ */ h(HotKey, {
      keys: ["shift", "e"],
      simultaneous: true,
      onKeysCoincide: onEdit
    }), /* @__PURE__ */ h(HotKey, {
      keys: ["alt", "n"],
      simultaneous: true,
      onKeysCoincide: () => this.toggleNewPageDialog()
    }));
  }
}
