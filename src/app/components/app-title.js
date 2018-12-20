import { h } from 'preact';
import LogoSvg from './../../images/wiki.svg';

import './app-title.less';

const AppTitle = () => {
  return (
    <a href="/" title="MDWiki"><LogoSvg class="AppTitle-logoSvg" /></a>
  );
};

export default AppTitle;
