import { h, Component } from 'preact';
import SimpleMDE from 'react-simplemde-editor';

import './page-editor.less';

const SimpleMDEOptions = {
  spellChecker: false,
  status: false,
  previewRender: false,
  autofocus: true,
  toolbar: [
    '|',
    'bold',
    'italic',
    'strikethrough',
    'heading',
    '|',
    'horizontal-rule',
    'quote',
    'unordered-list',
    'ordered-list',
    '|',
    'link',
    'image',
    'code',
    '|',
    'preview',
    'guide',
  ]
};

export default class PageEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: undefined
    };

    this.changeState = this.changeState.bind(this);

    this._prependCustomButtonsToToolbar();
  }

  _prependCustomButtonsToToolbar() {
    const defaultToolbar = [...SimpleMDEOptions.toolbar];
    if (defaultToolbar[0].name === 'save') { // We've to remove the buttons before we can add it again
      defaultToolbar.splice(0, 2);
    }

    const myButtons = [{
      name: 'save', action: () => this.onSaveButtonClicked(), className: 'fa fa-floppy-o', title: 'Save (Alt+S)'
    }, {
      name: 'cancel', action: () => this.onCancelEditButtonClicked(), className: 'fa fa-times', title: 'Cancel (ESC)'
    }];

    SimpleMDEOptions.toolbar = [...myButtons, ...defaultToolbar];
  }

  componentDidMount() {
  }

  onSaveButtonClicked() {
    this.props.onSave(this.state.markdown);
  }

  onCancelEditButtonClicked() {
    this.props.onCancel();
  }

  changeState(markdown) {
    this.setState({ markdown });
  }

  render(props, state) {
    const markdown = this.state.markdown || this.props.markdown;

    return (
      <SimpleMDE
        ref={simpleMDE => this.simpleMDE = simpleMDE ? simpleMDE.simplemde : undefined} // eslint-disable-line
        onChange={this.changeState}
        value={markdown}
        options={SimpleMDEOptions}
      />
    );
  }
}
