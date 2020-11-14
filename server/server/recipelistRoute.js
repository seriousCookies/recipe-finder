const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();
const url = require('url');

global.fetch = fetch;
const key =`apiKey=${process.env.ACCESS_KEY}`
const baseURL = `https://api.spoonacular.com/recipes/complexSearch?${key}`;
const headers = {
  "Content-Type": "application/json",
}
//https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2
//&query=pasta&intolerances=peanut&gluten&number=2&offset=5
const paramsParser = req => {

const queries = req.params;
  const queryArr= []
  for (const [key, value] of Object.entries(queries)) {
  value !== 'null' ? queryArr.push(`&${key}=${value}`): null;
  }
  const queryString = queryArr.join('');
  return queryString;
}

router.get('/:query', (req, res) => {
  // const choco = `{"results":[{"id":633711,"title":"Baked Penne","image":"https://spoonacular.com/recipeImages/633711-312x231.jpg","imageType":"jpg"},{"id":662669,"title":"Swiss Chard Linguine","image":"https://spoonacular.com/recipeImages/662669-312x231.jpg","imageType":"jpg"},{"id":644885,"title":"Gluten Free Vegan Gnocchi","image":"https://spoonacular.com/recipeImages/644885-312x231.jpg","imageType":"jpg"},{"id":1095743,"title":"Coconut Curry Ramen Noodles","image":"https://spoonacular.com/recipeImages/1095743-312x231.jpg","imageType":"jpg"},{"id":631732,"title":"Caponata Style Celery Spaghetti","image":"https://spoonacular.com/recipeImages/631732-312x231.png","imageType":"png"},{"id":637440,"title":"Chapchae (Korean Stir-Fried Noodles)","image":"https://spoonacular.com/recipeImages/637440-312x231.jpg","imageType":"jpg"},{"id":662222,"title":"Summer Garlic Mushrooms and Mostaccioli","image":"https://spoonacular.com/recipeImages/662222-312x231.jpg","imageType":"jpg"},{"id":665527,"title":"Yellow Squash Noodles with Tomato Basil Sauce","image":"https://spoonacular.com/recipeImages/665527-312x231.jpg","imageType":"jpg"},{"id":1095750,"title":"Whole Wheat Spaghetti with Basil Avocado Pesto","image":"https://spoonacular.com/recipeImages/1095750-312x231.jpg","imageType":"jpg"},{"id":654009,"title":"Orecchiette With Sun-Dried and Fresh Cherry Tomatoes","image":"https://spoonacular.com/recipeImages/654009-312x231.jpg","imageType":"jpg"}],"offset":3,"number":10,"totalResults":14}`
  // res.json(JSON.parse(choco));
  const p = paramsParser(req);
  const url =`${baseURL}${p}`;
  fetch(url, { method: 'GET', headers: headers})
  .then((res) =>  res.json())
  .then((json) => {
    res.json(json);
  })
  .catch(err => {
    console.log(err);
    res.json({ error: err.message });
  });
});
module.exports = router;