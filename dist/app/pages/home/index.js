import {h, Component} from "../../../../_snowpack/pkg/preact.js";
import {Suspense, lazy} from "../../../../_snowpack/pkg/preact/compat.js";
import classnames from "../../../../_snowpack/pkg/classnames.js";
import Footer from "../../components/footer.js";
import AppTitle from "../../components/app-title.js";
import ConnectButton from "../../components/connect-button.js";
import LoginButton from "../../components/login-button.js";
import SidebarButton from "../../components/sidebar-button.js";
import Searchbox from "../../components/search-box.js";
import Sidebar from "./components/sidebar.js";
import PageContent from "./components/page-content.js";
import configuration from "../../services/configuration.service.js";
import navigator from "../../services/navigator.service.js";
import PageStore from "../../stores/page.store.js";
import EVENTS from "../../constants/events.constants.js";
import "./index.css.proxy.js";
const PageEditor = lazy(() => import("./components/page-editor.js"));
export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.store = new PageStore();
    const {pages, page} = this.store;
    this.state = {
      showSidebar: false,
      pages,
      page,
      isInEditMode: false,
      isNewPageDialogShown: false,
      appVersion: configuration.appVersion
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.onGotoPage = this.onGotoPage.bind(this);
    this.onStartSearch = this.onStartSearch.bind(this);
    this.onNewPage = this.onNewPage.bind(this);
    this.onEditPage = this.onEditPage.bind(this);
    this.onDeletePage = this.onDeletePage.bind(this);
    this.onSavePage = this.onSavePage.bind(this);
    this.onCancelEditPage = this.onCancelEditPage.bind(this);
    configuration.eventEmitter.on(EVENTS.APP_VERSION_CHANGED, this.onAppVersionChanged.bind(this));
  }
  componentWillReceiveProps(nextProps, nextState) {
    if (nextProps.page !== this.props.page) {
      this.loadPage(nextProps.page);
    }
  }
  componentWillUnmount() {
    configuration.eventEmitter.removeListener(EVENTS.APP_VERSION_CHANGED, this.onAppVersionChanged);
  }
  onAppVersionChanged(appVersion) {
    this.setState({appVersion});
  }
  onStartSearch(searchTerm) {
    navigator.gotoSearch(searchTerm);
  }
  async loadPages() {
    const pages = await this.store.loadPages();
    this.setState({pages});
  }
  async loadPage(pageName = "index") {
    const page = await this.store.loadPage(pageName);
    if (!page) {
      navigator.gotoConnect();
      return;
    }
    this.setState({page});
  }
  async componentDidMount() {
    if (configuration.user) {
      await this.loadPages();
      const {page} = this.props;
      await this.loadPage(page);
    }
  }
  toggleSidebar() {
    const showSidebar = !this.state.showSidebar;
    this.setState({showSidebar});
  }
  onGotoPage(pageName) {
    navigator.gotoPage(pageName);
    if (this.state.showSidebar) {
      this.toggleSidebar();
    }
  }
  toggleEditMode() {
    const isInEditMode = !this.state.isInEditMode;
    this.setState({isInEditMode});
  }
  onEditPage() {
    this.toggleEditMode();
  }
  onCancelEditPage() {
    this.toggleEditMode();
  }
  async onDeletePage() {
    await this.store.deletePage();
    const nextPageName = this.store.pages.length > 0 ? this.store.pages[0].name : "index";
    navigator.gotoPage(nextPageName);
  }
  async onNewPage(pageName) {
    const page = await this.store.createPage(pageName);
    navigator.gotoPage(page.name);
  }
  async onSavePage(content, commitMessage) {
    const page = await this.store.updatePage(content, commitMessage);
    this.setState({page}, () => this.toggleEditMode());
  }
  renderPageContent(pageName, content) {
    return /* @__PURE__ */ h(PageContent, {
      pageName,
      content,
      onNew: this.onNewPage,
      onEdit: this.onEditPage,
      onDelete: this.onDeletePage
    });
  }
  renderPageEditor(pageName, content) {
    return /* @__PURE__ */ h(Suspense, {
      fallback: /* @__PURE__ */ h("div", null, "Loading Markdown-editor...")
    }, /* @__PURE__ */ h(PageEditor, {
      pageName,
      content,
      onSave: this.onSavePage,
      onCancel: this.onCancelEditPage
    }));
  }
  render(props, {showSidebar, isInEditMode, pages, page, appVersion}) {
    const leftSidebarContainerClassname = classnames("HomePage-sidebarContainer", {"is-shown": showSidebar});
    const user = configuration.user;
    return /* @__PURE__ */ h("div", {
      class: "App-container"
    }, /* @__PURE__ */ h("header", {
      class: "HomePage-header"
    }, /* @__PURE__ */ h("nav", {
      class: "HomePage-leftNavbar"
    }, /* @__PURE__ */ h(SidebarButton, {
      onClick: this.toggleSidebar,
      showSidebar
    })), /* @__PURE__ */ h(AppTitle, null), /* @__PURE__ */ h("nav", null, /* @__PURE__ */ h(Searchbox, {
      onSearch: this.onStartSearch
    })), /* @__PURE__ */ h("nav", {
      class: "HomePage-rightNavbar"
    }, /* @__PURE__ */ h(ConnectButton, null), /* @__PURE__ */ h(LoginButton, {
      user
    }))), /* @__PURE__ */ h("main", null, /* @__PURE__ */ h("div", {
      class: "HomePage-container"
    }, /* @__PURE__ */ h("div", {
      class: leftSidebarContainerClassname
    }, /* @__PURE__ */ h(Sidebar, {
      pages,
      onClick: this.onGotoPage
    })), /* @__PURE__ */ h("div", {
      class: "HomePage-contentContainer"
    }, !isInEditMode && this.renderPageContent(page.name, page.content), isInEditMode && this.renderPageEditor(page.name, page.content)))), /* @__PURE__ */ h(Footer, {
      appVersion
    }));
  }
}