import { h } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks';

import './search-input.less';

const SearchInput = (props) => {
  const searchInputRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState(props.searchTerm);

  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  function onInputKeyDown(e) {
    if (e.code === 'Enter') {
      props.onSearch(e.target.value);
    }
  }

  return (
    <div class="SearchInput-container">
      <input
        class="input" type="text" value={searchTerm}
        ref={searchInputRef}
        onChange={e => setSearchTerm(e.target.value)}
        onKeyDown={onInputKeyDown}
      />
      <button
        class="button button-primary button-small"
        onClick={() => props.onSearch(searchTerm)}>
        Search
      </button>
    </div>
  );
};

export default SearchInput;
