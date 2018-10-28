import { h, Component } from 'preact';
import { route } from 'preact-router';
import classnames from 'classnames';
import Footer from '~/app/components/footer';
import NavbarButton from '~/app/components/navbar-button';
import LoginButton from '~/app/components/login-button';
import SidebarButton from '~/app/components/sidebar-button';
import Searchbox from '~/app/components/search-box';
import Sidebar from './components/sidebar';

import configuration from '~/app/services/configuration.service';
import github from '~/app/services/github.service';

import GithubSvg from './../../../images/github.svg';

import './index.less';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSidebar: false
    };

    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.navigateToConnectPage = this.navigateToConnectPage.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  async loadPages(user, repository, oauthToken) {
    const pages = await github.loadPages(user, repository, oauthToken);
    if (pages) {
      this.setState({ pages });
    }
  }

  componentDidMount() {
    if (configuration.user) {
      const { user, repository, oauthToken } = configuration;
      this.loadPages(user.loginName, repository, oauthToken);
    }
  }

  toggleSidebar() {
    const showSidebar = !this.state.showSidebar;
    this.setState({ showSidebar });
  }

  changePage(pageName) {
    route(`/?page=${pageName}`);
    if (this.state.showSidebar) {
      this.toggleSidebar();
    }
  }

  navigateToConnectPage() {
    route('/connect');
  }

  render(props, { showSidebar, pages = [] }) {
    const leftSidebarContainerClassname = classnames(
      'Home-sidebarContainer',
      { 'is-shown': showSidebar }
    );

    const user = configuration.user;

    return (
      <div class="App-container">
        <header>
          <nav class="App-leftNavbar">
            <SidebarButton onClick={this.toggleSidebar} showSidebar />
          </nav>
          <h1 class="appTitle">MDWiki</h1>
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
              {configuration.user.userName}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
