var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');
var dbquery = require('./objects/db');
var server = http.createServer(app);


app.use(bodyParser.urlencoded({extended: true}));
//var favicon = require('serve-favicon');

//Needed to serve up static paths in all public folder.
app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//Serve the html form for the users
app.param('data', function(req,res,next,formData){
  req.formData=formData;
  next();
})



app.get("/",function(req, res, formData){
  res.sendfile("public/html/form.html");
});

//get responses of the html form
app.post('/', function(req, res){

var db = new dbquery();
try{
  db.getformData(function(formData){
    if (formData === undefined){
      res.sendStatus(404);
    } else {
        formData = req.body;
        console.log(' This is on the App Page --> ' +formData);
        res.set('content-type', 'application/json');
        res.send(JSON.stringify(formData));
      }
    });
  } catch (err){
    res.sendStatus(500);
  }
});
// app.post('/', function(req, res, next){
//   //var email = req.body.email;
//   //console.log('This is the email: ' + email);
//   var formData = JSON.stringify(req.body);
//   req.send(formData);
// });





app.listen(3000, function(){
  console.log("server listening on 3000");
})
