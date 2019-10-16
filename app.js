const express = require('express');
const app = express();
const path = require('path');


app.get('/', function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
}); 
app.get('/about', function(req,res){
    res.sendFile(path.join(__dirname+'/about.html'));
  }); 
  app.get('/contact', function(req,res){
    res.sendFile(path.join(__dirname+'/contact.html'));
  }); 
app.use( express.static('public'));  


var server = app.listen(3000);