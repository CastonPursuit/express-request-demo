const express = require('express');
const colors = express.Router();
const colorsArray = require('../models/color.js');

// INDEX ROUTE:
// We are showing the entire list of items!
colors.get('/', (req, res) => {
  res.json(colorsArray);
});

colors.get('/somethingElse', (req, res, next) => {
  res.send('Hi');
});

// SHOW ROUTE!
// WE ARE SHOWING ONE ITEM FROM OUR LIST
colors.get('/:myId', (req, res) => {
  const { myId } = req.params;
  if (colorsArray[myId]) {
    res.send(colorsArray[myId]);
  } else {
    res.status(404).send('Not found!');
  }
});

colors.use((req, res, next) => {
  console.log(req.method, req.headers.host, req.path);
  if (req.body.userName === 'Gary' && req.body.password === '123') {
    return next();
  } else {
    return res.status(403).send('No no no!');
  }
});

const checkForColorKey = (req, res, next) => {
  console.log('Check');
  if (req.body.hasOwnProperty('name')) {
    return next();
  } else {
    res.send('You must supply an object with a key of `name`');
  }
};

// CREATE ROUTE! Creates a new resource on the server.
colors.post('/', checkForColorKey, (req, res) => {
  const { name } = req.body;
  colorsArray.push(name);
  res.send('Ok');
});

// colors.get('/somethingElse', (req, res, next) => {
//   console.log('Something else route');
//   res.send('Hi');
// });

module.exports = colors;
