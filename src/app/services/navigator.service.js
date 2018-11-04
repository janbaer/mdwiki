import { route } from 'preact-router';

class NavigatorService {
  gotoConnectPage() {
    route('/connect');
  }

  gotoHomePage() {
    route('/');
  }

  gotoPage(pageName) {
    route(`/?page=${pageName}`);
  }
}

export default new NavigatorService();
