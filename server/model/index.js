const connection = require('../db/connection.js');

module.exports = {
  getSomethingFromModel(callback) {
    const myQuery = 'SELECT * FROM questions LIMIT 1';

    connection.query(myQuery, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },
}
