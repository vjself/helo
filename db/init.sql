DROP TABLE IF EXISTS helousers;

CREATE TABLE helousers
(
   id SERIAL PRIMARY KEY,
   username VARCHAR(64),
   password VARCHAR(64)
)