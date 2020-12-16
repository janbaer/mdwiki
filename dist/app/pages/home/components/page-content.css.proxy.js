// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".PageContent-container {\n  overflow-y: auto;\n  height: calc(100vh - 85px);\n}\n.PageContent-body {\n  height: calc(100% - 55px);\n  margin: 0 10px;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}