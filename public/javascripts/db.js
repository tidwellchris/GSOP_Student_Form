//This is where the SQL connections are added to handle the insert statements

// mysql.query('insert into '+ TABLE +' (name, price) values ("' + req.body.name + '", "' + req.body.name.price + '")',
// function selectCb(err, results, fields) {
//     if (err) throw err;
//     else res.send('success');
// });


// var sqlConn = require("./sqlconn");

// var db = function() {
//   this.getRoom=function(room, callback){
//     sqlConn.Pool.getConnection(function (err,connection) {
//       sqlConn.Pool.query('select a.RoomName, a.rmId, a.SVGName, b.location, b.building, b.flr, b.locid from Room a join Location b on a.locid = b.locid where roomname = ?;', [room], function(err, rows) {
//       //  console.log('Query is using ' + room +' this based off user search');
//         connection.release();
//         if (err) {
//           console.log('db.GetRoom err: ',err);
//           throw err;
//         }

//         callback( rows[0] );
//         });
//     });
//   }
//   this.getRooms = function(callback){
//     sqlConn.Pool.getConnection(function (err,connection) {
//     //  console.log('Here is the Erro for Connection: ' + err);
//       sqlConn.Pool.query('select a.roomname, a.RmId, a.SVGName, b.location, b.building, b.flr, b.locid from Room a join Location b on a.locid = b.locid', function(err, rows) {
//         connection.release();
//         if (err) {
//           console.log('db.getRooms err: ',err);
//           throw err;
//         }
//         callback ( rows );
//         //callback ();
//         });
//       });
//   }
//   this.getSVGData = function (roomId, callback) {
//     sqlConn.Pool.getConnection(function (err,connection) {
//       sqlConn.Pool.query('select a.SVGName , b.svgFile from Room a join Location b on a.locid = b.locid where RmId = ?;', [roomId], function(err, rows) {
//         connection.release();
//         if (err) {
//           console.log('db.getSVGData err: ',err);
//           throw err;
//         }
//         callback (rows[0]);
//         });
//       });

//   }
// return this;
// }
// module.exports = db;
