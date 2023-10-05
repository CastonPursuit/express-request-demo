const express = require('express');
const app = express();

const colors = require('./models/color.js');

// THE ORDER MATTERS!! THIS WILL BURN YOU!!!

app.get('/', (req, res) => {
  res.send('home page');
});

app.get('/colors', (req, res) => {
  res.send(colors);
});

app.get('/:myfavorite/', (req, res) => {
  console.log(req.query);

  const { favoritefish } = req.query;

  res.send(req.params.myfavorite + favoritefish);
});

app.get('/colors/:pompoms', (req, res) => {
  const { pompoms } = req.params;
  if (colors[pompoms]) {
    res.send(colors[pompoms]);
  } else {
    res.send('Cannot find any colors at this index: ' + pompoms);
  }
});

module.exports = app;
