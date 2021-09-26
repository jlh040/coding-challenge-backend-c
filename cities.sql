DROP DATABASE IF EXISTS cities;

CREATE DATABASE cities;

\c cities;

CREATE TABLE geoname
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  ascii VARCHAR(200),
  alt_name VARCHAR(5000),
  lat NUMERIC NOT NULL,
  long NUMERIC NOT NULL,
  feat_class CHARACTER(1),
  feat_code VARCHAR(10),
  country CHARACTER(2),
  cc2 VARCHAR(60),
  admin1 VARCHAR(20),
  admin2 VARCHAR(80),
  admin3 VARCHAR(20),
  admin4 VARCHAR(20),
  population BIGINT,
  elevation INTEGER,
  dem INTEGER,
  tz VARCHAR(40),
  modified_at DATE
);

CREATE INDEX name_idx 
ON geoname 
(name);

CREATE INDEX names_lats_longs
ON geoname 
(name, lat, long);

COPY geoname 
FROM '/Users/jeffhall/Desktop/Software Engineering Career Track/Section_V/Exercises/49.3.2/coding-challenge-backend-c/data/cities_canada-usa.tsv'
DELIMITER E'\t'
CSV HEADER;
