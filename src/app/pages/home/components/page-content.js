import { h, Component } from 'preact';
import ReactMarkdown from 'react-markdown';
import Link from './link';

import ModalDialog from '~/app/components/modal-dialog';
import ModalInputDialog from '~/app/components/modal-input-dialog';

import PageContentToolbar from './page-content-toolbar';

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
      <ModalInputDialog
        title="New page"
        description="Please enter a name for the new page"
        onHideDialog={this.onNewPageDialogHide}
      />
    );
  }

  renderDeletePageDialog(isDeletePageDialogShown) {
    if (!isDeletePageDialogShown) {
      return null;
    }

    return (
      <ModalDialog
        title="DeletePage"
        description="Do you really want to delete the current page"
        onHideDialog={this.onDeletePageHide}
      />
    );
  }

  render({ pageName, content, onNew, onEdit, onDelete }, { isNewPageDialogShown, isDeletePageDialogShown }) {
    const canDelete = pageName !== 'index';

    return (
      <div class="PageContent-container">
        { this.renderNewPageDialog(isNewPageDialogShown) }
        { this.renderDeletePageDialog(isDeletePageDialogShown) }
        <PageContentToolbar
          onNewClick={() => this.toggleNewPageDialog()}
          onEditClick={onEdit}
          onDeleteClick={() => this.toggleDeletePageDialog()}
          canDelete={canDelete}
        />
        <div class="PageContent-body markdown-body">
          <ReactMarkdown source={content} renderers={{ link: Link }} />
        </div>
      </div>
    );
  }
}
