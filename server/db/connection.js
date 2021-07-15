const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '2431',
  database : 'QA',
});

connection.connect();

module.exports = connection;
