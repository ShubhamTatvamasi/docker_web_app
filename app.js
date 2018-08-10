const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Routes
app.get('/', function(req, res) {
  res.send('Hello World!');
});

// Listen
app.listen(port);
console.log('Listening on localhost:'+ port);
