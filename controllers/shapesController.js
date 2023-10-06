const express = require('express');
const shapes = express.Router();
const shapesArray = require('../models/shapes.js');

shapes.get('/', (req, res) => {
  res.json(shapesArray);
});

shapes.get('/foo', (req, res) => {
  res.send('Hi there shapes!');
});

module.exports = shapes;
