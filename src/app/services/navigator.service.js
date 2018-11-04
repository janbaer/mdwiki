import { route } from 'preact-router';

class NavigatorService {
  gotoConnectPage(token) {
    let path = '/connect';
    if (token) {
      path += `?token=${token}`;
    }
    route(path);
  }

  gotoHomePage() {
    route('/');
  }

  gotoPage(pageName) {
    route(`/?page=${pageName}`);
  }
}

export default new NavigatorService();
