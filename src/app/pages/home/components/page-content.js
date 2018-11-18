import { h, Component } from 'preact';
import ReactMarkdown from 'react-markdown';
import Link from './link';

import NewPageDialog from './new-page-dialog';

import AddSvg from '../../../../images/add.svg';
import EditSvg from '../../../../images/edit.svg';
import DeleteSvg from '../../../../images/delete.svg';

import './../../../../../node_modules/simplemde/dist/simplemde.min.css';
import './page-content.less';

export default class PageContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNewPageDialogShown: false
    };

    this.onNewPageDialogHide = this.onNewPageDialogHide.bind(this);
  }

  async toggleNewPageDialog() {
    const isNewPageDialogShown = !this.state.isNewPageDialogShown;

    return new Promise(resolve => {
      this.setState({ isNewPageDialogShown }, resolve());
    });
  }

  async onNewPageDialogHide(dialogResult, pageName) {
    if (dialogResult) {
      await this.props.onNew(pageName);
    }
    await this.toggleNewPageDialog();
  }

  renderNewPageDialog(isNewPageDialogShown) {
    if (!isNewPageDialogShown) {
      return null;
    }

    return (
      <NewPageDialog onHideDialog={this.onNewPageDialogHide} />
    );
  }

  render({ content, onNew, onEdit, onDelete }, { isNewPageDialogShown }) {
    return (
      <div class="PageContent-container">
        { this.renderNewPageDialog(isNewPageDialogShown) }
        <div class="PageContent-toolbar editor-toolbar a">
          <a onClick={() => this.toggleNewPageDialog()}><AddSvg /></a>
          <a onClick={onEdit}><EditSvg /></a>
          <a onClick={onDelete}><DeleteSvg /></a>
        </div>
        <div class="PageContent-body markdown-body">
          <ReactMarkdown source={content} renderers={{ link: Link }} />
        </div>
      </div>
    );
  }
}
