import { h, Component, Fragment } from 'preact';

import AppTitle from '~/app/components/app-title';
import Footer from '~/app/components/footer';

import configuration from '~/app/services/configuration.service';
import github from '~/app/services/github.service';
import navigator from '~/app/services/navigator.service';

import EVENTS from '~/app/constants/events.constants';

import SelectExistingRepository from './components/select-existing-repository';
import CreateNewRepository from './components/create-new-repository';
import LoginState from './components/login-state';

import './index.less';

export default class ConnectPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      repositories: [],
      selectedRepository: undefined,
      appVersion: configuration.appVersion
    };

    this.changeSelectedRepository = this.changeSelectedRepository.bind(this);
    this.navigateToGithub = this.navigateToGithub.bind(this);

    configuration.eventEmitter.on(EVENTS.APP_VERSION_CHANGED, this.onAppVersionChanged.bind(this));
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

  componentWillUnmount() {
    configuration.eventEmitter.removeListener(EVENTS.APP_VERSION_CHANGED, this.onAppVersionChanged);
  }

  onAppVersionChanged(appVersion) {
    this.setState({ appVersion: appVersion });
  }

  navigateToGithub() {
    window.location.href = configuration.oauthLoginUrl;
  }

  async verifyOauthToken(oauthToken) {
    const user = await github.getAuthenticatedUser(oauthToken);
    if (user) {
      const repositories = await github.getUserRepositories(oauthToken);
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

  canCreateNewRepository(repositoryName) {
    if (!repositoryName || repositoryName === '') {
      return false;
    }

    return !this.state.repositories.some(r => r.name.toLowerCase() === repositoryName.toLowerCase());
  }

  async createNewRepository(repositoryName, isPrivateRepository = false) {
    const { user, oauthToken } = this.state;
    const userName = user.loginName;

    await github.createNewRepository(userName, repositoryName, isPrivateRepository, oauthToken);
    await github.createPage(
      userName, repositoryName, 'index.md', `# ${repositoryName} index page`, 'Create new repository', oauthToken
    );

    configuration.save(user, repositoryName, oauthToken);
    navigator.gotoHome();
  }

  disconnect() {
    configuration.clear();
  }

  render(props, { user, repositories, selectedRepository, appVersion }) {
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

            <LoginState user={user} onLoginClick={this.navigateToGithub} />
            { user &&
              <Fragment>
                <SelectExistingRepository
                  repositories={repositories}
                  selectedRepository={selectedRepository}
                  onSelectedRepositoryChanged={this.changeSelectedRepository}
                  onConnectClick={() => this.connect()}
                />
                <br />
                <CreateNewRepository
                  onCreateClick={repositoryName => this.createNewRepository(repositoryName)}
                  onValidateRepositoryName={repositoryName => this.canCreateNewRepository(repositoryName)}
                />
              </Fragment>
            }
          </div>
        </main>
        <Footer appVersion={appVersion} />
      </div>
    );
  }
}
