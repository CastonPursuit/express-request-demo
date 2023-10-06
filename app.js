const express = require('express');
const app = express();

const colorsController = require('./controllers/colorsController.js');
const shapesController = require('./controllers/shapesController.js');

app.use('/colors', colorsController);
app.use('/shapes', shapesController);

app.get('*', (req, res) => {
  res.status(404).json({ error: 'Woopsies!' });
});

module.exports = app;
