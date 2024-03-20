const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Erick:ericklozfer@jokes.zilpu3y.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Established a connection to the database"))
  .catch((err) =>
    console.log("Something went wrong when connecting to the database", err)
  );