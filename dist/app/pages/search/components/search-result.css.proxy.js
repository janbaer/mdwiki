// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".SearchResult-linkButton {\n  font-size: 100%;\n  color: #0366d6;\n  cursor: pointer;\n  border: none;\n  background: transparent;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}