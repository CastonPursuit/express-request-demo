const express = require('express');
const app = express();
const cors = require('cors');

// console.log in the terminal

app.use(cors());

const colorsController = require('./controllers/colorsController.js');
const shapesController = require('./controllers/shapesController.js');

// !!! IMPORTANT. If you are seeing req.body as undefined in your console.log
// statements, you probably forgot this line:
app.use(express.json()); // parse incoming middleware

// The logger.

app.use('/colors', colorsController);
app.use('/shapes', shapesController);

app.get('*', (req, res) => {
  res.status(404).json({ error: 'Woopsies!' });
});

module.exports = app;

// /addNewColor?newColorName=tomato
// /updateExistingColor?id=2
// /deleteExistingColor?id=2

// ^ Not super maintainable. What if I want to change something? Like I want to have colors become an object.
// with multiple keys... { colorname: tomato, rating: 5 }
