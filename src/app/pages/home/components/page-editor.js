import { h, Component } from 'preact';
import SimpleMDE from 'react-simplemde-editor';

import CommitMessageDialog from './commit-message-dialog';

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
      markdown: undefined,
      isCommitMessageDialogShown: false
    };

    this.changeState = this.changeState.bind(this);
    this.onHideCommitMessageDialog = this.onHideCommitMessageDialog.bind(this);

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

  onHideCommitMessageDialog(dialogResult, commitMessage) {
    if (dialogResult) {
      this.props.onSave(commitMessage, this.state.markdown);
    }
    this.setState({ isCommitMessageDialogShown: false });
  }

  onSaveButtonClicked() {
    const isCommitMessageDialogShown = true;
    let selectedText = '';

    if (this.simpleMDE) {
      selectedText = this.simpleMDE.simpleMde.codemirror.getSelection();
    }
    this.setState({ selectedText, isCommitMessageDialogShown });
  }

  onCancelEditButtonClicked() {
    this.props.onCancel();
  }

  changeState(markdown) {
    this.setState({ markdown });
  }

  renderCommitMessageDialog(defaultCommitMessage) {
    if (!this.state.isCommitMessageDialogShown) {
      return null;
    }

    return (
      <CommitMessageDialog message={defaultCommitMessage} onHideDialog={this.onHideCommitMessageDialog} />
    );
  }

  render(props, state) {
    const markdown = this.state.markdown || this.props.markdown;
    const defaultCommitMessage = state.selectedText || `Change page ${props.pageName}`;

    return (
      <div>
        { this.renderCommitMessageDialog(defaultCommitMessage) }
        <SimpleMDE
          ref={simpleMDE => { this.simpleMDE = simpleMDE; }} // eslint-disable-line
          onChange={this.changeState}
          value={markdown}
          options={SimpleMDEOptions}
        />
      </div>
    );
  }
}
