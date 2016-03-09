var mysql       = require(mysql);
var connLimit   = 50;
var hst         = 'mysql.server266.com';
var mysqlUser   = 'dgsopb';
var mysqlPass   = 'Preaching3ch00l';
var dbs         = 'gsoponline_sis';
var stuTable    = '';
var usrTable    = '';
var schoolTable = '';

var pool = mysql.createPool({
  connectionLimit: connLimit,
  host: hst,
  user: mysqlUser,
  password: mysqlPass,
  database: dbs
});
console.log('Connection setup');


// var conn = mysql.createConnection({ 
//   connectionLimit : connLimit,
//   host            : hst,
//   user            : mysqlUser,
//   password        : mysqlPass,
//   database        : dbs
// });


// var mysql   = require('mysql');
// //Setting up cfenv
// var cfenv = require("cfenv");
// var appEnv = cfenv.getAppEnv();
// var creds;
// //  console.log("Setting up connection stuff");


//   if (appEnv.bind != "localhost"){
//     console.log("Using server credentials");
//     creds = cfenv.getAppEnv().getService("thd_mapping").credentials;
//   }else{
//     /* local creds */
//     console.log("Using local credentials");
//     creds = {
//       hostname: '172.20.247.31',
//       username: 'TnjjRf0q9ZEXF793',
//       password: 'KvTYp9xLaz7obdcU',
//       name: 'cf_5f4a7b53_ebc4_418b_87e3_977eb6e00f64'
//     }
// }

// var pool = mysql.createPool({
//   connectionLimit: 50,
//   host: creds.hostname,
//   user: creds.username,
//   password: creds.password,
//   database: creds.name
// });

// //
//   exports.Pool = pool;
