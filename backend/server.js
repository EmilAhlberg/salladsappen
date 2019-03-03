require("dotenv").load();
const express = require("express");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const config = require("./config/database");
const mongoose = require("mongoose");
const port = process.env.PORT || 8550;
const apiConstants = require("../client/./apiConstants.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(
  config.database,
  { useNewUrlParser: false }
);
let db = mongoose.connection;
//reset database for dev purposes
db.dropDatabase();
//insert menuItems into empty database
require("./routes/menuItems.js").insertMenuItems;

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
app.use(apiConstants.API_POSTS, posts);
const orders = require("./routes/orders");
app.use(apiConstants.API_ORDERS, orders);
const menuItems = require("./routes/menuItems");
app.use(apiConstants.API_MENUITEMS, menuItems.router);

app.get("/backend_get", (req, res) => {
  res.send({ express: "YOUR SALLADS-BACKEND IS CONNECTED TO REACT" });
  //console.log(db.collection("user").find({}));
});

app.post("/backend_insert_one", (req, res) => {
  console.log(req.body.username, req.body.password);
  db.collection("user").insertOne({
    username: req.username,
    password: req.password
  });
  res.send({ status: "inserted" });
});

app.listen(port, () => {
  console.log("Server started!");
});
