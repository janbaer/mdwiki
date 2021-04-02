import {h} from "../../../_snowpack/pkg/preact.js";
import {useState} from "../../../_snowpack/pkg/preact/hooks.js";
import searchSvg from "../../images/search.svg.proxy.js";
import "./search-box.css.proxy.js";
const SearchBox = ({onSearch}) => {
  const [searchTerm, setSearchTerm] = useState("");
  function onInputKeyDown(e) {
    if (e.code === "Enter") {
      onSearch(e.target.value);
    }
  }
  return /* @__PURE__ */ h("div", {
    class: "Searchbox-container"
  }, /* @__PURE__ */ h("button", {
    title: "Search",
    onClick: () => onSearch(searchTerm)
  }, /* @__PURE__ */ h("img", {
    src: searchSvg
  })), /* @__PURE__ */ h("input", {
    type: "text",
    name: "search",
    placeholder: "Type here to search...",
    class: "search-text",
    onChange: (e) => setSearchTerm(e.target.value),
    onKeyDown: onInputKeyDown,
    value: searchTerm
  }));
};
export default SearchBox;
