import { h } from 'preact';

import './footer.less';

const Footer = ({ appVersion }) => (
  <footer>
    <strong>MDWiki 3.{ appVersion }</strong>&nbsp;-&nbsp;Copyright 2018 by Jan Baer
  </footer>
);

export default Footer;
