import { h, Component } from 'preact';
import groupPages from '~/app/helpers/page-grouper';

import './sidebar.less';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.renderPageEntry = this.renderPageEntry.bind(this);
    this.renderGroup = this.renderGroup.bind(this);
  }

  gotoPage(page) {
    this.props.onClick(page.name);
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
        <h4 class="Sidebar-pageGroupHeader">{group.letter}</h4>

        <ul class="Sidebar-list">
          {group.pages.map(this.renderPageEntry)}
        </ul>
      </div>
    );
  }

  render({ pages }, state) {
    console.log('pages', pages);
    const groups = groupPages(pages);
    return (
      <div class="Sidebar-listContainer">
        {groups.map(this.renderGroup)}
      </div>
    );
  }
}
