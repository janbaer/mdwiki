import { h } from 'preact';

import './search-result.less';

function renderSearchResultItem(page, onSearchItemClicked) {
  return (
    <li key={page.name}>
      <button
        type="button"
        class="SearchResult-linkButton"
        onClick={() => onSearchItemClicked(page.name)}>
        {page.name}
      </button>
    </li>
  );
}

const SearchResult = ({ searchResultItems, onSearchItemClicked }) => {
  return (
    <ul>
      {
        searchResultItems.map(item => renderSearchResultItem(item, onSearchItemClicked))
      }
    </ul>
  );
};

export default SearchResult;
