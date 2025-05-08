const StatsEngine = {
  _key: 'playerStats',
  init() {
    const base = { xp: 0, rep: 0, rp: 0, heat: 0, cash: 0 };
    const stats = Object.assign(base, JSON.parse(localStorage.getItem(this._key) || '{}'));
    localStorage.setItem(this._key, JSON.stringify(stats));
    return stats;
  },
  get() {
    return JSON.parse(localStorage.getItem(this._key) || '{}');
  },
  set(stats) {
    localStorage.setItem(this._key, JSON.stringify(stats));
  },
  gain(updates) {
    const stats = this.get();
    for (let key in updates) {
      stats[key] = (stats[key] || 0) + updates[key];
    }
    this.set(stats);
  },
  reset() {
    localStorage.removeItem(this._key);
  }
};