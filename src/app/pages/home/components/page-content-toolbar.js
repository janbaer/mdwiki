import { h } from 'preact';
import classnames from 'classnames';

import AddSvg from '../../../../images/add.svg';
import EditSvg from '../../../../images/edit.svg';
import DeleteSvg from '../../../../images/delete.svg';

import './page-content-toolbar.less';

const PageContentToolbar = ({ onNewClick, onEditClick, onDeleteClick, canDelete }) => {
  const classname = classnames(
    { 'is-disabled': !canDelete }
  );

  return (
    <div class="PageContent-toolbar editor-toolbar">
      <button onClick={() => onNewClick()}><AddSvg /></button>
      <button onClick={() => onEditClick()}><EditSvg /></button>
      <button class={classname} disabled={!canDelete} onClick={() => onDeleteClick()}>
        <DeleteSvg class={classname} />
      </button>
    </div>

  );
};

export default PageContentToolbar;
