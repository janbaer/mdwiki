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

  async _put(url, body, oauthToken) {
    const EXPECTED_STATUS = [200, 201];

    const options = this._buildOptions(oauthToken, 'PUT');
    options.body = JSON.stringify(body);

    const response = await fetch(`${GITHUB_API_URL}${url}`, options);
    if (EXPECTED_STATUS.some(s => s === response.status)) {
      return response.json();
    }
    return undefined;
  }

  async _delete(url, body, oauthToken) {
    const options = this.buildOptions('DELETE');
    options.body = JSON.stringify(body);

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

  _encodeContent(content) {
    return window.btoa(unescape(encodeURIComponent(content)));
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

  async searchPages(userName, repository, searchTerm, oauthToken) {
    const searchUrl = `/search/code?q=${escape(searchTerm)}+in:file+extension:md+repo:${userName}/${repository}`;
    const searchResult = await this._get(searchUrl, oauthToken);
    searchResult.items = searchResult.items.map(page => this._mapPage(page));
    return searchResult;
  }

  async createOrUpdatePage(userName, repository, path, commitMessage, content, sha, oauthToken) {
    const url = `/repos/${userName}/${repository}/contents/${this._appendExtension(path)}`;
    const body = {
      message: commitMessage,
      content: this._encodeContent(content),
      sha
    };

    const response = await this._put(url, body, oauthToken);
    const page = response.content;
    page.content = body.content;
    return this._mapPage(page);
  }

  deletePage(userName, repository, path, commitMessage, sha, oauthToken) {
    const url = `/repos/${userName}/${repository}/contents/${this._appendExtension(path)}`;
    const body = {
      message: commitMessage,
      sha
    };
    return this._delete(url, body, oauthToken);
  }
}

export default new GithubService();
