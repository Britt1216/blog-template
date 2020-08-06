

const express = require("express");

const router = express.Router();

const { Layout2Post } = require("../models");

router.get("/", (req, res) => {
    res.render("index");
})

router.get("/post", (req, res) => {
    res.render("post");
});

// router.get("/api/posts", (req, res) => {
//     Post.findAll().then(results => {
//         res.json(results);
//         res.end();
//     })
// })

router.post("/api/posts", (req, res) => {
    Layout2Post.create(req.body).then(results => {
        res.json(results);
        res.end();
    })
});
    

module.exports = router;