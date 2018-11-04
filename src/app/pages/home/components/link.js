import { h } from 'preact';
import navigator from '~/app/services/navigator.service';

import './link.less';

function isExternalLink(href) {
  if (href) {
    return href.startsWith('http');
  }
  return true;
};

const Link = ({ href, children }) => {
  if (isExternalLink(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
    );
  }

  const pageName = href.substr(1);

  return (
    <button
      type="button"
      className="Link-button"
      onClick={() => navigator.gotoPage(pageName)}
    >
      {children}
    </button>
  );
};

export default Link;
