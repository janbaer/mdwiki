import { h } from 'preact';
import NavbarButton from './navbar-button';
import GithubSvg from './../../images/github.svg';
import navigator from '~/app/services/navigator.service';

const ConnectButton = () => {
  return (
    <NavbarButton
      title="Connect to a GitHub repository"
      onClick={() => navigator.gotoConnect()}
    >
      <GithubSvg />
    </NavbarButton>
  );
};

export default ConnectButton;
