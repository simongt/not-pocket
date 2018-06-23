const db = require('../database/connection');

const Users = {};

Users.all = () => {
  return db.any('SELECT * FROM users')
}

Users.findByID = (id) => {
  return db.one(`
    SELECT * FROM users where id =  $<id>   
  `, id)
}

Users.create = (user) => {
  return db.one(`INSERT INTO users 
    (username, password_digest) 
    VALUES ($<user.username>, $<user.password_digest>) 
    RETURNING *`, {user});
};

Users.findByUsername = (username) => {
  return db.one(`SELECT * FROM users 
    WHERE username = $<username>`, {username})
    .catch((e) => {
      // console.log(e)
      return(null)
    })
};

//Tests

// Users.all()
// .then(dbResponse => {
//   console.table(dbResponse)
// })

// Users.findByID({
//   id: 1
// })
// .then(dbResponse => {
//   console.table(dbResponse)
// })

// Users.findByUsername("drll")
//   .then(dbResponse => {
//     console.table(dbResponse)
//   })

// Users.create({
//   username: "phil",
//   password_digest: "OMFGHUNTER5"
// })
// .then(dbResponse => {
//   console.table(dbResponse)
// })


module.exports = Users;