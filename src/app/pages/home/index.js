import { h, Component } from 'preact';
import classnames from 'classnames';
import Footer from '~/app/components/footer';
import AppTitle from '~/app/components/app-title';
import ConnectButton from '~/app/components/connect-button';
import LoginButton from '~/app/components/login-button';
import SidebarButton from '~/app/components/sidebar-button';
import Searchbox from '~/app/components/search-box';
import Sidebar from './components/sidebar';
import PageContent from './components/page-content';
import PageEditor from './components/page-editor';

import configuration from '~/app/services/configuration.service';
import github from '~/app/services/github.service';
import navigator from '~/app/services/navigator.service';

import './index.less';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSidebar: false,
      pages: [],
      page: { content: '' },
      editMode: false,
      isNewPageDialogShown: false
    };

    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.navigateToConnectPage = this.navigateToConnectPage.bind(this);
    this.changePage = this.changePage.bind(this);
    this.startSearch = this.startSearch.bind(this);

    this.newPage = this.newPage.bind(this);
    this.editPage = this.editPage.bind(this);
    this.deletePage = this.deletePage.bind(this);
    this.savePage = this.savePage.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
  }

  startSearch(searchTerm) {
    navigator.gotoSearch(searchTerm);
  }

  async loadPages(user, repository, oauthToken) {
    const pages = await github.getPages(user, repository, oauthToken);
    if (pages) {
      this.setState({ pages });
    }
  }

  async loadPage(pageName = 'index') {
    const { user, repository, oauthToken } = configuration;

    const page = await github.getPage(user.loginName, repository, pageName, oauthToken);
    if (page) {
      this.setState({ page });
    }
  }

  componentDidMount() {
    if (configuration.user) {
      const { user, repository, oauthToken } = configuration;
      this.loadPages(user.loginName, repository, oauthToken);

      const { page } = this.props;
      this.loadPage(page);
    }
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (nextProps.page !== this.props.page) {
      this.loadPage(nextProps.page);
    }
  }

  toggleSidebar() {
    const showSidebar = !this.state.showSidebar;
    this.setState({ showSidebar });
  }

  changePage(pageName) {
    navigator.gotoPage(pageName);
    if (this.state.showSidebar) {
      this.toggleSidebar();
    }
  }

  navigateToConnectPage() {
    navigator.gotoConnect();
  }

  toggleEditMode() {
    const editMode = !this.state.editMode;
    this.setState({ editMode });
  }

  editPage() {
    this.toggleEditMode();
  }

  cancelEdit() {
    this.toggleEditMode();
  }

  deletePage() {
  }

  async newPage(pageName) {
    const { user, repository, oauthToken } = configuration;
    const commitMessage = `Create new page ${pageName}`;
    const content = `# ${pageName}`;
    pageName = pageName.replace(/\s/g, '_');

    await github.createOrUpdatePage(
      user.loginName,
      repository,
      pageName,
      commitMessage,
      content,
      undefined,
      oauthToken
    );

    await this.loadPages(user.loginName, repository, oauthToken);
    navigator.gotoPage(pageName);
  }

  async savePage(commitMessage, markdown) {
    const { user, repository, oauthToken } = configuration;
    const { page } = this.state;

    const updatedPage = await github.createOrUpdatePage(
      user.loginName, repository, page.name, commitMessage, markdown, page.sha, oauthToken
    );

    this.setState({ page: updatedPage }, () => this.toggleEditMode());
  }

  renderPageContent(content) {
    return (
      <PageContent
        content={content}
        onNew={this.newPage}
        onEdit={this.editPage}
        onDelete={this.deletePage}
      />
    );
  }

  renderPageEditor(pageName, markdown) {
    return (
      <PageEditor
        pageName={pageName}
        markdown={markdown}
        onSave={this.savePage}
        onCancel={this.cancelEdit}
      />
    );
  }

  render(props, { showSidebar, pages = [], page, editMode }) {
    const leftSidebarContainerClassname = classnames(
      'Home-sidebarContainer',
      { 'is-shown': showSidebar }
    );

    const user = configuration.user;

    return (
      <div class="App-container">
        <header>
          <nav class="App-leftNavbar">
            <SidebarButton onClick={this.toggleSidebar} showSidebar={showSidebar} />
          </nav>
          <AppTitle />
          <nav class="App-middleNavbar">
            <Searchbox onSearch={this.startSearch} />
          </nav>
          <nav class="App-rightNavbar">
            <ConnectButton />
            <LoginButton user={user} />
          </nav>
        </header>
        <main>
          <div class="Home-container">
            <div class={leftSidebarContainerClassname}>
              <Sidebar pages={pages} onClick={this.changePage} />
            </div>
            <div class="Home-contentContainer">
              { !editMode && this.renderPageContent(page.content) }
              { editMode && this.renderPageEditor(page.name, page.content) }
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
