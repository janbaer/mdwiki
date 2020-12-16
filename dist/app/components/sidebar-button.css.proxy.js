// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".SidebarButton-button {\n  border: 1px solid transparent;\n  background-color: #1e87f0;\n  transition: 0.1s ease-in-out;\n  transition-property: color, background-color, border-color;\n  margin-left: 5px;\n}\n.SidebarButton-button:focus {\n  outline-color: transparent;\n}\n.SidebarButton-button:active {\n  background-color: #0f6ecd;\n}\n.SidebarButton-button svg {\n  fill: white;\n  height: 28px;\n  width: 28px;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}