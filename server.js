const express = require('express');
const path = require('path');
const config = require('./config/config.js');


const app = express();

// Setup view engine
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(path.join(__dirname, '/dist'))));

app.get('*', (req, res) => {
  res.render('index');
});

app.listen(config.port, config.host, () => {
  console.info('Magic happens at port ', config.port);
});
