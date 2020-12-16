import { h } from 'preact';
import classnames from 'classnames';

import addSvg from '@images/add.svg';
import editSvg from '@images/edit.svg';
import deleteSvg from '@images/delete.svg';

import './page-content-toolbar.less';

const PageContentToolbar = ({ onNewClick, onEditClick, onDeleteClick, canDelete }) => {
  const classname = classnames(
    { 'is-disabled': !canDelete }
  );

  return (
    <div class="PageContent-toolbar editor-toolbar">
      <button onClick={() => onNewClick()}><img src={addSvg} /></button>
      <button onClick={() => onEditClick()}><img src={editSvg} /></button>
      <button class={classname} disabled={!canDelete} onClick={() => onDeleteClick()}>
        <img src={deleteSvg} class={classname} />
      </button>
    </div>

  );
};

export default PageContentToolbar;
