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
