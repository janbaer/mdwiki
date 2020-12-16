// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".PageContent-toolbar {\n  position: sticky !important;\n  position: -webkit-sticky !important;\n  top: 0px;\n  border-bottom: 1px solid #ddd;\n  border-left: none !important;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  height: 50px;\n  opacity: 0.6;\n}\n.PageContent-toolbar:hover {\n  opacity: 0.8;\n}\n.PageContent-toolbar > button {\n  border: 1px solid transparent;\n  background-color: white;\n  cursor: pointer;\n}\n.PageContent-toolbar > button:focus {\n  outline-color: transparent;\n}\n.PageContent-toolbar > button.is-disabled {\n  cursor: not-allowed;\n}\n.PageContent-toolbar > button > svg {\n  fill: #2c3e50;\n}\n.PageContent-toolbar > button > svg.is-disabled {\n  fill: #7b7a7a;\n}\n.PageContent-toolbar > button > svg:hover {\n  fill: black;\n}\n.PageContent-toolbar > button > svg:hover.is-disabled {\n  fill: #7b7a7a;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}