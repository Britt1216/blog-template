const express = require("express");

const router = express.Router();

<<<<<<< HEAD
=======
const { Layout1Post }  = require("../models");

>>>>>>> master
router.get("/", (req, res) => {
    
    res.render("index");
})

router.get("/post", (req, res) => {
    res.render("post");
});

<<<<<<< HEAD
=======
router.post("/post/new", (req, res) => {
    Layout1Post.create()
    res.render("post");
});
>>>>>>> master

module.exports = router;