const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/controller.js");

app.use(routes);

app.listen(PORT, () => {
    console.log("Server listening on localhost" + PORT);
})