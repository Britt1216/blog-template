const express = require("express");

const router = express.Router();

const { Layout1Post }  = require("../models");

router.get("/", (req, res) => {
    res.render("index");
})

// router.get("/api/posts", (req, res) => {
//     Layout1Post.findAll({
//         include: [Layout1Post]
//     }).then(post => {
//         console.log("Post Test: ", post);
//         res.json(post);
//     })
    
// });

router.get("/post", (req, res) => {
    res.render("post");
});

router.post("/post/new", (req, res) => {
    Layout1Post.create()
    res.render("post");
});

module.exports = router;