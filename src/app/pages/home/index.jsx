import { h, Component } from 'preact';
import { Suspense, lazy } from 'preact/compat';
import classnames from 'classnames';
import Footer from '@app/components/footer';
import AppTitle from '@app/components/app-title';
import ConnectButton from '@app/components/connect-button';
import LoginButton from '@app/components/login-button';
import SidebarButton from '@app/components/sidebar-button';
import Searchbox from '@app/components/search-box';

import Sidebar from './components/sidebar';
import PageContent from './components/page-content';

import configuration from '@app/services/configuration.service';
import navigator from '@app/services/navigator.service';

import PageStore from '@app/stores/page.store';

import EVENTS from '@app/constants/events.constants';

import './index.less';

const PageEditor = lazy(() => import('./components/page-editor'));

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.store = new PageStore();
    const { pages, page } = this.store;

    this.state = {
      showSidebar: false,
      pages,
      page,
      isInEditMode: false,
      isNewPageDialogShown: false,
      appVersion: configuration.appVersion,
    };

    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.onGotoPage = this.onGotoPage.bind(this);
    this.onStartSearch = this.onStartSearch.bind(this);
    this.onNewPage = this.onNewPage.bind(this);
    this.onEditPage = this.onEditPage.bind(this);
    this.onDeletePage = this.onDeletePage.bind(this);
    this.onSavePage = this.onSavePage.bind(this);
    this.onCancelEditPage = this.onCancelEditPage.bind(this);

    configuration.eventEmitter.on(EVENTS.APP_VERSION_CHANGED, this.onAppVersionChanged.bind(this));
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (nextProps.page !== this.props.page) {
      this.loadPage(nextProps.page);
    }
  }

  componentWillUnmount() {
    configuration.eventEmitter.removeListener(EVENTS.APP_VERSION_CHANGED, this.onAppVersionChanged);
  }

  onAppVersionChanged(appVersion) {
    this.setState({ appVersion: appVersion });
  }

  onStartSearch(searchTerm) {
    navigator.gotoSearch(searchTerm);
  }

  async loadPages() {
    const pages = await this.store.loadPages();
    this.setState({ pages });
  }

  async loadPage(pageName = 'index') {
    const page = await this.store.loadPage(pageName);
    if (!page) {
      navigator.gotoConnect();
      return;
    }

    this.setState({ page });
  }

  async componentDidMount() {
    if (configuration.user) {
      await this.loadPages();

      const { page } = this.props;
      await this.loadPage(page);
    }
  }

  toggleSidebar() {
    const showSidebar = !this.state.showSidebar;
    this.setState({ showSidebar });
  }

  onGotoPage(pageName) {
    navigator.gotoPage(pageName);
    if (this.state.showSidebar) {
      this.toggleSidebar();
    }
  }

  toggleEditMode() {
    const isInEditMode = !this.state.isInEditMode;
    this.setState({ isInEditMode });
  }

  onEditPage() {
    this.toggleEditMode();
  }

  onCancelEditPage() {
    this.toggleEditMode();
  }

  async onDeletePage() {
    await this.store.deletePage();
    const nextPageName = this.store.pages.length > 0 ? this.store.pages[0].name : 'index';
    navigator.gotoPage(nextPageName);
  }

  async onNewPage(pageName) {
    const page = await this.store.createPage(pageName);
    navigator.gotoPage(page.name);
  }

  async onSavePage(content, commitMessage) {
    const page = await this.store.updatePage(content, commitMessage);
    this.setState({ page }, () => this.toggleEditMode());
  }

  renderPageContent(pageName, content) {
    return (
      <PageContent
        pageName={pageName}
        content={content}
        onNew={this.onNewPage}
        onEdit={this.onEditPage}
        onDelete={this.onDeletePage}
      />
    );
  }

  renderPageEditor(pageName, content) {
    return (
      <Suspense fallback={<div>Loading Markdown-editor...</div>}>
        <PageEditor
          pageName={pageName}
          content={content}
          onSave={this.onSavePage}
          onCancel={this.onCancelEditPage}
        />
      </Suspense>
    );
  }

  render(props, { showSidebar, isInEditMode, pages, page, appVersion }) {
    const leftSidebarContainerClassname = classnames(
      'HomePage-sidebarContainer',
      { 'is-shown': showSidebar }
    );

    const user = configuration.user;

    return (
      <div class="App-container">
        <header class="HomePage-header">
          <nav class="HomePage-leftNavbar">
            <SidebarButton onClick={this.toggleSidebar} showSidebar={showSidebar} />
          </nav>
          <AppTitle />
          <nav>
            <Searchbox onSearch={this.onStartSearch} />
          </nav>
          <nav class="HomePage-rightNavbar">
            <ConnectButton />
            <LoginButton user={user} />
          </nav>
        </header>
        <main>
          <div class="HomePage-container">
            <div class={leftSidebarContainerClassname}>
              <Sidebar pages={pages} onClick={this.onGotoPage} />
            </div>
            <div class="HomePage-contentContainer">
              { !isInEditMode && this.renderPageContent(page.name, page.content) }
              { isInEditMode && this.renderPageEditor(page.name, page.content) }
            </div>
          </div>
        </main>
        <Footer appVersion={appVersion} />
      </div>
    );
  }
}
