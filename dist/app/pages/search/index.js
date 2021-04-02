import {h, Component} from "../../../../_snowpack/pkg/preact.js";
import Footer from "../../components/footer.js";
import AppTitle from "../../components/app-title.js";
import LoginButton from "../../components/login-button.js";
import ConnectButton from "../../components/connect-button.js";
import SearchResult from "./components/search-result.js";
import SearchInput from "./components/search-input.js";
import configuration from "../../services/configuration.service.js";
import github from "../../services/github.service.js";
import navigator from "../../services/navigator.service.js";
import "./index.css.proxy.js";
export default class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      searchResult: {items: []}
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
    const {user, repository, oauthToken} = configuration;
    const searchResult = await github.searchPages(user.loginName, repository, searchTerm, oauthToken);
    this.setState({searchTerm, searchResult});
  }
  onSearchItemClicked(pageName) {
    navigator.gotoPage(pageName);
  }
  render(props, {searchTerm, searchResult}) {
    const {user, appVersion} = configuration;
    searchTerm = searchTerm || props.q;
    return /* @__PURE__ */ h("div", {
      class: "App-container"
    }, /* @__PURE__ */ h("header", {
      class: "SearchPage-header"
    }, /* @__PURE__ */ h(AppTitle, null), /* @__PURE__ */ h("nav", null, /* @__PURE__ */ h(ConnectButton, null), /* @__PURE__ */ h(LoginButton, {
      user
    }))), /* @__PURE__ */ h("main", null, /* @__PURE__ */ h("div", {
      class: "SearchPage-container"
    }, /* @__PURE__ */ h(SearchInput, {
      searchTerm,
      onSearch: this.search
    }), /* @__PURE__ */ h(SearchResult, {
      searchResultItems: searchResult.items,
      onSearchItemClicked: this.onSearchItemClicked
    }))), /* @__PURE__ */ h(Footer, {
      appVersion
    }));
  }
}
