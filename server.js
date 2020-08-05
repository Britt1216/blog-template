const express = require("express");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routes = require(".controllers/controller.js");

app.use(routes);

app.listen(PORT, () => {
    console.log("Server listening on localhost" + PORT);
})