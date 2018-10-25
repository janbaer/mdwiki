const GITHUB_API_URL = 'https://api.github.com';

class GithubService {
  _buildOptions(oauthToken, method = 'GET') {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    if (oauthToken) {
      headers.append('Authorization', `token ${oauthToken}`);
    }

    return {
      method,
      headers,
    };
  }

  async getAuthenticatedUser(oauthToken) {
    const options = this._buildOptions(oauthToken);
    const response = await fetch(`${GITHUB_API_URL}/user`, options);
    if (response.status === 200) {
      const user = await response.json();

      const { avatar_url, email, login, name } = user; // eslint-disable-line camelcase
      return {
        avatarUrl: avatar_url,
        email,
        loginName: login,
        userName: name
      };
    }
    return undefined;
  }

  async getUserRepositories(user, oauthToken) {
    const options = this._buildOptions(oauthToken);
    const response = await fetch(`${GITHUB_API_URL}/users/${user}/repos?per_page=100`, options);
    return response.json();
  }
}

export default new GithubService();
