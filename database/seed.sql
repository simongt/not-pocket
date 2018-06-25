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
  ('tag-1'),
  ('tag-2'),
  ('tag-3'),
  ('tag-4');


INSERT INTO 
  stash (stash_url,is_public,user_id)
VALUES
  ('https://www.boredpanda.com/unusual-animal-friendships-interspecies/','true','1'),
  ('https://www.npr.org/2018/06/14/619860781/achilles-the-psychic-cat-predicts-russia-win-in-world-cup-opening-match','true','2'),
  ('https://www.npr.org/2018/06/06/617422934/feral-peacocks-attack-cars-in-british-columbia','false','3'),
  ('https://www.npr.org/2018/06/13/619491657/raccoon-is-trapped-in-minnesota-after-capturing-fans-worldwide','false','4'),
  ('https://animalfactguide.com/2011/04/baby-cheetah-and-puppy-become-pals/','false','1'),
  ('https://www.npr.org/2018/06/07/618047447/man-kills-snake-snake-tries-to-kill-him-back','true','2'),
  ('https://animalfactguide.com/2011/04/baby-cheetah-and-puppy-become-pals/','true','3'),
  ('https://news.nationalgeographic.com/2017/12/animals-rats-lions-weird-orcas/','true','4'),
  ('https://pulptastic.com/17-touching-animal-stories-will-melt-heart/','false','1'),
  ('https://www.neatorama.com/2011/02/11/the-8-most-romantic-creatures-in-the-animal-kingdom/','false','2'),
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

-- The following stash entries are examples of how server.js sends a submitted url along with its meta (card) data.

-- In this example, open-graph seems to extract everything fine (there's no image width/height, but since that's trivial, we can leave it set to NULL through server.js)
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

-- In this example, note that multiple image URLs are extracted and returned from cardify / open-graph. Also it doesn't show below, but '\' was being used to delimit the quotation marks and had to be removed in server.js.
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

-- In this example, note that an image url is not being found by open-graph, therefore defaults are used in server.js
UPDATE stash
SET
  card_title = 'Baby Cheetah and Puppy Become Pals', 
  card_type = 'article', 
  card_url = 'https://animalfactguide.com/2011/04/baby-cheetah-and-puppy-become-pals/', 
  card_site_name = 'Animal Fact Guide', 
  card_description = 'Starting today guests at Busch Gardens in Tampa, Florida will get to see an unlikely pair - a cheetah cub and a yellow Labrador puppy. The 8-week-old cheetah was taken in last month because his', 
  card_image_url = '/not-pocket.png', 
  card_image_width = '666', 
  card_image_height = '666'
WHERE id = 7;

-- In this example, note that the site name is not being found by open-graph, therefore the site domain had to be extracted in server.js.
UPDATE stash
SET
  card_title = 'The 11 Weirdest Animal Stories of 2017', 
  card_type = 'article', 
  card_url = 'https://news.nationalgeographic.com/2017/12/animals-rats-lions-weird-orcas/', 
  card_site_name = 'news.nationalgeographic.com', 
  card_description = 'From cannibalistic chimps to a new species of purple frog, here are our picks for Mother Nature''s best gifts of 2017.', 
  card_image_url = 'https://news.nationalgeographic.com/content/dam/news/2017/08/24/frog-species/1-frog-species.ngsversion.1512711067498.adapt.1900.1.jpg', 
  card_image_width = '1900', 
  card_image_height = '1423'
WHERE id = 8;

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
  (1,1),  --tag-1
  (1,2),  --tag-2
  (2,1),  --tag-1
  (2,3),  --tag-3
  (3,1),  --tag-1
  (4,4),  --tag-4
  (4,1),  --tag-1
  (5,1),  --tag-1
  (6,1),  --tag-1
  (6,3),  --tag-3
  (7,1),  --tag-1
  (7,2),  --tag-2
  (8,1),  --tag-1
  (9,3),  --tag-3
  (9,1),  --tag-1
  (10,4), --tag-4
  (10,1), --tag-1
  (11,1), --tag-1
  (12,1), --tag-1
  (12,3); --tag-3