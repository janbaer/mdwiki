import { h, Component } from 'preact';
import classnames from 'classnames';
import Footer from '~/app/components/footer';
import NavbarButton from '~/app/components/navbar-button';
import LoginButton from '~/app/components/login-button';
import SidebarButton from '~/app/components/sidebar-button';
import Searchbox from '~/app/components/search-box';
import Sidebar from './components/sidebar';
import PageContent from './components/page-content';

import configuration from '~/app/services/configuration.service';
import github from '~/app/services/github.service';
import navigator from '~/app/services/navigator.service';

import GithubSvg from './../../../images/github.svg';

import './index.less';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSidebar: false,
      pages: [],
      page: { content: '' }
    };

    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.navigateToConnectPage = this.navigateToConnectPage.bind(this);
    this.changePage = this.changePage.bind(this);
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
    navigator.gotoConnectPage();
  }

  render(props, { showSidebar, pages = [], page }) {
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
          <h1 class="App-title">
            <a href="/">MDWiki</a>
          </h1>
          <nav class="App-middleNavbar">
            <Searchbox />
          </nav>
          <nav class="App-rightNavbar">
            <NavbarButton
              title="Connect to a GitHub repository"
              onClick={this.navigateToConnectPage}
            >
              <GithubSvg />
            </NavbarButton>
            <LoginButton user={user} />
          </nav>
        </header>
        <main>
          <div class="Home-container">
            <div class={leftSidebarContainerClassname}>
              <Sidebar pages={pages} onClick={this.changePage} />
            </div>
            <div class="Home-contentContainer">
              <PageContent content={page.content} />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
