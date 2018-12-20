import configuration from './../services/configuration.service.js';
import github from './../services/github.service.js';

class PageStore {
  constructor() {
    this.pages = [];
    this.page = { content: '' };
  }

  async loadPages() {
    const { user, repository, oauthToken } = configuration;
    const pages = await github.getPages(
      user.loginName, repository, oauthToken
    );

    this.pages = this._sortByName(this._excludePages(pages));

    return this.pages;
  }

  async loadPage(pageName) {
    const { user, repository, oauthToken } = configuration;
    const page = await github.getPage(
      user.loginName, repository, pageName, oauthToken
    );
    this.page = page;
    return this.page;
  }

  async createPage(pageName) {
    const { user, repository, oauthToken } = configuration;
    const { pages } = this;

    const commitMessage = `Create new page ${pageName}`;
    const content = `# ${pageName}`;
    pageName = pageName.replace(/\s/g, '_');

    const page = await github.createPage(
      user.loginName, repository, pageName, content, commitMessage, oauthToken
    );

    pages.push(page);

    this.pages = this._sortByName(pages);
    this.page = page;

    return this.page;
  }

  async updatePage(content, commitMessage) {
    const { user, repository, oauthToken } = configuration;
    const { pages, page } = this;

    const updatedPage = await github.updatedPage(
      user.loginName, repository, page, content, commitMessage, oauthToken
    );

    this.pages = pages;
    this.page = updatedPage;

    return updatedPage;
  }

  async deletePage() {
    const { user, repository, oauthToken } = configuration;
    const { pages, page } = this;
    const commitMessage = `Delete page ${page.name}`;

    await github.deletePage(
      user.loginName, repository, page, commitMessage, oauthToken
    );

    const index = pages.indexOf(p => p.name === page.name);
    pages.splice(index, 1);

    this.pages = pages;
  }

  _excludePages(pages) {
    const PAGES_TO_EXCLUDE = ['readme', 'index'];
    return pages.filter(p => !PAGES_TO_EXCLUDE.some(name => name === p.name.toLowerCase()));
  }

  _sortByName(pages) {
    return pages.sort((p1, p2) => {
      return p1.name.localeCompare(p2.name);
    });
  }
}

export default PageStore;