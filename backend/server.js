require("dotenv").load();
const express = require("express");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const config = require("./config/database");
const mongoose = require("mongoose");
const port = process.env.PORT || 8550;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(
  config.database,
  { useNewUrlParser: true }
);
let db = mongoose.connection;

// Check connection
db.once("open", () => {
  console.log("Connected to MongoDB!");
});

// Check for DB errors
db.on("error", err => {
  console.log(err);
});

app.use(
  expressValidator({
    errorFormatter: function(param, msg, value) {
      var namespace = param.split("."),
        root = namespace.shift(),
        formParam = root;

      while (namespace.length) {
        formParam += "[" + namespace.shift() + "]";
      }
      return {
        param: formParam,
        msg: msg,
        value: value
      };
    }
  })
);

// Route Files
const posts = require("./routes/posts");
app.use("/posts", posts);

app.get("/backend_get", (req, res) => {
<<<<<<< HEAD
  res.send({ express: "YOUR SALLADS-BACKEND IS CONNECTED TO REACT" });
});

app.post("/backend_insert_one", (req, res) => {
  console.log(req.body.username, req.body.password);

  db.collection("user").insertOne({
    username: req.username,
    password: req.password
  });
  res.send({ status: "inserted" });
=======
  console.log("connected!");
  let cursor = db.collection("user").find();

  cursor.forEach(doc => {
    console.log(doc);
  });

  db.collection("user").insertOne({ username: "emil" });
  res.send({ express: "YOUR SALLADS-BACKEND IS CONNECTED TO REACT" });
>>>>>>> ff40a046a8eaf6fd8c69d157078d8e135ce1e517
});

app.listen(port, () => {
  console.log("Server started!");
});
