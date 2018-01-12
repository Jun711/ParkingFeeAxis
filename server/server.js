var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var bookings = require('./routes/bookings');
var parkingSpots = require('./routes/parkingSpots');
var constants = require('./util/constants');

var app = express();

var port = constants.LISTENING_PORT;

app.listen(port, function () {
  console.log('App is running on port ', port);
})

// views templating engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// routes
app.use('/', index);
app.use('/api', bookings);
app.use('/api', parkingSpots);