var mysql = require(mysql);



var conn = mysql.createConnection({
  connectionLimit : 50,
  host            : 'mysql.server266.com',
  user            : 'dgsopb',
  password        : 'Preaching3ch00l',
  database        : 'gsoponline_sis'
});
