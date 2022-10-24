require("dotenv").config();
const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
  } catch (err) {
    console.log(err);
  }
};

connection();
