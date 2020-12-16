// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".HomePage-header {\n  display: grid;\n  grid-template-columns: 40px 40px 1fr 100px;\n  grid-column-gap: 10px;\n  align-items: center;\n}\n@media (min-width: 1024px) {\n  .HomePage-header {\n    padding-left: 10px;\n    grid-template-columns: 40px 1fr 100px;\n  }\n}\n@media (min-width: 1024px) {\n  .HomePage-leftNavbar {\n    display: none;\n  }\n}\n.HomePage-rightNavbar {\n  display: flex;\n}\n.HomePage-container {\n  display: flex;\n  height: 100%;\n}\n.HomePage-sidebarContainer {\n  width: 250px;\n  position: absolute;\n  height: calc(100vh - 85px);\n  background-color: white;\n  border-right: 1px solid #e0e0e0;\n  left: -250px;\n  transition: left 0.5s ease-in-out;\n}\n.HomePage-sidebarContainer.is-shown {\n  transition: left 0.5s ease-in-out;\n  left: 0;\n}\n@media only screen and (min-width: 1024px) {\n  .HomePage-sidebarContainer {\n    position: inherit;\n    height: unset;\n  }\n}\n.HomePage-contentContainer {\n  flex: 1;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}