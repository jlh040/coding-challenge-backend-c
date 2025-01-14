"use strict";

const db = require("../db");
const sqlForFilteredSuggestions = require('../helpers/sql');
const NotFoundError  = require("../expressError");

class Suggestion {
  /** Find all suggestions.
   * Accepts optional paramaters which will filter our results.
   * 
   * Returns [{ name, latitude, longitude }, ...]
   * */

  static async findAll({ name, latitude, longitude }) {
    let query;
    if (latitude === undefined && longitude === undefined) {
      query = `SELECT ascii AS "name",
                      lat AS "latitude",
                      long AS "longitude"
              FROM geoname
              WHERE ascii ILIKE '%${name}%' AND
              population > 5000 AND
              country IN ('US', 'CA')
              LIMIT 5`
    } else {
      query = sqlForFilteredSuggestions({ name, latitude, longitude});
    }
    console.log(query);
    const suggestionsRes = await db.query(query);
    return suggestionsRes.rows;
  };
}

module.exports = Suggestion;