import { h } from 'preact';

import SearchSvg from './../../images/search.svg';

import './search-box.less';

const Searchbar = ({ onClick }) => {
  return (
    <div class="Searchbox-container">
      <button title="Search" onClick={onClick}><SearchSvg /></button>
      <input type="text" name="search" placeholder="Type here to search..." class="search-text" />
    </div>
  );
};

export default Searchbar;
