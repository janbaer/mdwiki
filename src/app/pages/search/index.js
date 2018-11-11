import { h, Component } from 'preact';
import Footer from '~/app/components/footer';
import AppTitle from '~/app/components/app-title';
import LoginButton from '~/app/components/login-button';
import ConnectButton from '~/app/components/connect-button';

import SearchResult from './components/search-result';
import SearchInput from './components/search-input';

import configuration from '~/app/services/configuration.service';
import github from '~/app/services/github.service';
import navigator from '~/app/services/navigator.service';

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
    const { user } = configuration;

    return (
      <div class="App-container">
        <header>
          <AppTitle />
          <nav class="App-rightNavbar">
            <ConnectButton />
            <LoginButton user={user} />
          </nav>
        </header>
        <main>
          <div class="SearchPage-container">
            <SearchInput searchTerm={searchTerm} onSearchButtonClicked={this.search} />
            <SearchResult searchResultItems={searchResult.items} onSearchItemClicked={this.onSearchItemClicked} />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
