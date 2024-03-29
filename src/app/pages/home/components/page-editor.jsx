import { h, Component } from 'preact';
import { SimpleMdeReact } from 'react-simplemde-editor';

import HotKey from '@app/components/hotkey';
import ModalInputDialog from '@app/components/modal-input-dialog';

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
      content: undefined,
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
    if (defaultToolbar[0].name === 'save') { // We've to remove the buttons before we can add it again
      defaultToolbar.splice(0, 2);
    }

    const myButtons = [{
      name: 'save', action: this.onSaveButtonClicked, className: 'fa fa-floppy-o', title: 'Save (Alt+S)'
    }, {
      name: 'cancel', action: this.onCancelEditButtonClicked, className: 'fa fa-times', title: 'Cancel (ESC)'
    }];

    SimpleMDEOptions.toolbar = [...myButtons, ...defaultToolbar];
  }

  _getCodemirrorInstance(codeMirror) {
    this.codeMirror = codeMirror;
  }

  onHideCommitMessageDialog(dialogResult, commitMessage) {
    if (dialogResult) {
      this.props.onSave(this.state.content, commitMessage);
    }
    this.setState({ isCommitMessageDialogShown: false });
  }

  onSaveButtonClicked() {
    const isCommitMessageDialogShown = true;
    let selectedText = '';

    if (this.simpleMDE) {
      selectedText = this.codeMirror.getSelection();
    }
    this.setState({ selectedText, isCommitMessageDialogShown });
  }

  onCancelEditButtonClicked() {
    if (this.state.isCommitMessageDialogShown) {
      return;
    }
    this.props.onCancel();
  }

  changeState(content) {
    this.setState({ content });
  }

  renderCommitMessageDialog(defaultCommitMessage) {
    if (!this.state.isCommitMessageDialogShown) {
      return null;
    }

    return (
      <ModalInputDialog
        title="Save changes"
        description="Please enter a commit message to save your changes"
        inputValue={defaultCommitMessage}
        onHideDialog={this.onHideCommitMessageDialog}
      />
    );
  }

  render(props, state) {
    const content = this.state.content || this.props.content;
    const defaultCommitMessage = state.selectedText || `Change page ${props.pageName}`;

    return (
      <div>
        { this.renderCommitMessageDialog(defaultCommitMessage) }
        <SimpleMdeReact
          ref={simpleMDE => { this.simpleMDE = simpleMDE; }} // eslint-disable-line
          onChange={this.changeState}
          value={content}
          options={SimpleMDEOptions}
          getCodemirrorInstance={codeMirror => this._getCodemirrorInstance(codeMirror)}
        />
        <HotKey
          keys={['alt', 's']}
          simultaneous
          onKeysCoincide={this.onSaveButtonClicked}
        />

        <HotKey
          keys={['escape']}
          simultaneous
          onKeysCoincide={this.onCancelEditButtonClicked}
        />
      </div>
    );
  }
}
