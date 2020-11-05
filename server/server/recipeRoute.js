const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();

global.fetch = fetch;
const key =`apiKey=${process.env.ACCESS_KEY}`
const baseURL = `https://api.spoonacular.com/recipes/complexSearch?${key}`;
// ?query=pasta&diet=vegetarian&number=10&intolerances=gluten&apiKey=454119a7cbab410a91e8d773a7274846
const headers = {
  "Content-Type": "application/json",
}
const params = req => {
parameters = req.params;
  const paramsArr= []
  for (const [key, value] of Object.entries(parameters)) {
  value !== 'null' ? paramsArr.push(`&${key}=${value}`): null;
  }
  const paramString = paramsArr.join('');
  return paramString;
}

router.get('/:query/:diet/:intolerance', (req, res) => {
const p = params(req);
const url =`${baseURL}${p}`;
console.log(url);
  fetch(url, { method: 'GET', headers: headers})
  .then((res) =>  res.json())
  .then((json) => {
    res.json(json.results);
  })
  .catch(err => {
    console.log(err);
    res.json({ error: err.message });
  });
});
module.exports = router;