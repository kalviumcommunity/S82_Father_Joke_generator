const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = 5453;

app.use(express.json());


mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Connected to Database'))
  .catch(console.error);


const routes = require('./routes');
app.use("/", routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
