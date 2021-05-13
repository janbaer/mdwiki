// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".Sidebar-groupLinkContainer {\n  position: sticky;\n  top: 0px;\n  display: grid;\n  background-color: white;\n  padding-left: 10px;\n  grid-template-columns: repeat(10, 20px);\n  z-index: 1;\n}\n.Sidebar-groupLinkContainer > a {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n.Sidebar-listContainer {\n  height: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.Sidebar-list {\n  list-style: none;\n  padding-left: 0;\n  margin: 0;\n}\n.Sidebar-list > li {\n  border-bottom: 1px solid #e0e0e0;\n}\n.Sidebar-list > li:hover {\n  background-color: #1e87f0;\n  opacity: 0.8;\n}\n.Sidebar-list > li > button {\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  width: 100%;\n  height: 28px;\n  padding-left: 10px;\n  margin: 10px 0 !important;\n  text-align: left;\n}\n.Sidebar-list > li > button:focus {\n  outline: none;\n}\n.Sidebar-pageGroupHeader {\n  margin: 0;\n  padding-left: 5px;\n  border-bottom: 1px solid #e0e0e0;\n  background-color: #e0e0e0;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}