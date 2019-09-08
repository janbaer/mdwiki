import { h } from 'preact';

import './footer.less';

const Footer = ({ appVersion }) => (
  <footer>
    <strong>MDWiki 3.{ appVersion }</strong>&nbsp;-&nbsp;Copyright { new Date().getFullYear() } by Jan Baer
  </footer>
);

export default Footer;
