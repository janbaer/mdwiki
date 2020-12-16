import { h, Component } from 'preact';

import groupPages from '@app/helpers/page-grouper';

import './sidebar.less';

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
    document.querySelector(`#group${e.target.innerText}`).scrollIntoView({ behavior: 'smooth' });
  }

  renderPageEntry(page) {
    return (
      <li>
        <button onClick={() => this.gotoPage(page)}>{page.name}</button>
      </li>
    );
  }

  renderGroup(group) {
    return (
      <div>
        <h4 id={`group${group.letter}`} class="Sidebar-pageGroupHeader">{group.letter}</h4>

        <ul class="Sidebar-list">
          {group.pages.map(this.renderPageEntry)}
        </ul>
      </div>
    );
  }

  renderGroupLink(group) {
    return (
      <a href="#" onClick={this.scrollTo}>{group.letter}</a>
    );
  }

  render({ pages }, state) {
    const groups = groupPages(pages);
    return (
      <div class="Sidebar-listContainer">
        <div class="Sidebar-groupLinkContainer">
          {groups.map(this.renderGroupLink)}
        </div>
        {groups.map(this.renderGroup)}
      </div>
    );
  }
}
