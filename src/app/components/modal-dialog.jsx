import { h } from 'preact';

import './modal-dialog.less';

const ModalDialog = ({ title, description, isValid = true, onHideDialog, children }) => {
  return (
    <div class="ModalDialog-backgroundContainer">
      <dialog class="ModalDialog-dialog" open>
        <h3>{title}</h3>

        <div class="ModalDialog-descriptionLabel">{description}</div>

        { children }

        <div class="ModalDialog-dialogContainer">
          <button class="button" onClick={() => onHideDialog(false)}>Cancel</button>
          <button
            class="button button-primary"
            disabled={!isValid}
            onClick={() => onHideDialog(true)}>
            Ok
          </button>
        </div>
      </dialog>
    </div>
  );
};

export default ModalDialog;
