import {h} from "../../../../../web_modules/preact.js";
import "./search-result.css.proxy.js";
function renderSearchResultItem(page, onSearchItemClicked) {
  return /* @__PURE__ */ h("li", {
    key: page.name
  }, /* @__PURE__ */ h("button", {
    type: "button",
    class: "SearchResult-linkButton",
    onClick: () => onSearchItemClicked(page.name)
  }, page.name));
}
const SearchResult = ({searchResultItems, onSearchItemClicked}) => {
  return /* @__PURE__ */ h("ul", null, searchResultItems.map((item) => renderSearchResultItem(item, onSearchItemClicked)));
};
export default SearchResult;
