const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();

global.fetch = fetch;
const key =`apiKey=${process.env.ACCESS_KEY}`
const baseURL = `https://api.spoonacular.com/recipes/`;
const headers = {
  "Content-Type": "application/json",
}

router.get('/:id', (req, res) => {
const id = req.params.id;
const url =`${baseURL}${id}/analyzedInstructions?${key}`;
console.log(url);
  fetch(url, { method: 'GET', headers: headers})
  .then((res) =>  res.json())
  .then((json) => {
    const data = json[0].steps;
    const filteredData = data.map(x=>x.step)
    res.json(filteredData);
  })
  .catch(err => {
    console.log(err);
    res.json({ error: err.message });
  });
});
module.exports = router;