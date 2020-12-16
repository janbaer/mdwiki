class StorageService {
  getDb() {
    return window.localStorage;
  }

  get(key) {
    return this.getDb().getItem(key);
  }

  set(key, value) {
    this.getDb().setItem(key, value);
  }

  setObject(key, object) {
    this.set(key, JSON.stringify(object));
  }

  getObject(key) {
    const value = this.get(key);
    if (value) {
      return JSON.parse(value);
    }
    return undefined;
  }

  delete(key) {
    this.getDb().removeItem(key);
  }
}

export default new StorageService();
