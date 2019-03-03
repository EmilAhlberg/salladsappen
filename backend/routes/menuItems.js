const express = require("express");
const router = express.Router();
const apiConstants = require("../../client/./apiConstants.js");
fs = require("fs");
var path = require("path");
var absolutePath = path.resolve("Relative file path");

let MenuItem = require("../models/menuItem.js");

//init this part of database
const insertMenuItems = fs.readFile(
  path.resolve("./config/menuItems.json"),
  "utf8",
  (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    let datafromfile = JSON.parse(data);
    datafromfile.forEach(obj => {
      let menuObj = new MenuItem(obj);
      menuObj.save();
    });
  }
);

router.get(apiConstants.FETCH_MENU, (req, res) => {
  console.log(apiConstants.FETCH_MENU);
  MenuItem.find({}, (err, items) => {
    if (err) {
      console.log(err);
    } else {
      res.set("Content-Type", "application/json");
      res.send({ body: { menuItems: items } });
    }
  });
});

module.exports = { router: router, insertMenuItems: insertMenuItems };
