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