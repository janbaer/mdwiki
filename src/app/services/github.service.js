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

  _mapPage(page) {
    if (page) {
      return {
        name: page.name.substr(0, page.name.length - 3),
        path: page.path,
        sha: page.sha,
        content: this._decodeContent(page.content)
      };
    }
    return undefined;
  }

  _appendExtension(path) {
    if (!path.endsWith('.md')) {
      return `${path}.md`;
    }
    return path;
  }

  _markdownFilesOnly(page) {
    return page.name.endsWith('.md');
  }

  async _get(url, oauthToken) {
    const options = this._buildOptions(oauthToken, 'GET');
    const response = await fetch(`${GITHUB_API_URL}${url}`, options);
    if (response.status === 200) {
      return response.json();
    }
    return undefined;
  }

  _decodeContent(content) {
    if (content) {
      return decodeURIComponent(escape(window.atob(content)));
    }
    return undefined;
  }

  async getAuthenticatedUser(oauthToken) {
    const user = await this._get('/user', oauthToken);
    if (user) {
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
    return this._get(`/users/${user}/repos?per_page=100`, oauthToken);
  }

  async getPages(userName, repository, oauthToken) {
    const pages = await this._get(`/repos/${userName}/${repository}/contents`, oauthToken);
    return pages.filter(this._markdownFilesOnly).map(page => this._mapPage(page));
  }

  async getPage(userName, repository, path, oauthToken) {
    const page = await this._get(`/repos/${userName}/${repository}/contents/${this._appendExtension(path)}`, oauthToken);
    return this._mapPage(page);
  }
}

export default new GithubService();
