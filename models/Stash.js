const db = require('../database/connection')

const Stash = {};

//Returns all stashes
Stash.all = () => {
  return db.any(`
    SELECT stash.user_id as user_id,
      stash.id as stash_id,
      stash.stash_url,
      stash.is_public,
      users.username,
      array_agg(stash_tags.tag_id) as tag_ids,
      array_agg(tags.tag) as tags
    FROM stash as stash
    JOIN users as users
      ON users.id = stash.user_id
    LEFT JOIN stash_tags as stash_tags
      ON stash_tags.stash_id = stash.id
    LEFT JOIN tags as tags
      ON tags.id = stash_tags.tag_id
    GROUP BY stash.user_id, stash.id, stash.stash_url, stash.is_public, users.username
  `);
}

//Returns all public stashes
Stash.public = () => {
  return db.any(`
    SELECT stash.user_id as user_id,
      stash.id as stash_id,
      stash.stash_url,
      stash.is_public,
      users.username,
      array_agg(stash_tags.tag_id) as tag_ids,
      array_agg(tags.tag) as tags
    FROM stash as stash
    JOIN users as users
      ON users.id = stash.user_id
    LEFT JOIN stash_tags as stash_tags
      ON stash_tags.stash_id = stash.id
    LEFT JOIN tags as tags
      ON tags.id = stash_tags.tag_id
    WHERE is_public = true
    GROUP BY stash.user_id, stash.id, stash.stash_url, stash.is_public, users.username
  `);
}

//Returns all stashes by a given user
Stash.byUser = (id) => {
  console.log(id)
  return db.any(`
    SELECT stash.user_id as user_id,
      stash.id as stash_id,
      stash.stash_url,
      stash.is_public,
      users.username,
      array_agg(stash_tags.tag_id) as tag_ids,
      array_agg(tags.tag) as tags
    FROM stash as stash
    JOIN users as users
      ON users.id = stash.user_id
    LEFT JOIN stash_tags as stash_tags
      ON stash_tags.stash_id = stash.id
    LEFT JOIN tags as tags
      ON tags.id = stash_tags.tag_id
    WHERE user_id = $<id>
    GROUP BY stash.user_id, stash.id, stash.stash_url, stash.is_public, users.username
  `, id);
}

//Returns stash matching provided stash ID
Stash.byStashID = (id) => {
  return db.one(`
    SELECT stash.user_id as user_id,  
      stash.id as stash_id,
      stash.stash_url,
      stash.is_public,
      users.username,
      array_agg(stash_tags.tag_id) as tag_ids,
      array_agg(tags.tag) as tags
    FROM stash as stash
    JOIN users as users
      ON users.id = stash.user_id
    LEFT JOIN stash_tags as stash_tags
      ON stash_tags.stash_id = stash.id
    LEFT JOIN tags as tags
      ON tags.id = stash_tags.tag_id
    WHERE stash_id = $<id>
      GROUP BY stash.user_id, stash.id, stash.stash_url, stash.is_public, users.username
  `, id);
}

//Creates a new stash, returns information includeing stash_id
Stash.create = (stashInfo, cardInfo) => {
  /*
    cardInfo will allow us extract title, type, url, site_name, description, image.url, image.width, image.height
  */
  return db.one(`
        INSERT INTO stash (stash_url, is_public, user_id, card_title, card_type, card_url, card_site_name, card_description, card_image_url, card_image_width, card_image_height)
        VALUES ($<stashInfo.stash_url>, $<stashInfo.is_public>, $<stashInfo.user_id>, $<cardInfo.title>, $<cardInfo.type>, $<cardInfo.url>, $<cardInfo.site_name>, $<cardInfo.description>, $<cardInfo.image.url>, $<cardInfo.image.width>, $<cardInfo.image.height>)
        RETURNING *
    `, {stashInfo, cardInfo});
}

//Deletes stash matching provided ID
Stash.delete = (id) => {
  return db.result(`
    DELETE FROM stash WHERE id = $<id>
    `, id);
}

// //TEST

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

// Stash.create({
//   stash_url : "http://example.com/dogswithjobs",
//   is_public : true,
//   user_id: 1
// }).then(dbResponse => {
//   console.log(dbResponse);
// })

// Stash.delete({
//     stash_id: 13
//   })
//   .then(dbResponse => {
//     console.log(dbResponse)
//   })

module.exports = Stash;