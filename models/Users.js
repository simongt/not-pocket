const db = require('../database/connection');

const Users = {};

Users.all = () => {
  return db.any('SELECT * FROM users')
}

Users.one = (id) => {
  return db.one(`
    SELECT * FROM users where id =  $<id>   
  `, id)
}


//Tests

// Users.all()
// .then(dbResponse => {
//   console.table(dbResponse)
// })

// Users.one({
//   id: 1
// })
// .then(dbResponse => {
//   console.table(dbResponse)
// })


module.exports = Users;
