const express = require('express');
const path = require('path');
const db = require('./queries');

const app = express();

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// retrieve data from database
app.get('/standup_times', db.getStandupTimes);

// TODO comeback to this
app.post('/start_standup', db.startStandup);
app.put('/end_standup/:attendees', db.endStandup);


// Put all API endpoints under '/api'
app.get('/api/passwords', (req, res) => {
  const count = 5;

  // Generate some passwords
  const passwords = ['asdsadasdasd', 'asdsadasasd'];

  // Return them as json
  res.json(passwords);

  console.log(`Sent ${count} passwords`);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);