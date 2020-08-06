const { Layout1Post } = require("../models");
const { Layout2Post } = require("../models");

// Routes
module.exports = function(app) {

 
  app.get("/api/posts", function(req, res) {
    Post.findAll().then(posts => {
      res.json(posts)
    })
  });

  app.post("/api/posts", function(req, res) {
   
  });


}
