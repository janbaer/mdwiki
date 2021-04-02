import {h, Component} from "../../../../../_snowpack/pkg/preact.js";
import groupPages from "../../../helpers/page-grouper.js";
import "./sidebar.css.proxy.js";
export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.renderPageEntry = this.renderPageEntry.bind(this);
    this.renderGroup = this.renderGroup.bind(this);
    this.renderGroupLink = this.renderGroupLink.bind(this);
    this.scrollTo = this.scrollTo.bind(this);
  }
  gotoPage(page) {
    this.props.onClick(page.name);
  }
  scrollTo(e) {
    e.preventDefault();
    document.querySelector(`#group${e.target.innerText}`).scrollIntoView({behavior: "smooth"});
  }
  renderPageEntry(page) {
    return /* @__PURE__ */ h("li", null, /* @__PURE__ */ h("button", {
      onClick: () => this.gotoPage(page)
    }, page.name));
  }
  renderGroup(group) {
    return /* @__PURE__ */ h("div", null, /* @__PURE__ */ h("h4", {
      id: `group${group.letter}`,
      class: "Sidebar-pageGroupHeader"
    }, group.letter), /* @__PURE__ */ h("ul", {
      class: "Sidebar-list"
    }, group.pages.map(this.renderPageEntry)));
  }
  renderGroupLink(group) {
    return /* @__PURE__ */ h("a", {
      href: "#",
      onClick: this.scrollTo
    }, group.letter);
  }
  render({pages}, state) {
    const groups = groupPages(pages);
    return /* @__PURE__ */ h("div", {
      class: "Sidebar-listContainer"
    }, /* @__PURE__ */ h("div", {
      class: "Sidebar-groupLinkContainer"
    }, groups.map(this.renderGroupLink)), groups.map(this.renderGroup));
  }
}
