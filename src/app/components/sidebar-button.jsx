import { h } from 'preact';

import hamburgerMenuSvg from '@images/hamburger-menu.svg';

import './sidebar-button.less';

const SidebarButton = ({ showSidebar, onClick }) => {
  return (
    <button class="SidebarButton-button" title="Add" onClick={onClick}>
      <img src={hamburgerMenuSvg} />
    </button>
  );
};

export default SidebarButton;
