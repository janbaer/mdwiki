import {h} from "../../../../../_snowpack/pkg/preact.js";
import {useState, useEffect, useRef} from "../../../../../_snowpack/pkg/preact/hooks.js";
import "./search-input.css.proxy.js";
const SearchInput = (props) => {
  const searchInputRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState(props.searchTerm);
  useEffect(() => {
    searchInputRef.current.focus();
  }, []);
  function onInputKeyDown(e) {
    if (e.code === "Enter") {
      props.onSearch(e.target.value);
    }
  }
  return /* @__PURE__ */ h("div", {
    class: "SearchInput-container"
  }, /* @__PURE__ */ h("input", {
    class: "input",
    type: "text",
    value: searchTerm,
    ref: searchInputRef,
    onChange: (e) => setSearchTerm(e.target.value),
    onKeyDown: onInputKeyDown
  }), /* @__PURE__ */ h("button", {
    class: "button button-primary button-small",
    onClick: () => props.onSearch(searchTerm)
  }, "Search"));
};
export default SearchInput;
