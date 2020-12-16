import {h, Component} from "../../../../web_modules/preact.js";
import Footer from "../../components/footer.js";
import AppTitle from "../../components/app-title.js";
import LoginButton from "../../components/login-button.js";
import ConnectButton from "../../components/connect-button.js";
import SearchResult from "./components/search-result.js";
import SearchInput from "./components/search-input.js";
import configuration2 from "../../services/configuration.service.js";
import github2 from "../../services/github.service.js";
import navigator2 from "../../services/navigator.service.js";
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
    const {user, repository, oauthToken} = configuration2;
    const searchResult = await github2.searchPages(user.loginName, repository, searchTerm, oauthToken);
    this.setState({searchTerm, searchResult});
  }
  onSearchItemClicked(pageName) {
    navigator2.gotoPage(pageName);
  }
  render(props, {searchTerm, searchResult}) {
    const {user, appVersion} = configuration2;
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
