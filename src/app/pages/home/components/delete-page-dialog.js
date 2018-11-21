import { h } from 'preact';

import './delete-page-dialog.less';

const DeletePageDialog = ({ onHideDialog }) => {
  return (
    <div class="DeletePageDialog-backgroundContainer">
      <dialog class="DeletePageDialog-dialog" open>
        <h3>Delete page</h3>

        <div>Do you really want to delete the current page?</div>

        <div class="DeletePageDialog-dialogContainer">
          <button class="uk-button button" onClick={() => onHideDialog(false)}>Cancel</button>
          <button class="uk-button uk-button-primary button" onClick={() => onHideDialog(true)}>Ok</button>
        </div>
      </dialog>
    </div>
  );
};

export default DeletePageDialog;
