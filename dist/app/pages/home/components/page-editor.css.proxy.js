// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".CodeMirror-scroll {\n  height: calc(100vh - 160px);\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}