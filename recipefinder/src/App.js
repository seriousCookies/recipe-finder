import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import RecipeList from './components/RecipeList'
import {getSearch} from './components/ApiClient'
import './App.css';

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
      switch(true)
      { // ['Dairy', 'Egg', 'Tree Nut', 'Peanut', 'Shellfish']
        case intolerances["Dairy"]:
          q =`${query}/${diet}/Dairy`
          break;
        case intolerances["Egg"]:
          q =`${query}/${diet}/Egg`
          break;
        case intolerances["Tree Nut"]:
          q =`${query}/${diet}/Tree%20Nut`
          break;
        case intolerances["Peanut"]:
          q =`${query}/${diet}/Peanut`
          break;
        case intolerances["Shellfish"]:
          q =`${query}/${diet}/Shellfish`
          break;
        default: 
          q =`${query}/${diet}/null`
      }
    }
    if(query !== undefined && query.length > 3)
    {
      fetchData(q, getSearch, setFoodOptions);
    }
  },[query, diet, intolerances])
    const filtered = (intolerances)? Object.keys(intolerances).filter((a, index) => Object.values(intolerances)[index]).join(", ") : '';
  return (
    <section className= "main-container">
    <h1>One Stop Cookbook App</h1>
    <article className= "form-container">
    <Form
    dietOptions={setDiet}
    intolerance= {setIntolerances}
    formHandler={setQuery}/>
    </article>
    <article className= "content-container">
      
      {query ? <h2>{diet} {query}s{filtered.length >0 ? ` with no `+ filtered :''}</h2>: ''}
    <RecipeList foodOptions={foodOptions ? foodOptions:''}/>
    </article>
    </section>
  );
}

export default App;
