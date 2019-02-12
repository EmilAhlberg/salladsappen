const express = require("express");
const router = express.Router();
const apiConstants = require("../../client/./apiConstants.js");

let Order = require("../models/order.js");

router.post(apiConstants.PLACE_ORDER, function(req, res) {
  console.log("orderInfo", req.body.orderInfo);
  //TODO: should assert something about orderInfo
  req.assert("orderInfo", "OrderInfo must be set").notEmpty();
  let errors = req.validationErrors();
  if (errors) {
    console.log(errors);
  } else {
    let order = new Order();
    //TODO: clean up
    order.kolhydrat = req.body.orderInfo[0];
    order.protein = req.body.orderInfo[1];
    order.tillbehör1 = req.body.orderInfo[2];
    order.tillbehör2 = req.body.orderInfo[3];
    order.tillbehör3 = req.body.orderInfo[4];
    order.tillbehör4 = req.body.orderInfo[5];
    order.dressing1 = req.body.orderInfo[6];
    order.dressing2 = req.body.orderInfo[7];
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

module.exports = router;
