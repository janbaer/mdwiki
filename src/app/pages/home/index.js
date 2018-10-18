import { h, Component } from 'preact';
import classnames from 'classnames';
import Footer from '~/app/components/footer';
import NavbarButton from '~/app/components/navbar-button';
import SidebarButton from '~/app/components/sidebar-button';
import Searchbox from '~/app/components/search-box';

import AccountSvg from './../../../images/account.svg';
import GithubSvg from './../../../images/github.svg';

import './index.less';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSidebar: false
    };

    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar() {
    const showSidebar = !this.state.showSidebar;
    this.setState({ showSidebar });
  }

  render(props, { showSidebar }) {
    const leftSidebarContainerClassname = classnames(
      'Home-sidebarContainer',
      { 'is-shown': showSidebar }
    );

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
            <NavbarButton title="Github"><GithubSvg /></NavbarButton>
            <NavbarButton title="Login"><AccountSvg /></NavbarButton>
          </nav>
        </header>
        <main>
          <div class="Home-container">
            <div class={leftSidebarContainerClassname}>
              Sidebar
            </div>
            <div class="Home-contentContainer">
              Content
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
