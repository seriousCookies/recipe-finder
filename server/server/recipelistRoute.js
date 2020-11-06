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
  console.log(paramsArr)
  return paramString;
}

router.get('/:query/:diet/:intolerances', (req, res) => {
  // const choco = "[{\"id\":654959,\"title\":\"Pasta With Tuna\",\"image\":\"https://spoonacular.com/recipeImages/654959-312x231.jpg\",\"imageType\":\"jpg\"},{\"id\":511728,\"title\":\"Pasta Margherita\",\"image\":\"https://spoonacular.com/recipeImages/511728-312x231.jpg\",\"imageType\":\"jpg\"},{\"id\":654812,\"title\":\"Pasta and Seafood\",\"image\":\"https://spoonacular.com/recipeImages/654812-312x231.jpg\",\"imageType\":\"jpg\"},{\"id\":654857,\"title\":\"Pasta On The Border\",\"image\":\"https://spoonacular.com/recipeImages/654857-312x231.jpg\",\"imageType\":\"jpg\"},{\"id\":654883,\"title\":\"Pasta Vegetable Soup\",\"image\":\"https://spoonacular.com/recipeImages/654883-312x231.jpg\",\"imageType\":\"jpg\"},{\"id\":654928,\"title\":\"Pasta With Italian Sausage\",\"image\":\"https://spoonacular.com/recipeImages/654928-312x231.jpg\",\"imageType\":\"jpg\"},{\"id\":654926,\"title\":\"Pasta With Gorgonzola Sauce\",\"image\":\"https://spoonacular.com/recipeImages/654926-312x231.jpg\",\"imageType\":\"jpg\"},{\"id\":654944,\"title\":\"Pasta With Salmon Cream Sauce\",\"image\":\"https://spoonacular.com/recipeImages/654944-312x231.jpg\",\"imageType\":\"jpg\"},{\"id\":654905,\"title\":\"Pasta With Chickpeas and Kale\",\"image\":\"https://spoonacular.com/recipeImages/654905-312x231.jpg\",\"imageType\":\"jpg\"},{\"id\":654901,\"title\":\"Pasta With Chicken and Broccoli\",\"image\":\"https://spoonacular.com/recipeImages/654901-312x231.jpg\",\"imageType\":\"jpg\"}]";
  // res.json(JSON.parse(choco));
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