import { h } from 'preact';
import ReactMarkdown from 'react-markdown';
import Link from './link';

import './page-content.less';

const PageContent = ({ content }) => {
  return (
    <div class="Markdown-container markdown-body">
      <ReactMarkdown source={content} renderers={{ link: Link }} />
    </div>
  );
};

export default PageContent;
