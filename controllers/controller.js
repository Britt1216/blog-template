const express = require("express");



const router = express.Router();

const { Layout1Post }  = require("../models");
const { Layout2Post }  = require("../models");

router.get("/", (req, res) => {
    res.render("index");
})


router.get("/post", (req, res) => {
    Layout2Post.create(req.body)
    res.render("post");
});


router.post("/post/new", (req, res) => {
    Layout1Post.create()
    res.render("post");
});

module.exports = router;