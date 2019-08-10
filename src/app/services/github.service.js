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

  _get(url, oauthToken) {
    const options = this._buildOptions(oauthToken, 'GET');
    return this._send(url, options, [200]);
  }

  _put(url, body, oauthToken) {
    const options = this._buildOptions(oauthToken, 'PUT');
    options.body = JSON.stringify(body);
    return this._send(url, options, [200, 201]);
  }

  _post(url, body, oauthToken) {
    const options = this._buildOptions(oauthToken, 'POST');
    options.body = JSON.stringify(body);
    return this._send(url, options, [201]);
  }

  _delete(url, body, oauthToken) {
    const options = this._buildOptions(oauthToken, 'DELETE');
    options.body = JSON.stringify(body);
    return this._send(url, options, [200]);
  }

  async _send(url, options, expectedStatus) {
    const response = await fetch(`${GITHUB_API_URL}${url}`, options);
    if (expectedStatus.some(s => s === response.status)) {
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

  createPage(userName, repository, pageName, content, commitMessage, oauthToken) {
    return this._createOrUpdatePage(userName, repository, this._appendExtension(pageName), content, commitMessage, undefined, oauthToken);
  }

  updatedPage(userName, repository, page, content, commitMessage, oauthToken) {
    return this._createOrUpdatePage(userName, repository, page.path, content, commitMessage, page.sha, oauthToken);
  }

  async _createOrUpdatePage(userName, repository, path, content, commitMessage, sha, oauthToken) {
    const url = `/repos/${userName}/${repository}/contents/${path}`;
    const body = {
      message: commitMessage,
      content: this._encodeContent(content),
      sha
    };

    // GitHub-API uses always PUT for creating and updating of content
    const response = await this._put(url, body, oauthToken);
    const page = response.content;
    page.content = body.content;
    return this._mapPage(page);
  }

  deletePage(userName, repository, page, commitMessage, oauthToken) {
    const { path, sha } = page;
    const url = `/repos/${userName}/${repository}/contents/${path}`;
    const body = {
      message: commitMessage,
      sha
    };
    return this._delete(url, body, oauthToken);
  }

  createNewRepository(userName, repository, isPrivateRepository, oauthToken) {
    const url = `/repos/${userName}/repos`;
    const body = {
      name: repository,
      private: isPrivateRepository,
      has_issues: false,
      has_projects: false,
      has_wiki: false,
      is_template: false,
      allow_squash_merge: false,
      allow_merge_commit: false,
      allow_rebase_merge: false,
    };
    return this._post(url, body, oauthToken);
  }
}

export default new GithubService();
