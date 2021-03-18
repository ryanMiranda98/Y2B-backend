// Import packages
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Setup connection to y2b database
mongoose
  .connect(process.env.Y2B_DB_URI, {
    useCreateIndex: false,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // App middleware
    app.use(express.json());

    // Route middleware
  })
  .catch((error) => {
    console.log(error);
  });
