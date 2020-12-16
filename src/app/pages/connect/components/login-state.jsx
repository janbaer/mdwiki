import { h } from 'preact';

import githubSvg from '@images/github.svg';

const LoginState = ({ user, onLoginClick }) => {
  if (user) {
    return (
      <div class="ConnectPage-userContainer">
        <h3>You're logged in as:</h3>
        <img class="ConnectPage-userImage" src={user.avatarUrl} alt={user.userName} />
        <span class="ConnectPage-userName">{user.userName}</span>
      </div>
    );
  }

  return (
    <button
      class="button button-primary ConnectPage-githubButton"
      onClick={() => onLoginClick()}
    >
      <img src={githubSvg} />
      Login with using Github
    </button>
  );
};

export default LoginState;
