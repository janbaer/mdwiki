import storage from './storage.service';

const STORE_KEY = 'mdwiki-config';

class ConfigurationService {
  constructor() {
    this.isLocal = window.location.host.startsWith('localhost');
    this.isLan = window.location.host.startsWith('192.168.178');

    this.config = storage.getObject(STORE_KEY);

    navigator.serviceWorker.addEventListener('message', event => {
      if (event.data.type === 'update') {
        this.config.appVersion = event.data.version;
        storage.setObject(STORE_KEY, this.config);
      }
    });
  }

  save(user, repository, oauthToken) {
    this.config = {
      user, repository, oauthToken
    };
    storage.setObject(STORE_KEY, this.config);
  }

  clear() {
    storage.delete(STORE_KEY);
    this.config = null;
  }

  get oauthLoginUrl() {
    let oauthClientId = 'ca7d513bb2a616052f76';
    if (this.isLocal) {
      oauthClientId = '80a8ebcf2785af9f5c32';
    } else if (this.isLan) {
      oauthClientId = '5e9db2b459c52458a8a2';
    }
    return `https://github-oauth-bridge.now.sh/login?clientId=${oauthClientId}`;
  }

  get user() {
    if (this.config) {
      return this.config.user;
    }
  }

  get repository() {
    if (this.config) {
      return this.config.repository;
    }
  }

  get oauthToken() {
    if (this.config) {
      return this.config.oauthToken;
    }
  }

  get appVersion() {
    if (this.config) {
      return this.config.appVersion || 1;
    }
  }
}

export default new ConfigurationService();
