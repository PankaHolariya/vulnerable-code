const express = require('express');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(helmet()); // Adds security headers

app.get('/', (req, res) => {
  res.send('Hello Secure World!');
});

app.listen(port, () => {
  console.log(`Secure app listening at http://localhost:${port}`);
});
