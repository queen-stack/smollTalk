DROP DATABASE IF EXISTS smoll_talk_db;
CREATE DATABASE smoll_talk_db;
USE smoll_talk_db;

CREATE TABLE conversation (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  topic_name VARCHAR(25),
  PRIMARY KEY (id)
);
