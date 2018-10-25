import { h } from 'preact';
import { route } from 'preact-router';
import NavbarButton from './navbar-button';

import './login-button.less';

const LoginButton = ({ user }) => {
  return (
    <NavbarButton
      title={`Your're logged in as ${user.userName}`}
      onClick={() => route('/connect?logout')}
    >
      <img
        class="LoginButton-userImage"
        src={user.avatarUrl}
        alt={user.userName}
      />
    </NavbarButton>
  );
};

export default LoginButton;
