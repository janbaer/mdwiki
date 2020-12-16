import { h } from 'preact';
import NavbarButton from './navbar-button';
import githubSvg from '@images/github.svg';
import navigator from '@app/services/navigator.service';

import './connect-button.less';

const ConnectButton = () => {
  return (
    <NavbarButton
      title="Connect to a GitHub repository"
      onClick={() => navigator.gotoConnect()}
    >
      <img src={githubSvg} class="ConnectButton-icon" />
    </NavbarButton>
  );
};

export default ConnectButton;
