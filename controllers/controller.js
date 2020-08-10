
const express = require("express");
const router = express.Router();

const { Layout1Post } = require("../models/");
const { Layout2Post } = require("../models/");
const { LayoutAllPost } = require("../models/");

// router.get("/", (req, res) => {
//     Layout2Post.findAll({ raw: true,  }).then(results2 => {
//         Layout1Post.findAll({ raw: true }).then(results1 => {
//             //Layout3Post.findAll({ raw: true }).then(results3 => {
//             res.render("index", { 
//                 post: results2,
//                 post1:  results1
//                 //post3: results3
//             });
//         });
//     });
// });



// router.get("/post", (req, res) => {
//     res.render("post");
// });


// router.post("/api/posts", (req, res) => {
//     Layout2Post.create(req.body).then(results => {
//         res.json(results);
//         res.end();
//     });
    
// });

// router.post("/api/posts1", (req, res) => {
//     Layout1Post.create(req.body).then(results => {
//         res.json(results);
//         res.end();
//     })
// })


// router.delete("/api/posts/:id", (req, res) => {
//     Layout2Post.destroy({ where: { id: req.params.id } }).then(results => {
//         Layout1Post.destroy({ where: {id: req.params.id } }).then(results1 => {
//             console.log("deleted Successfully");
//         });
//     }).then(post => {
//         res.end();
//     })
// })


//using layoutAllPost model
router.get("/", (req, res) => {
    LayoutAllPost.findAll({ raw: true }).then(results => {
        res.render("index", { 
            post: results
            });
    });
});

router.get("/post", (req, res) => {
    res.render("post");
});

router.post("/api/posts", (req, res) => {
    LayoutAllPost.create(req.body).then(results => {
        res.json(results);
        res.end();
    });
});

router.delete("/api/posts/:id", (req, res) => {
    LayoutAllPost.destroy({ where: { id: req.params.id } }).then(results => {
        console.log("deleted Successfully");
    }).then(post => {
        res.end();
    });
});

module.exports = router;