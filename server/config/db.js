const mongoose = require("mongoose");

exports.mongoDB = () => {
  mongoose
  .connect(`${process.env.DB_KEY}`)
  .then(() => console.log("server on"))
  .catch(() => console.log("server failed"));  
}