const app = require('./app.js');

require('dotenv').config();
const { PORT } = process.env;

app.listen(PORT, () => {
  console.log('The app is listening on PORT ', PORT);
});
