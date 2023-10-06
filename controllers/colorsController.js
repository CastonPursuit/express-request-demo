const express = require('express');
const colors = express.Router();
const colorsArray = require('../models/color.js');

colors.get('/', (req, res) => {
  res.json(colorsArray);
});

colors.get('/foo', (req, res) => {
  res.send('Hi there colors!');
});

module.exports = colors;
