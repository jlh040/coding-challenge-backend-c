"use strict";

const db = require("../db");
const NotFoundError  = require("../expressError");

class Suggestion {
  /** Find all suggestions.
   * Accepts optional paramaters which will filter our results.
   * 
   * 
   * Returns [{ name, latitude, longitude }, ...]
   * */

  static async findAll({ name, latitude, longitude }) {
    let query;
    if (latitude === undefined && longitude === undefined) {
      query = `SELECT name,
                      lat AS "latitude",
                      long AS "longitude"
              FROM geoname
              WHERE name ILIKE '%${name}%' AND
              population > 5000 AND
              (country = 'US' OR country = 'CA')
              LIMIT 10`
    } else {
      // query = sqlForFilteredSuggestions({ name, latitude, longitude});
    }

    const suggestionsRes = await db.query(query);
    return suggestionsRes.rows;
  };
}

module.exports = Suggestion;