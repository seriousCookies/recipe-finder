import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import RecipeList from './components/RecipeList'
import {getSearch, getRecipe} from './components/ApiClient'

const fetchData = async (query, fn, setState) => {
  const newData = await fn(query);
  setState(newData);
}

const App = () => {
  const [query, setQuery] = useState();
  const [diet, setDiet] = useState();
  const [intolerances, setIntolerances] = useState();
  const [foodOptions, setFoodOptions] = useState([]);

  useEffect(()=> {
    let q = `${query}/null/null`
    if (diet) {
      q =`${query}/${diet}/null`
    }
    if (diet && intolerances) {
      q =`${query}/${diet}/${intolerances}`
    }
console.log(q);
    fetchData(q,getSearch, setFoodOptions);
  },[query, diet, intolerances ])

  return (
    <>
    Hello World
    <br/>
    <Form
    dietOptions={setDiet}
    intolerance= {setIntolerances}
    formHandler={setQuery}/>
    <br/>
    <RecipeList foodOptions={foodOptions}/>
    </>
  );
}

export default App;
