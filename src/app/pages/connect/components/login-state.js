import { h } from 'preact';

import GithubSvg from './../../../../images/github.svg';

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
    <div>
      <div>
        <button
          class="uk-button uk-button-primary ConnectPage-githubButton"
          onClick={() => onLoginClick()}
        >
          <GithubSvg />
          Login with using Github
        </button>
      </div>
    </div>
  );
};

export default LoginState;
