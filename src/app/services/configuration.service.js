import storage from './storage.service';

const STORE_KEY = 'mdwiki-config';

class ConfigurationService {
  constructor() {
    this.isLocal = window.location.host.startsWith('localhost');
    this.config = storage.getObject(STORE_KEY);
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
    const oauthClientId = this.isLocal ? '80a8ebcf2785af9f5c32' : '';
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
}

export default new ConfigurationService();
