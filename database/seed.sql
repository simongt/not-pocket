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
('example.com/puppies','true','1'),
('example.com/kittens','true','2'),
('example.com/reptiles','false','3'),
('example.com/lizards','false','4'),
('example.com/puppies','true','1'),
('example.com/monkeys','true','2'),
('example.com/short_ppl','false','3'),
('example.com/node','false','4'),
('example.com/python','true','1'),
('example.com/ruby','true','2'),
('example.com/insects','false','3'),
('example.com/dolphins','false','4');


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