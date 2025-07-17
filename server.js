const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

//Routes
const indexRoutes = require('./server/routes/app');
const cardsRoutes = require('./server/routes/cards');
const decksRoutes = require('./server/routes/decks');

// Create the express app
const app = express();

// Create mongo connection
const mongoURI = 'mongodb://localhost:27017/mtg-organizer';
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error', err));

// Middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

app.use(express.static(path.join(__dirname, 'dist/mtg-organizer/browser')));

app.use('/', indexRoutes);
app.use('/cards', cardsRoutes);
app.use('/decks', decksRoutes);

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/mtg-organizer/browser/index.html'));
// });

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});