const express = require("express");
const router = express.Router();
const apiConstants = require("../../client/./apiConstants.js");

let Order = require("../models/order.js");

router.post(apiConstants.PLACE_ORDER, (req, res) => {
  console.log("orderInfo", req.body.orderInfo);
  //TODO: should assert something about orderInfo
  req.assert("carbohydrate", "carbohydrate must be set").notEmpty();
  req.assert("protein", "protein must be set").notEmpty();
  req.assert("condiment1", "condiment1 must be set").notEmpty();
  req.assert("condiment2", "condiment2 must be set").notEmpty();
  req.assert("condiment3", "condiment3 must be set").notEmpty();
  req.assert("condiment4", "condiment4 must be set").notEmpty();
  req.assert("dressing", "dressing must be set").notEmpty();
  let errors = req.validationErrors();
  if (errors) {
    console.log(errors);
  } else {
    let order = new Order();
    //TODO: clean up
    order.kolhydrat = req.body.carbohydrate;
    order.protein = req.body.protein;
    order.tillbehör1 = req.body.condiment1;
    order.tillbehör2 = req.body.condiment2;
    order.tillbehör3 = req.body.condiment3;
    order.tillbehör4 = req.body.condiment4;
    order.dressing1 = req.body.dressing;
    order.dressing2 = req.body.dressing; //TODO: HMMM!
    order.timeOfOrder = new Date();
    order.save(function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("BREAKTHROUGH");
        res.status(200).json({ msg: "Order placed", order });
      }
    });
  }
});
/*
router.get(apiConstants.FETCH_MENU, (req, res) => {
  console.log(apiConstants.FETCH_MENU);
  Post.find({}, function(err, posts) {
    if (err) {
      console.log(err);
    } else {
      // Send all posts.
      console.log(JSON.stringify(posts));
      res.set("Content-Type", "application/json");
      res.send({ body: { posts: posts } });
    }
  });
});
*/
module.exports = router;
