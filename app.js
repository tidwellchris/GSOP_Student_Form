var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
app.use(bodyParser.urlencoded({extended: false}));
//var favicon = require('serve-favicon');

//Needed to serve up static paths in all public folder.
app.use(express.static(path.join(__dirname, 'public')));

//Serve the html form for the users
app.get("/",function(req, res){
  res.sendfile("public/html/form.html");
});

//Check for email on focus out
// $('#txtEmail').focusout(function(){
//     checkEmail();
// });

//get responses of the html form
app.post('/', function(req, res){
  var username = req.body.user;
  var password = req.body.password;
});

app.listen(3000, function(){
  console.log("server listening on 3000");
})
