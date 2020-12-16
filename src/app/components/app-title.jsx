import { h } from 'preact';
import logoSvg from '@images/wiki.svg';

import './app-title.less';

const AppTitle = () => {
  return (
    <a href="/" title="MDWiki">
      <img src={logoSvg} class="AppTitle-logoSvg" />
    </a>
  );
};

export default AppTitle;
