// Get dependencies
var express = require('express');
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan')

// import the routing file to handle the default (index) route
var index = require('./server/routes/app');
const cardsRoutes = require('./server/routes/cards');
const decksRoutes = require('./server/routes/decks');

var app = express(); // create an instance of express

// Tell express to use the following parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());

app.use(logger('dev')); // Tell express to use the Morgan logger

// Add support for CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  next();
});

// Tell express to use the specified director as the
// root directory for your web site
app.use(express.static(path.join(__dirname, 'dist/mtg_organizer/browser')));

// Tell express to map the default route ('/') to the index route
console.log('Registering index route...');
app.use('/', index);
console.log('Registering cards route...');
app.use('/cards', cardsRoutes);
console.log('Registering deck route...');
app.use('/deck-building', decksRoutes);

// Tell express to map all other non-defined routes back to the index page
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/mtg_organizer/browser/index.html'));
// });

// Define the port address and tell express to use this port
const port = process.env.PORT || '3000';
app.set('port', port);

// Create HTTP server.
const server = http.createServer(app);

// Tell the server to start listening on the provided port
server.listen(port, function() {
  console.log('API running on localhost: ' + port)
});