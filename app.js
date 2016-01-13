var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Configuration
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')

var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var mongoUrl = "mongodb://localhost:27017/myDB";
var db;

MongoClient.connect(mongoUrl, function(err, database){
  if (err) {
    console.log(err);
  }
  console.log("connected!");
  db = database;
  process.on('exit', db.close);
})

// Routes
app.get('/', function(req, res){
  res.render('index');
});

app.get('/sightings/new', function(req, res){
  res.render('form');
});

app.get('/api/sightings', function(req, res){
  res.render('form');
});

app.post('/sightings', function(req, res){
  console.log("Submit form");
});

app.listen(process.env.PORT || 3000);
