import { h } from 'preact';

import './navbar-button.less';

const NavbarButton = ({ children, title, onClick }) => {
  return (
    <button class="NavbarButton-button" title={title} onClick={onClick}>{ children }</button>
  );
};

export default NavbarButton;
