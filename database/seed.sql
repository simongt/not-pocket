INSERT INTO 
users (username,password_digest)
VALUES
('drl@example.com','$2b$10$nRnN8OLG4pDO0NHKZZSjju7P4mVuR.vQqcf5wbyAao1dbNyXEMJ7S'),
('ykv@example.com','$2b$10$nRnN8OLG4pDO0NHKZZSjju7P4mVuR.vQqcf5wbyAao1dbNyXEMJ7S'),
('sy@example.com','$2b$10$nRnN8OLG4pDO0NHKZZSjju7P4mVuR.vQqcf5wbyAao1dbNyXEMJ7S'),
('ryl@example.com','$2b$10$nRnN8OLG4pDO0NHKZZSjju7P4mVuR.vQqcf5wbyAao1dbNyXEMJ7S');


INSERT INTO 
tags (tag)
VALUES
('node'),
('ruby'),
('sql'),
('scripting');


INSERT INTO 
stash (stash_url,is_public,user_id)
VALUES
('https://www.boredpanda.com/unusual-animal-friendships-interspecies/','true','1'),
('https://www.npr.org/2018/06/14/619860781/achilles-the-psychic-cat-predicts-russia-win-in-world-cup-opening-match','true','2'),
('https://www.npr.org/2018/06/06/617422934/feral-peacocks-attack-cars-in-british-columbia','false','3'),
('https://www.npr.org/2018/06/13/619491657/raccoon-is-trapped-in-minnesota-after-capturing-fans-worldwide','false','4'),
('https://animalfactguide.com/2011/04/baby-cheetah-and-puppy-become-pals/','true','1'),
('https://www.npr.org/2018/06/07/618047447/man-kills-snake-snake-tries-to-kill-him-back','true','2'),
('https://animalfactguide.com/2011/04/baby-cheetah-and-puppy-become-pals/','false','3'),
('https://news.nationalgeographic.com/2017/12/animals-rats-lions-weird-orcas/','false','4'),
('https://pulptastic.com/17-touching-animal-stories-will-melt-heart/','true','1'),
('https://www.neatorama.com/2011/02/11/the-8-most-romantic-creatures-in-the-animal-kingdom/','true','2'),
('https://animalfactguide.com/animal-facts/meerkat/','false','3'),
('https://animalfactguide.com/animal-facts/bottlenose-dolphin/','false','4');

CREATE TABLE stash
(
  id SERIAL PRIMARY KEY,
  stash_url TEXT NOT NULL,
  is_public BOOLEAN DEFAULT false,
  user_id INTEGER REFERENCES users(id),
  card_title TEXT,
  card_type TEXT,
  card_url TEXT,
  card_site_name TEXT,
  card_description TEXT,
  card_image_url TEXT,
  card_image_width TEXT,
  card_image_height TEXT
);

UPDATE stash
SET
  card_title = '15 Unusual Animal Friendships That Will Melt Your Heart', 
  card_type = 'article', 
  card_url = 'https://www.boredpanda.com/unusual-animal-friendships-interspecies/', 
  card_site_name = 'Bored Panda', 
  card_description = 'There are some people out there that still believe that animals are just dumb beasts, but the unlikely animal friendships we''ve gathered here will prove that they are capable of feeling love and compassion just like we are. Naturally, all of these pictures are heart-breakingly adorable, but there''s more to it than that. Why did these animals form their friendships?', 
  card_image_url = 'https://static.boredpanda.com/blog/wp-content/uploads/2014/01/unusual-animal-friendship-coverimage.jpg', 
  card_image_width = NULL, 
  card_image_height = NULL
WHERE id = 1;

-- In this example, note that multiple image URLs are extracted and returned from cardify / open-graph
UPDATE stash
SET
  card_title = 'Achilles The ''Psychic'' Cat Predicts Russia Win In World Cup Opening Match', 
  card_type = 'article', 
  card_url = 'https://www.npr.org/2018/06/14/619860781/achilles-the-psychic-cat-predicts-russia-win-in-world-cup-opening-match', 
  card_site_name = 'NPR.org', 
  card_description = 'Achilles is a designated rat hunter at Hermitage Museum in St. Petersburg. The museum veterinarian said the cat "loves his motherland and couldn''t vote otherwise."', 
  card_image_url = 'https://media.npr.org/assets/img/2018/06/14/rtx68w5a_wide-1c3896af8ec1edb284d723de8d55f71cdd82cceb.jpg?s=1400', 
  card_image_width = null, 
  card_image_height = null
WHERE id = 2;

UPDATE stash
SET
  card_title = 'Baby Cheetah and Puppy Become Pals', 
  card_type = 'article', 
  card_url = 'https://animalfactguide.com/2011/04/baby-cheetah-and-puppy-become-pals/', 
  card_site_name = 'Animal Fact Guide', 
  card_description = 'Starting today guests at Busch Gardens in Tampa, Florida will get to see an unlikely pair - a cheetah cub and a yellow Labrador puppy. The 8-week-old cheetah was taken in last month because his', 
  card_image_url = '/not-pocket.png', 
  card_image_width = '666px', 
  card_image_height = '666px'
WHERE id = 7;

-- UPDATE stash
-- SET
--   card_title = '', 
--   card_type = '', 
--   card_url = '', 
--   card_site_name = '', 
--   card_description = '', 
--   card_image_url = '', 
--   card_image_width = '', 
--   card_image_height = ''
-- WHERE id = 3;

INSERT INTO 
stash_tags (stash_id,tag_id)
VALUES
(1,1),
(1,2),
(2,1),
(2,3),
(3,1),
(4,4),
(4,1),
(5,1),
(6,1),
(6,3),
(7,1),
(7,2),
(8,1),
(9,3),
(9,1),
(10,4),
(10,1),
(11,1),
(12,1),
(12,3);