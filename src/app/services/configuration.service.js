import EventEmitter from 'eventemitter3';

import storage from './storage.service';

import EVENTS from '~/app/constants/events.constants';

const STORE_KEY = 'mdwiki-config';
const APP_VERSION_STORE_KEY = 'mdwiki-version';
const DEFAULT_VERSION = '3.1.0';

class ConfigurationService {
  constructor() {
    this.isLocal = window.location.host.startsWith('localhost');
    this.isLan = window.location.host.startsWith('192.168.178');

    this.config = storage.getObject(STORE_KEY);

    this.eventEmitter = new EventEmitter();

    navigator.serviceWorker.addEventListener('message', event => {
      const { type, version } = event.data;
      switch (type) {
        case 'update':
        case 'activate':
          if (version) {
            storage.set(APP_VERSION_STORE_KEY, version);
            this.eventEmitter.emit(EVENTS.APP_VERSION_CHANGED, version);
          }
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
    return `https://github-oauth-bridge.jan-baer.now.sh/api/login?clientId=${oauthClientId}`;
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
    return storage.get(APP_VERSION_STORE_KEY) || DEFAULT_VERSION;
  }
}

export default new ConfigurationService();
