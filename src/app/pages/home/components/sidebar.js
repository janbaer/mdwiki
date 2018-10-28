import { h, Component } from 'preact';

import './sidebar.less';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.renderPageEntry = this.renderPageEntry.bind(this);
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

  render({ pages }, state) {
    return (
      <ul class="Sidebar-list">
        {pages.map(this.renderPageEntry)}
      </ul>
    );
  }
}
