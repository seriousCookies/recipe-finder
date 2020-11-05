const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();

global.fetch = fetch;
const key =`apiKey=${process.env.ACCESS_KEY}`
const baseURL = `https://api.spoonacular.com/recipes/complexSearch?${key}`;
const headers = {
  "Content-Type": "application/json",
}
const paramsParser = req => {
parameters = req.params;
  const paramsArr= []
  for (const [key, value] of Object.entries(parameters)) {
  value !== 'null' ? paramsArr.push(`&${key}=${value}`): null;
  }
  const paramString = paramsArr.join('');
  return paramString;
}

router.get('/:query/:diet/:intolerance', (req, res) => {
const p = paramsParser(req);
const url =`${baseURL}${p}`;
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