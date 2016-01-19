var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Configuration
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/node_modules'));
// alternative is to install via bower and change config here

var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var mongoUrl = "mongodb://localhost:27017/sandbox";
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

app.post('/birds', function(req, res){
  console.log(req.body);
  var bird = req.body;
  console.log(req.params);
  console.log(req.query)
  db.collection('birds').insert(bird, function(err, result){
    res.json(result);
  });

});

app.get('/birds', function(req, res){
  db.collection('birds').find({}).toArray(function(err, results){
    res.json(results);
  })
});



// app.get('/sightings/new', function(req, res){
//   res.render('form');
// });

// app.get('/api/sightings', function(req, res){
//   res.render('form');
// });

// app.post('/sightings', function(req, res){
//   console.log("Submit form");
// });

app.listen(process.env.PORT || 3000);