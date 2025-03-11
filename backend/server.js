const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = 5453;

app.use(express.json());


app.get('/ping', (req, res) => {
  res.send('hello world');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
