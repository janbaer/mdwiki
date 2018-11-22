import { h, Component } from 'preact';
import ReactMarkdown from 'react-markdown';
import Link from './link';

import NewPageDialog from './new-page-dialog';
import DeletePageDialog from './delete-page-dialog';

import AddSvg from '../../../../images/add.svg';
import EditSvg from '../../../../images/edit.svg';
import DeleteSvg from '../../../../images/delete.svg';

import './../../../../../node_modules/simplemde/dist/simplemde.min.css';
import './page-content.less';

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

    return new Promise(resolve => {
      this.setState({ isNewPageDialogShown }, resolve());
    });
  }

  async toggleDeletePageDialog() {
    const isDeletePageDialogShown = !this.state.isDeletePageDialogShown;

    return new Promise(resolve => {
      this.setState({ isDeletePageDialogShown }, resolve());
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

    return (
      <NewPageDialog onHideDialog={this.onNewPageDialogHide} />
    );
  }

  renderDeletePageDialog(isDeletePageDialogShown) {
    if (!isDeletePageDialogShown) {
      return null;
    }

    return (
      <DeletePageDialog onHideDialog={this.onDeletePageHide} />
    );
  }

  renderDeleteButton(pageName) {
    const isDisabled = pageName === 'index';
    return (
      <button
        disabled={isDisabled}
        onClick={() => this.toggleDeletePageDialog()}
      >
        <DeleteSvg />
      </button>
    );
  }

  render({ pageName, content, onNew, onEdit, onDelete }, { isNewPageDialogShown, isDeletePageDialogShown }) {
    return (
      <div class="PageContent-container">
        { this.renderNewPageDialog(isNewPageDialogShown) }
        { this.renderDeletePageDialog(isDeletePageDialogShown) }
        <div class="PageContent-toolbar editor-toolbar a">
          <a onClick={() => this.toggleNewPageDialog()}><AddSvg /></a>
          <a onClick={onEdit}><EditSvg /></a>
          { this.renderDeleteButton(pageName) }
        </div>
        <div class="PageContent-body markdown-body">
          <ReactMarkdown source={content} renderers={{ link: Link }} />
        </div>
      </div>
    );
  }
}
