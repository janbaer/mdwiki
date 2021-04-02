import {h, Component} from "../../../_snowpack/pkg/preact.js";
import ModalDialog from "./modal-dialog.js";
export default class ModalInputDialog extends Component {
  constructor(props) {
    super(props);
    const inputValue = props.inputValue || "";
    this.state = {
      inputValue,
      isValid: this.validate(inputValue)
    };
    this.onInputKeyUp = this.onInputKeyUp.bind(this);
    this.onInputFocus = this.onInputFocus.bind(this);
    this.hideDialog = this.hideDialog.bind(this);
  }
  componentDidMount() {
    if (this.input) {
      this.input.focus();
    }
  }
  hideDialog(dialogResult, inputValue) {
    this.props.onHideDialog(dialogResult, dialogResult ? inputValue || this.state.inputValue : void 0);
  }
  validate(inputValue) {
    return !!inputValue;
  }
  async onChangeValue(inputValue) {
    const isValid = this.validate(inputValue);
    return new Promise((resolve) => {
      this.setState({isValid, inputValue}, resolve());
    });
  }
  async onInputKeyUp(e) {
    if (e.key === "Escape") {
      this.hideDialog(false);
      return;
    }
    const inputValue = e.target.value;
    await this.onChangeValue(inputValue);
    if (e.key === "Enter") {
      if (this.validate(inputValue)) {
        this.hideDialog(true, inputValue);
      }
    }
  }
  onInputFocus(e) {
    e.target.select();
  }
  render({title, description}, {inputValue, isValid}) {
    return /* @__PURE__ */ h(ModalDialog, {
      onHideDialog: this.hideDialog,
      isValid,
      title,
      description
    }, /* @__PURE__ */ h("input", {
      class: "input",
      type: "text",
      ref: (input) => {
        this.input = input;
      },
      value: inputValue,
      onKeyUp: this.onInputKeyUp,
      onFocus: this.onInputFocus
    }));
  }
}
