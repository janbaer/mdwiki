import {h, Fragment} from "../../../../../web_modules/preact.js";
import {useState, useEffect} from "../../../../../web_modules/preact/hooks.js";
import "./create-new-repository.css.proxy.js";
const CreateNewRepository = ({onCreateClick, onValidateRepositoryName}) => {
  const [repositoryName, setRepositoryName] = useState("");
  const [isValidRepositoryName, setIsValidRepositoryName] = useState(false);
  useEffect(async () => {
    const isValid = onValidateRepositoryName(repositoryName);
    setIsValidRepositoryName(isValid);
  }, [repositoryName]);
  return /* @__PURE__ */ h(Fragment, null, /* @__PURE__ */ h("h3", null, "Or create a new repository"), /* @__PURE__ */ h("form", {
    onSubmit: (e) => e.preventDefault()
  }, /* @__PURE__ */ h("div", {
    class: "CreateNewRepository-container"
  }, /* @__PURE__ */ h("input", {
    class: "input",
    type: "text",
    value: repositoryName,
    onChange: (e) => setRepositoryName(e.target.value)
  }), repositoryName && !isValidRepositoryName && /* @__PURE__ */ h("div", {
    class: "CreateNewRepository-errorMessage"
  }, "There's an existing repository with the same name. Please choose another name")), /* @__PURE__ */ h("button", {
    class: "button button-primary",
    onClick: () => onCreateClick(repositoryName),
    disabled: !isValidRepositoryName
  }, "Create")));
};
export default CreateNewRepository;
