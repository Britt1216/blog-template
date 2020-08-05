const express = require("express");

const router = express.Router();

// need model here


router.get("/", (req, res) => {
    res.render("index");
});

module.exports = router;