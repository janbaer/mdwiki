import { h } from 'preact';

import HamburgerMenuSvg from './../../images/hamburger-menu.svg';

import './sidebar-button.less';

const SidebarButton = ({ showSidebar, onClick }) => {
  return (
    <button class="SidebarButton-button" title="Add" onClick={onClick}>
      <HamburgerMenuSvg />
    </button>
  );
};

export default SidebarButton;
