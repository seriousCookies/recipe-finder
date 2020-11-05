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
  const [foodOptions, setFoodOptions] = useState([]);

  useEffect(()=> {
    const q= `${query}/null/null`;
    fetchData(q,getSearch, setFoodOptions);
  },[query])

  return (
    <>
    Hello World
    <br/>
    <Form formHandler={setQuery}/>
    <br/>
    <RecipeList foodOptions={foodOptions}/>
    </>
  );
}

export default App;
