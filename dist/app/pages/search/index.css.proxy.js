// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".SearchPage-header {\n  padding-left: 10px;\n  display: grid;\n  grid-template-columns: 40px 1fr;\n  align-items: center;\n  justify-items: end;\n}\n.SearchPage-container {\n  padding: 10px;\n}\n@media only screen and (min-width: 1024px) {\n  .SearchPage-container {\n    width: 50%;\n  }\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}