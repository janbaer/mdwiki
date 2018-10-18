import { h } from 'preact';

import LeftArrow from './../../images/left-arrow.svg';
import RightArrow from './../../images/right-arrow.svg';

import './sidebar-button.less';

const SidebarButton = ({ showSidebar, onClick }) => {
  return (
    <button class="SidebarButton-button" title="Add" onClick={onClick}>
      { showSidebar && <LeftArrow /> }
      { !showSidebar && <RightArrow /> }
    </button>
  );
};

export default SidebarButton;
