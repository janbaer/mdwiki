import { h } from 'preact';
import { useState } from 'preact/hooks';

import searchSvg from '@images/search.svg';

import './search-box.less';

const SearchBox = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  function onInputKeyDown(e) {
    if (e.code === 'Enter') {
      onSearch(e.target.value);
    }
  }

  return (
    <div class="Searchbox-container">
      <button title="Search" onClick={() => onSearch(searchTerm)}>
        <img src={searchSvg} />
      </button>
      <input
        type="text"
        name="search"
        placeholder="Type here to search..."
        class="search-text"
        onChange={e => setSearchTerm(e.target.value)}
        onKeyDown={onInputKeyDown}
        value={searchTerm}
      />
    </div>
  );
};

export default SearchBox;
