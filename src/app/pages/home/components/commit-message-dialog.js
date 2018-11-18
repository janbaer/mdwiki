import { h, Component } from 'preact';

import './commit-message-dialog.less';

export default class CommitMessageDialog extends Component {
  constructor(props) {
    super(props);

    const { message } = this.props;

    this.state = {
      message,
      isValid: true
    };

    this.onInputKeyUp = this.onInputKeyUp.bind(this);
    this.onInputFocus = this.onInputFocus.bind(this);
  }

  componentDidMount() {
    if (this.input) {
      this.input.focus();
    }
  }

  hide(dialogResult, message) {
    this.props.onHideDialog(dialogResult, message || this.state.message);
  }

  validate(message) {
    return !!message;
  }

  async onChangeValue(message) {
    const isValid = this.validate(message);
    return new Promise(resolve => {
      this.setState({ isValid, message }, resolve());
    });
  }

  async onInputKeyUp(e) {
    if (e.key === 'Escape') {
      this.hide(false);
      return;
    }

    const message = e.target.value;
    await this.onChangeValue(message);

    if (e.key === 'Enter') {
      if (this.validate(message)) {
        this.hide(true, message);
      }
    }
  }

  onInputFocus(e) {
    e.target.select();
  }

  render(props, { message, isValid }) {
    return (
      <div class="CommitMessageDialog-backgroundContainer">
        <dialog class="CommitMessageDialog-dialog" open>
          <h3>Save changes</h3>

          <div>Please enter a commit message to save your changes</div>

          <input
            class="uk-input"
            type="text"
            ref={input => { this.input = input; }}
            value={message}
            onKeyUp={this.onInputKeyUp}
            onFocus={this.onInputFocus}
          />

          <div class="CommitMessageDialog-dialogContainer">
            <button class="uk-button button" onClick={() => this.hide(false)}>Cancel</button>
            <button
              class="uk-button uk-button-primary button"
              disabled={!isValid}
              onClick={() => this.hide(true)}>
              Ok
            </button>
          </div>
        </dialog>
      </div>
    );
  }
}
