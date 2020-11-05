require('dotenv').config();
const bodyParser = require('body-parser');
const recipesAPI = require ('./recipeRoute');
const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/recipes', recipesAPI);
app.get('/',  (req, res) => {
  res.send('hello world')
})
app.use((req, res) => {
  res.status(404).json({ error: 'Not found.' });
});
module.exports.app = app;
if (!module.parent) { app.listen(port); }