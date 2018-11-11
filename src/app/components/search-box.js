import { h, Component } from 'preact';

import SearchSvg from './../../images/search.svg';

import './search-box.less';

export default class Searchbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };

    this.onInputKeyDown = this.onInputKeyDown.bind(this);
  }

  onInputKeyDown(e) {
    if (e.code === 'Enter') {
      this.onSearch(e.target.value);
    }
  }

  onSearch(searchTerm) {
    this.setState({ searchTerm }, this.props.onSearch(searchTerm));
  }

  render({ onSearch }, { searchTerm }) {
    return (
      <div class="Searchbox-container">
        <button title="Search" onClick={() => onSearch(searchTerm)}><SearchSvg /></button>
        <input
          type="text"
          name="search"
          placeholder="Type here to search..."
          class="search-text"
          onChange={e => this.setState({ searchTerm: e.target.value })}
          onKeyDown={this.onInputKeyDown}
          value={searchTerm}
        />
      </div>
    );
  }
}
