require("dotenv").config();
const bodyParser = require("body-parser");
const recipesAPI = require("./recipelistRoute");
const recipeAPI = require("./recipeRoute");
const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");

const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use("/api/search", recipesAPI);
app.use("/api/recipe", recipeAPI);
app.use(express.static(path.join(__dirname, "build")));
app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
module.exports.app = app;
if (!module.parent) {
  app.listen(port);
}
