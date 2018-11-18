import { h, Component } from 'preact';

import './new-page-dialog.less';

export default class NewPageDialog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageName: '',
      isValid: false
    };

    this.onInputKeyUp = this.onInputKeyUp.bind(this);
    this.onInputFocus = this.onInputFocus.bind(this);
  }

  componentDidMount() {
    if (this.input) {
      this.input.focus();
    }
  }

  hide(dialogResult, pageName) {
    this.props.onHideDialog(dialogResult, pageName || this.state.pageName);
  }

  validate(pageName) {
    return !!pageName;
  }

  async onChangeValue(pageName) {
    const isValid = this.validate(pageName);
    return new Promise(resolve => {
      this.setState({ isValid, pageName }, resolve());
    });
  }

  async onInputKeyUp(e) {
    if (e.key === 'Escape') {
      this.hide(false);
      return;
    }

    const pageName = e.target.value;
    await this.onChangeValue(pageName);

    if (e.key === 'Enter') {
      if (this.validate(pageName)) {
        this.hide(true, pageName);
      }
    }
  }

  onInputFocus(e) {
    e.target.select();
  }

  render(props, { pageName, isValid }) {
    return (
      <div class="NewPageDialog-backgroundContainer">
        <dialog class="NewPageDialog-dialog" open>
          <h3>New page</h3>

          <div>Please enter a name for the new page</div>

          <input
            class="uk-input"
            type="text"
            ref={input => { this.input = input; }}
            value={pageName}
            onKeyUp={this.onInputKeyUp}
            onFocus={this.onInputFocus}
          />

          <div class="NewPageDialog-dialogContainer">
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
