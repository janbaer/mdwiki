import { h, render } from 'preact';
import 'preact/debug';
import App from './app/app.js';

function renderApp() {
  render(
    <App />, document.body
  );
}

renderApp();

if (module.hot) {
  module.hot.accept(renderApp);
}
