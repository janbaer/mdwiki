import {h, Component} from "../../../../../_snowpack/pkg/preact.js";
import SimpleMDE from "../../../../../_snowpack/pkg/react-simplemde-editor.js";
import HotKey from "../../../components/hotkey.js";
import ModalInputDialog from "../../../components/modal-input-dialog.js";
import "./page-editor.css.proxy.js";
const SimpleMDEOptions = {
  spellChecker: false,
  status: false,
  previewRender: false,
  autofocus: true,
  toolbar: [
    "|",
    "bold",
    "italic",
    "strikethrough",
    "heading",
    "|",
    "horizontal-rule",
    "quote",
    "unordered-list",
    "ordered-list",
    "|",
    "link",
    "image",
    "code",
    "|",
    "preview",
    "guide"
  ]
};
export default class PageEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: void 0,
      isCommitMessageDialogShown: false
    };
    this.changeState = this.changeState.bind(this);
    this.onHideCommitMessageDialog = this.onHideCommitMessageDialog.bind(this);
    this.onCancelEditButtonClicked = this.onCancelEditButtonClicked.bind(this);
    this.onSaveButtonClicked = this.onSaveButtonClicked.bind(this);
    this._prependCustomButtonsToToolbar();
  }
  _prependCustomButtonsToToolbar() {
    const defaultToolbar = [...SimpleMDEOptions.toolbar];
    if (defaultToolbar[0].name === "save") {
      defaultToolbar.splice(0, 2);
    }
    const myButtons = [{
      name: "save",
      action: this.onSaveButtonClicked,
      className: "fa fa-floppy-o",
      title: "Save (Alt+S)"
    }, {
      name: "cancel",
      action: this.onCancelEditButtonClicked,
      className: "fa fa-times",
      title: "Cancel (ESC)"
    }];
    SimpleMDEOptions.toolbar = [...myButtons, ...defaultToolbar];
  }
  onHideCommitMessageDialog(dialogResult, commitMessage) {
    if (dialogResult) {
      this.props.onSave(this.state.content, commitMessage);
    }
    this.setState({isCommitMessageDialogShown: false});
  }
  onSaveButtonClicked() {
    const isCommitMessageDialogShown = true;
    let selectedText = "";
    if (this.simpleMDE) {
      selectedText = this.simpleMDE.simpleMde.codemirror.getSelection();
    }
    this.setState({selectedText, isCommitMessageDialogShown});
  }
  onCancelEditButtonClicked() {
    if (this.state.isCommitMessageDialogShown) {
      return;
    }
    this.props.onCancel();
  }
  changeState(content) {
    this.setState({content});
  }
  renderCommitMessageDialog(defaultCommitMessage) {
    if (!this.state.isCommitMessageDialogShown) {
      return null;
    }
    return /* @__PURE__ */ h(ModalInputDialog, {
      title: "Save changes",
      description: "Please enter a commit message to save your changes",
      inputValue: defaultCommitMessage,
      onHideDialog: this.onHideCommitMessageDialog
    });
  }
  render(props, state) {
    const content = this.state.content || this.props.content;
    const defaultCommitMessage = state.selectedText || `Change page ${props.pageName}`;
    return /* @__PURE__ */ h("div", null, this.renderCommitMessageDialog(defaultCommitMessage), /* @__PURE__ */ h(SimpleMDE, {
      ref: (simpleMDE) => {
        this.simpleMDE = simpleMDE;
      },
      onChange: this.changeState,
      value: content,
      options: SimpleMDEOptions
    }), /* @__PURE__ */ h(HotKey, {
      keys: ["alt", "s"],
      simultaneous: true,
      onKeysCoincide: this.onSaveButtonClicked
    }), /* @__PURE__ */ h(HotKey, {
      keys: ["escape"],
      simultaneous: true,
      onKeysCoincide: this.onCancelEditButtonClicked
    }));
  }
}
