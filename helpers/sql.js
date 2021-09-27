function sqlForFilteredSuggestions({name, latitude, longitude}) {
  let baseQuery = `SELECT ascii as "name", lat AS "latitude", long AS "longitude" FROM geoname WHERE`;
  let arrOfKeyAndVal = [];

  // make array containing 'key = value' statements
  for (let key in arguments[0]) {
    if (arguments[0][key] !== undefined) arrOfKeyAndVal.push(`${key} = '${arguments[0][key]}'`);
  }

  // create array of sql clauses
  arrOfKeyAndVal = arrOfKeyAndVal.map(clause => {
    if (clause.includes('name')) return `ascii ILIKE '${'%' + name + '%'}'`;
    else if (clause.includes('latitude')) return `lat BETWEEN ${+latitude - 50} AND ${+latitude + 50}`;
    else if (clause.includes('longitude')) return `long BETWEEN ${+longitude - 50} AND ${+longitude + 50}`;
  });

  // attach either the concatenated string, or the single array item to the end of: SELECT ... FROM geoname WHERE
  baseQuery += (arrOfKeyAndVal.length === 1 ? ` ${arrOfKeyAndVal[0]}` : ` ${arrOfKeyAndVal.join(' AND ')}`);

  // return query
  return baseQuery + ` AND population > 5000 AND (country = 'US' or country = 'CA') LIMIT 5`;
}

module.exports = sqlForFilteredSuggestions;