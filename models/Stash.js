const db = require('../database/connection')

const Stash = {};

Stash.all = () => {
  return db.any('SELECT * FROM stash');
}

module.exports = Stash;