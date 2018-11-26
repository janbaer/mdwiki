import { h } from 'preact';
import LogoSvg from './../../images/wiki.svg';
import './app-title.less';

const AppTitle = () => {
  return (
    <div class="App-title">
      <a href="/" title="MDWiki"><LogoSvg /></a>
    </div>
  );
};

export default AppTitle;
