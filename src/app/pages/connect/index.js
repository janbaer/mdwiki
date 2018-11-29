import { h, Component } from 'preact';
import AppTitle from '~/app/components/app-title';
import Footer from '~/app/components/footer';

import configuration from '~/app/services/configuration.service';
import github from '~/app/services/github.service';
import navigator from '~/app/services/navigator.service';

import RepositoriesSelection from './components/repositories-selection';
import LoginState from './components/login-state';

import './index.less';

export default class ConnectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repositories: [],
      selectedRepository: undefined
    };

    this.changeSelectedRepository = this.changeSelectedRepository.bind(this);
  }

  componentDidMount() {
    if (this.props.logout !== undefined) {
      this.disconnect();
    }

    const token = this.props.token || configuration.oauthToken;
    if (token) {
      this.verifyOauthToken(token);
    }

    if (configuration.repository) {
      this.changeSelectedRepository(configuration.repository);
    }
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
    navigator.gotoHome();
  }

  disconnect() {
    configuration.clear();
  }

  render(props, { user, repositories, selectedRepository }) {
    return (
      <div class="App-container">
        <header class="ConnectPage-header">
          <AppTitle />
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

            <LoginState user={user} onLoginClick={() => this.navigateToGithub()} />
            { user &&
              <RepositoriesSelection
                repositories={repositories}
                selectedRepository={selectedRepository}
                onSelectedRepositoryChanged={this.changeSelectedRepository}
                onConnectClick={() => this.connect()}
              />
            }
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
