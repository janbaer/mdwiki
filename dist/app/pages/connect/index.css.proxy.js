// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".ConnectPage-header {\n  padding-left: 10px;\n  display: grid;\n  grid-template-columns: 40px;\n  align-items: center;\n}\n.ConnectPage-contentContainer {\n  padding: 20px;\n  overflow-y: auto;\n  height: calc(100vh - 110px);\n}\n@media only screen and (min-width: 1024px) {\n  .ConnectPage-contentContainer {\n    width: 50%;\n  }\n}\n.ConnectPage-contentContainer > div {\n  padding: 10px 0;\n}\n.ConnectPage-contentContainer h3 {\n  font-size: 1.2em;\n  text-decoration: underline;\n}\n.ConnectPage-githubButton > img {\n  fill: white;\n  height: 24px;\n  width: 24px;\n  margin-right: 10px;\n}\n.ConnectPage-userContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.ConnectPage-userName {\n  font-weight: bold;\n  margin: 10px 0;\n}\n.ConnectPage-userImage {\n  heigth: 64px;\n  width: 64px;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}