var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
app.use(bodyParser.urlencoded({extended: true}));
//var favicon = require('serve-favicon');

//Needed to serve up static paths in all public folder.
app.use(express.static(path.join(__dirname, 'public')));

//Serve the html form for the users


app.get("/",function(req, res){
  res.sendfile("public/html/form.html");
});

//get responses of the html form
app.post('/', function(req, res){
  var email = req.body.email;
  console.log('This is the email: ' + email);
  var password = req.body.password;
  console.log('This is the Password' + password);
  console.log('This is what is being passed' + JSON.stringify(req.body));
});

app.listen(3000, function(){
  console.log("server listening on 3000");
})
