import { h, Component } from 'preact';

import './search-input.less';

export default class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };

    this.onInputKeyDown = this.onInputKeyDown.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onInputKeyDown(e) {
    if (e.code === 'Enter') {
      this.onSearch(e.target.value);
    }
  }

  onSearch(searchTerm) {
    this.setState({ searchTerm }, this.props.onSearchButtonClicked(searchTerm));
  }

  render(props, state) {
    const searchTerm = this.state.searchTerm || this.props.searchTerm;

    return (
      <div class="SearchInput-container">
        <input class="uk-input" type="text" value={searchTerm}
          onChange={e => this.setState({ searchTerm: e.target.value })}
          onKeyDown={this.onInputKeyDown}
        />
        <button
          class="uk-button uk-button-primary uk-button-small"
          onClick={() => this.onSearch(searchTerm)}>
          Search
        </button>
      </div>
    );
  }
}
