const db = require('../database/connection');

const User = {};

Users.all = () => {
  return db.('SELECT * FROM users')
}

module.exports = Users;
