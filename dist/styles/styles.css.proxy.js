// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@import url('https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css');\nhtml,\nbody {\n  margin: 0;\n  height: 100vh;\n  overflow: hidden;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  font-size: 16px;\n  line-height: 1.5;\n  font-weight: normal;\n  color: #666;\n}\nsvg,\nimg {\n  box-sizing: border-box;\n  vertical-align: middle;\n}\nh2,\nh3,\nh4 {\n  font-weight: normal;\n  margin: 0 0 20px 0;\n  color: #333;\n}\nh2 {\n  font-size: 2rem;\n  line-height: 1.3;\n}\nh3 {\n  font-size: 1.5rem;\n  line-height: 1.4;\n}\nh4 {\n  font-size: 1.25rem;\n  line-height: 1.4;\n}\np {\n  margin: 0 0 20px 0;\n}\n.input,\n.select {\n  box-sizing: border-box;\n  font-size: 16px;\n  height: 40px;\n  vertical-align: middle;\n  display: inline-block;\n  max-width: 100%;\n  width: 100%;\n  padding: 0 10px;\n  background: #fff;\n  color: #666;\n  border: 1px solid #e5e5e5;\n  transition: 0.2s ease-in-out;\n  transition-property: color, background-color, border;\n}\n.button {\n  margin: 0;\n  border: none;\n  overflow: visible;\n  font: inherit;\n  color: inherit;\n  text-transform: none;\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 0 30px;\n  vertical-align: middle;\n  font-size: 0.875rem;\n  line-height: 38px;\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n  transition: 0.1s ease-in-out;\n  transition-property: color, background-color, border-color;\n}\n.button:not(:disabled) {\n  cursor: pointer;\n}\n.button.button-primary {\n  background-color: #1e87f0;\n  color: #fff;\n  border: 1px solid transparent;\n}\n.button.button-primary:disabled {\n  background-color: transparent;\n  color: #999;\n  border-color: #e5e5e5;\n}\n.button.button-small {\n  padding: 0 15px;\n}\n.App-container {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: 55px 1fr 30px;\n  grid-template-areas: \"toolbar\" \"content\" \"footer\";\n}\nheader {\n  grid-area: toolbar;\n  color: white;\n  background-color: #1e87f0;\n}\nmain {\n  grid-area: content;\n  overflow-y: hidden;\n}\nfooter {\n  grid-area: footer;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}