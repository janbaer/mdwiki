import { h, Component } from 'preact';
import Footer from '@app/components/footer';
import AppTitle from '@app/components/app-title';
import LoginButton from '@app/components/login-button';
import ConnectButton from '@app/components/connect-button';

import SearchResult from './components/search-result';
import SearchInput from './components/search-input';

import configuration from '@app/services/configuration.service.js';
import github from '@app/services/github.service.js';
import navigator from '@app/services/navigator.service.js';

import './index.less';

export default class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      searchResult: { items: [] }
    };

    this.onSearchItemClicked = this.onSearchItemClicked.bind(this);
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    const searchTerm = this.props.q;
    if (searchTerm) {
      this.search(searchTerm);
    }
  }

  async search(searchTerm) {
    const { user, repository, oauthToken } = configuration;
    const searchResult = await github.searchPages(user.loginName, repository, searchTerm, oauthToken);
    this.setState({ searchTerm, searchResult });
  }

  onSearchItemClicked(pageName) {
    navigator.gotoPage(pageName);
  }

  render(props, { searchTerm, searchResult }) {
    const { user, appVersion } = configuration;
    searchTerm = searchTerm || props.q;

    return (
      <div class="App-container">
        <header class="SearchPage-header">
          <AppTitle />
          <nav>
            <ConnectButton />
            <LoginButton user={user} />
          </nav>
        </header>
        <main>
          <div class="SearchPage-container">
            <SearchInput searchTerm={searchTerm} onSearch={this.search} />
            <SearchResult searchResultItems={searchResult.items} onSearchItemClicked={this.onSearchItemClicked} />
          </div>
        </main>
        <Footer appVersion={appVersion} />
      </div>
    );
  }
}
