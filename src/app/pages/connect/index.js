import { h, Component } from 'preact';
import { route } from 'preact-router';
import configuration from '~/app/services/configuration.service';
import github from '~/app/services/github.service';
import Footer from '~/app/components/footer';
import GithubSvg from './../../../images/github.svg';

import './index.less';

export default class ConnectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repositories: [],
      selectedRepository: undefined
    };
  }

  navigateToGithub() {
    window.location.href = configuration.oauthLoginUrl;
  }

  async verifyOauthToken(oauthToken) {
    const user = await github.getAuthenticatedUser(oauthToken);
    if (user) {
      const repositories = await github.getUserRepositories(user.loginName, oauthToken);
      this.setState({ user, repositories, oauthToken });
    }
  }

  changeSelectedRepository(selectedRepository) {
    this.setState({ selectedRepository });
  }

  connect() {
    const { user, selectedRepository, oauthToken } = this.state;
    configuration.save(user, selectedRepository, oauthToken);
    route('/');
  }

  disconnect() {
    configuration.clear();
  }

  componentDidMount() {
    if (this.props.logout !== undefined) {
      this.disconnect();
    }

    const token = this.props.token || configuration.oauthToken;
    if (token) {
      this.verifyOauthToken(token);
    }
  }

  renderLogin(user) {
    if (user) {
      return (
        <div class="ConnectPage-userContainer">
          <h3>You're logged in as:</h3>
          <img class="ConnectPage-userImage" src={user.avatarUrl} alt={user.userName} />
          <span class="ConnectPage-userName">{user.userName}</span>
        </div>
      );
    }

    return (
      <div>
        <div>
          <button
            class="uk-button uk-button-primary ConnectPage-githubButton"
            onClick={() => this.navigateToGithub()}
          >
            <GithubSvg />
            Login with using Github
          </button>
        </div>
      </div>
    );
  }

  renderRepository(repository) {
    return (
      <option value={repository.name}>{repository.name}</option>
    );
  }

  renderRepositories(repositories = []) {
    return (
      <select
        class="uk-select"
        onChange={e => this.changeSelectedRepository(e.target.value)}
      >
        <option disabled selected value> -- select a repository -- </option>
        { repositories.map(this.renderRepository)}
      </select>
    );
  }

  renderConnect(user, repositories, selectedRepository) {
    if (!user) {
      return null;
    }

    return (
      <div>
        <h3>Select an existing repository where the data should be saved</h3>
        <form onSubmit={e => e.preventDefault()}>
          { this.renderRepositories(repositories) }
          <br /><br />
          <button
            class="uk-button uk-button-primary"
            onClick={() => this.connect()}
            disabled={!selectedRepository}
          >
            Connect
          </button>
        </form>
      </div>
    );
  }

  render(props, { user, repositories, selectedRepository }) {
    return (
      <div class="App-container">
        <header>
          <h1 class="appTitle">MDWiki</h1>
        </header>
        <main>
          <div class="ConnectPage-contentContainer">
            <h2>Login and connect</h2>

            <p class="ConnectPage-description">
              To be able to work with MDWiki you have to login with your <strong>GitHub</strong> account
              and then select a Git repository where the data should be saved.

              MDWiki will create for each page a new file in the repository
              and each change will be saved with a new commit.

              And since the data will be saved on <strong>Github</strong> as <strong>Markdown</strong> files,
              you can use and change it also outside from MDWiki.
            </p>

            { this.renderLogin(user) }
            { this.renderConnect(user, repositories, selectedRepository) }
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
