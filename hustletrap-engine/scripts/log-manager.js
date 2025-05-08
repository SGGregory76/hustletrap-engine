const LogManager = {
  _key: 'gameLog',
  get() {
    return JSON.parse(localStorage.getItem(this._key) || '[]');
  },
  add(entry) {
    const log = this.get();
    log.push({ time: new Date().toLocaleString(), text: entry });
    localStorage.setItem(this._key, JSON.stringify(log));
  },
  clear() {
    localStorage.removeItem(this._key);
  }
};