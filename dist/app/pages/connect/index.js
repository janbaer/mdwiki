import {h, Component, Fragment} from "../../../../_snowpack/pkg/preact.js";
import AppTitle from "../../components/app-title.js";
import Footer from "../../components/footer.js";
import configuration from "../../services/configuration.service.js";
import github from "../../services/github.service.js";
import navigator from "../../services/navigator.service.js";
import EVENTS from "../../constants/events.constants.js";
import SelectExistingRepository from "./components/select-existing-repository.js";
import CreateNewRepository from "./components/create-new-repository.js";
import LoginState from "./components/login-state.js";
import "./index.css.proxy.js";
export default class ConnectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repositories: [],
      selectedRepository: void 0,
      appVersion: configuration.appVersion
    };
    this.changeSelectedRepository = this.changeSelectedRepository.bind(this);
    this.navigateToGithub = this.navigateToGithub.bind(this);
    configuration.eventEmitter.on(EVENTS.APP_VERSION_CHANGED, this.onAppVersionChanged.bind(this));
  }
  componentDidMount() {
    if (this.props.logout !== void 0) {
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
    this.setState({appVersion});
  }
  navigateToGithub() {
    window.location.href = configuration.oauthLoginUrl;
  }
  async verifyOauthToken(oauthToken) {
    const user = await github.getAuthenticatedUser(oauthToken);
    if (user) {
      const repositories = await github.getUserRepositories(oauthToken);
      this.setState({user, repositories, oauthToken});
    }
  }
  changeSelectedRepository(selectedRepository) {
    this.setState({selectedRepository});
  }
  connect() {
    const {user, selectedRepository, oauthToken} = this.state;
    configuration.save(user, selectedRepository, oauthToken);
    navigator.gotoHome();
  }
  canCreateNewRepository(repositoryName) {
    if (!repositoryName || repositoryName === "") {
      return false;
    }
    return !this.state.repositories.some((r) => r.name.toLowerCase() === repositoryName.toLowerCase());
  }
  async createNewRepository(repositoryName, isPrivateRepository = false) {
    const {user, oauthToken} = this.state;
    const userName = user.loginName;
    await github.createNewRepository(userName, repositoryName, isPrivateRepository, oauthToken);
    await github.createPage(userName, repositoryName, "index.md", `# ${repositoryName} index page`, "Create new repository", oauthToken);
    configuration.save(user, repositoryName, oauthToken);
    navigator.gotoHome();
  }
  disconnect() {
    configuration.clear();
  }
  render(props, {user, repositories, selectedRepository, appVersion}) {
    return /* @__PURE__ */ h("div", {
      class: "App-container"
    }, /* @__PURE__ */ h("header", {
      class: "ConnectPage-header"
    }, /* @__PURE__ */ h(AppTitle, null)), /* @__PURE__ */ h("main", null, /* @__PURE__ */ h("div", {
      class: "ConnectPage-contentContainer"
    }, /* @__PURE__ */ h("h2", null, "Login and connect"), /* @__PURE__ */ h("p", {
      class: "ConnectPage-description"
    }, "To be able to work with MDWiki you have to login with your ", /* @__PURE__ */ h("strong", null, "GitHub"), " account and then select a Git repository where the data should be saved. MDWiki will create for each page a new file in the repository and each change will be saved with a new commit. And since the data will be saved on ", /* @__PURE__ */ h("strong", null, "Github"), " as ", /* @__PURE__ */ h("strong", null, "Markdown"), " files, you can use and change it also outside from MDWiki."), /* @__PURE__ */ h(LoginState, {
      user,
      onLoginClick: this.navigateToGithub
    }), user && /* @__PURE__ */ h(Fragment, null, /* @__PURE__ */ h(SelectExistingRepository, {
      repositories,
      selectedRepository,
      onSelectedRepositoryChanged: this.changeSelectedRepository,
      onConnectClick: () => this.connect()
    }), /* @__PURE__ */ h("br", null), /* @__PURE__ */ h(CreateNewRepository, {
      onCreateClick: (repositoryName) => this.createNewRepository(repositoryName),
      onValidateRepositoryName: (repositoryName) => this.canCreateNewRepository(repositoryName)
    })))), /* @__PURE__ */ h(Footer, {
      appVersion
    }));
  }
}
