/** ---------- THIRD PARTY MODULES ---------- **/
var express = require("express");
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

/** ---------- OUR MODULES ---------- **/
var hero = require('./routes/heroesroute');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json());
// Serve back static files
app.use(express.static(path.join(__dirname, './public')));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/heroesroute', hero);
// Handle index file separately
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public/views/index.html'));
});

/** ---------- MONGOOSE CONNECTION HANDLING ---------- **/
var databaseUri = 'mongodb://localhost:27017/omicron';  //default port for mongo DBs
mongoose.connect(databaseUri);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ', databaseUri);
});
mongoose.connection.on('error', function(err){
  console.log('Mongoose failed to connect because error: ', err);
});

/** ---------- START SERVER ---------- **/
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
