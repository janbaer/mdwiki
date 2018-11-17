import { h } from 'preact';
import ReactMarkdown from 'react-markdown';
import Link from './link';

import './../../../../../node_modules/simplemde/dist/simplemde.min.css';
import './page-content.less';

import AddSvg from '../../../../images/add.svg';
import EditSvg from '../../../../images/edit.svg';
import DeleteSvg from '../../../../images/delete.svg';

const PageContent = ({ content, onNew, onEdit, onDelete }) => {
  return (
    <div class="PageContent-container">
      <div class="PageContent-toolbar editor-toolbar a">
        <a onClick={onNew}><AddSvg /></a>
        <a onClick={onEdit}><EditSvg /></a>
        <a onClick={onDelete}><DeleteSvg /></a>
      </div>
      <div class="PageContent-body markdown-body">
        <ReactMarkdown source={content} renderers={{ link: Link }} />
      </div>
    </div>
  );
};

export default PageContent;
