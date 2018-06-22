const db = require('../database/connection')

const Stash = {};

// Stash.all = () => {
//   return db.any('SELECT * FROM stash');
// }

Stash.all = () => {
  return db.any(`
    SELECT stash.user_id as user_id,
      stash.id as stash_id,
      stash.stash_url,
      stash.is_public,
      users.username,
      stash_tags.tag_id,
      tags.tag
    FROM stash as stash
    JOIN users as users
      ON users.id = stash.user_id
    JOIN stash_tags as stash_tags
      ON stash_tags.stash_id = stash.id
    JOIN tags as tags
      ON tags.id = stash_tags.tag_id
  `)
}

Stash.public = () => {
  return db.any(`
    SELECT stash.user_id as user_id,
      stash.id as stash_id,
      stash.stash_url,
      stash.is_public,
      users.username,
      stash_tags.tag_id,
      tags.tag
    FROM stash as stash
    JOIN users as users
      ON users.id = stash.user_id
    JOIN stash_tags as stash_tags
      ON stash_tags.stash_id = stash.id
    JOIN tags as tags
      ON tags.id = stash_tags.tag_id
    WHERE is_public = true
  `)
}

Stash.byUser = (id) => {
  console.log(id)
  return db.any(`
    SELECT stash.user_id as user_id,
      stash.id as stash_id,
      stash.stash_url,
      stash.is_public,
      users.username,
      stash_tags.tag_id,
      tags.tag
    FROM stash as stash
    JOIN users as users
      ON users.id = stash.user_id
    JOIN stash_tags as stash_tags
      ON stash_tags.stash_id = stash.id
    JOIN tags as tags
      ON tags.id = stash_tags.tag_id
    WHERE user_id = $<id>
  `, id)
}

// Limiting output to just one for now
// If we implement tags this will have to be changed
//to db.any and remove the LIMIT 1 clause
Stash.byStashID = (id) => {
  return db.one(`
    SELECT stash.user_id as user_id,
      stash.id as stash_id,
      stash.stash_url,
      stash.is_public,
      users.username,
      stash_tags.tag_id,
      tags.tag
    FROM stash as stash
    JOIN users as users
      ON users.id = stash.user_id
    JOIN stash_tags as stash_tags
      ON stash_tags.stash_id = stash.id
    JOIN tags as tags
      ON tags.id = stash_tags.tag_id
    WHERE stash_id = $<id>
    LIMIT 1
  `, id)
}


Stash.create = (stashInfo) => {
  return db.one(`
        INSERT INTO stash (stash_url,is_public,user_id)
        VALUES ($<stashInfo.stash_url>,$<stashInfo.is_public>,$<stashInfo.user_id>)
        RETURNING *
    `, {
    stashInfo
  })
}

Stash.delete = (id) => {
  return db.result(`
    DELETE FROM stash WHERE id = $<id.stash_id>
    `, {
    id
  });
}

// //TEST

// Stash.create({
//   stash_url : "http://example.com/dogswithjobs",
//   is_public : true,
//   user_id: 1
// }).then(dbResponse => {
//   console.log(dbResponse);
// })
// Stash.all()
// .then(dbResponse => {
//   console.log(dbResponse)
// })

// Stash.public()
//   .then(dbResponse => {
//     console.log(dbResponse)
//   })

// Stash.byUser({
//     id: 1
//   })
//   .then(dbResponse => {
//     console.log(dbResponse)
//   })

// Stash.byStashID({
//     id: 1
//   })
//   .then(dbResponse => {
//     console.log(dbResponse)
//   })

// Stash.delete({
//     stash_id: 13
//   })
//   .then(dbResponse => {
//     console.log(dbResponse)
//   })

module.exports = Stash;