const express = require("express");
const router = express.Router();
const apiConstants = require("../../client/./apiConstants.js");

let Post = require("../models/post.js");

router.post(apiConstants.REGISTER_USER, function(req, res) {
  console.log(req.body.username, req.body.password);
  req.assert("username", "Post username must be set").notEmpty();
  req.assert("password", "Post password must have content").notEmpty();
  let errors = req.validationErrors();
  if (errors) {
    console.log(errors);
  } else {
    let post = new Post();
    post.username = req.body.username;
    post.password = req.body.password;

    post.save(function(err) {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json({ msg: "Post created", post });
      }
    });
  }
});

router.get("/", function(req, res) {
  console.log("/");
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

router.post(apiConstants.MATCH_USER, function(req, res) {
  console.log("log in as:", req.body.username);
  Post.find({ username: req.body.username }, function(err, posts) {
    if (err) {
      console.log(err);
    } else {
      // 1 means success atm, 0 fail
      let answer = posts.length > 0 ? 1 : 0;
      console.log("Match status code: ", answer);
      res.set("Content-Type", "application/json");
      res.send({ body: { status: answer } });
    }
  });
});

router.post("/edit/:id", function(req, res) {
  let post = {};
  post.author = req.body.author;
  post.content = req.body.content;

  let query = { _id: req.params.id };

  Post.update(query, post, function(err) {
    if (err) {
      console.log(err);
      return;
    } else {
      res.status(200).json({ msg: "Post successfully updated", post: post });
    }
  });
});

router.delete("/:id", function(req, res) {
  let query = { _id: req.params.id };

  Post.remove(query, function(err) {
    if (err) {
      console.log(err);
    }
    res.status(200).json({ msg: "Post deleted successfully!" });
  });
});

module.exports = router;
