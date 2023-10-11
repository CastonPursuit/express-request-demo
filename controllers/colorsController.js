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

// colors.use((req, res, next) => {
//   console.log(req.method, req.headers.host, req.path);
//   if (req.body.userName === 'Gary' && req.body.password === '123') {
//     return next();
//   } else {
//     return res.status(403).send('No no no!');
//   }
// });

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

// You can do it lots of ways. But follow the conventions.
colors.delete('/:id', (req, res) => {
  const { id } = req.params;
  colorsArray.splice(id, 1);
  res.send('Ok');
});

colors.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  colorsArray[id] = name;
  res.send('Ok');
});

// Follow the conventions!
// C -> Create -> POST
// R -> Read -> GET
// U -> Update -> PUT
// D -> Destroy -> DELETE

module.exports = colors;
