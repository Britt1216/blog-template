
const express = require("express");
const router = express.Router();



const { Layout2Post } = require("../models/");

router.get("/", (req, res) => {
    Layout2Post.findAll().then(results => {
        const context = {
            post: results.map(content => {
              return {
                title: content.title,
                img1: content.img1,
                header1: content.header1,
                text1: content.text1,
                sideHead: content.sideHead,
                sideText: content.sideText,
                category: content.category
              }
            })
          }
        res.render("index", { post: context.post });
    })
})

router.get("/post", (req, res) => {
    res.render("post");
});


router.post("/api/posts", (req, res) => {
    Layout2Post.create(req.body).then(results => {
        res.json(results);
        res.end();
    })
});
    

module.exports = router;