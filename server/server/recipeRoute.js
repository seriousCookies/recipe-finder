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
  // const recipe1 = `[
  //   "Marinate strips of flank steak in a drizzle of EVOO, 2 smashed garlic cloves, juice of 1 lime (or lemon), 4 tbs. chopped cilantro and a dash of the seasonings for an hour or two.",
  //   "If desired, brush jalapenos with a little oil and roast in 400F preheated oven for 30-40 minutes, turning over once halfway through.",
  //   "In a sauce pan, heat the enchilada sauce until boiling then add the beans. Stir for another couple of minutes and turn off heat.",
  //   "In a medium-heated skillet, add a little EVOO and saut the beef strips along with the minced garlic and the julienned onion and bell pepper(s).",
  //   "Stack the tortillas on top of each other and roll as tight as you can without tearing it. Now, using a very sharp knife, thinly slice the roll from one end to the other creating fettuccine-like strands. Loosen strands and coat with EVOO and a dash of the seasonings.",
  //   "Spread tortilla strands out on individual serving platters, top each with enchilada/bean mixture, salsa and beef/veggie mixture.",
  //   "Garnish with remaining chopped cilantro, a lime (or lemon) wedge and a roasted jalapeno pepper.",
  //   "Another optional item you can add is shredded cheese. Before garnishing, top with shredded cheese and pop the plate in the microwave for a minute or until cheese has fully melted."
  //   ]`;
  //   res.json(JSON.parse(recipe1));
const id = req.params.id;
const url =`${baseURL}${id}/analyzedInstructions?${key}`;
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