import {h, Fragment} from "../../../../../web_modules/preact.js";
import "./select-existing-repository.css.proxy.js";
const SelectExistingRepository = ({repositories, selectedRepository, onSelectedRepositoryChanged, onConnectClick}) => {
  return /* @__PURE__ */ h(Fragment, null, /* @__PURE__ */ h("h3", null, "Select an existing repository where the data should be saved"), /* @__PURE__ */ h("form", {
    onSubmit: (e) => e.preventDefault()
  }, /* @__PURE__ */ h("select", {
    class: "select SelectExistingRepository-select",
    onChange: (e) => onSelectedRepositoryChanged(e.target.value)
  }, /* @__PURE__ */ h("option", {
    disabled: true,
    selected: true,
    value: true
  }, " -- select a repository -- "), repositories.map((r) => /* @__PURE__ */ h("option", {
    value: r.name
  }, r.name))), /* @__PURE__ */ h("button", {
    class: "button button-primary",
    onClick: () => onConnectClick(),
    disabled: !selectedRepository
  }, "Connect")));
};
export default SelectExistingRepository;
