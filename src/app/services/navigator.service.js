import { route } from 'preact-router';

class NavigatorService {
  gotoHome() {
    route('/');
  }

  gotoConnect(token) {
    let path = '/connect';
    if (token) {
      path += `?token=${token}`;
    }
    route(path);
  }

  gotoSearch(searchTerm) {
    let path = '/search';
    if (searchTerm) {
      path += `?q=${searchTerm}`;
    }
    route(path);
  }

  gotoPage(pageName) {
    route(`/?page=${pageName}`);
  }
}

export default new NavigatorService();
