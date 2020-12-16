// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".NavbarButton-button {\n  border: none;\n  border-radius: 25px;\n  background-color: transparent;\n  color: white;\n  cursor: pointer;\n  margin-right: 10px;\n  padding: 7px;\n}\n.NavbarButton-button:active {\n  background-color: #0f6ecd;\n}\n.NavbarButton-button:focus {\n  outline-color: transparent;\n}\n.NavbarButton-button svg {\n  fill: white;\n  height: 24px;\n  width: 24px;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}