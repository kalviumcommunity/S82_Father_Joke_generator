require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 5453;
const routes = require("./routes")
app.use("/",routes)


app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Error connecting to MongoDB:", err));




app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
