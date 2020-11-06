import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import RecipeList from './components/RecipeList'
import {getSearch} from './components/ApiClient'
import './App.scss';

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
    <h1>My Cookbook App</h1>
    <article className= "form-container">
    <Form
    foodOptions={foodOptions}
    setFoodOptions={setFoodOptions}
    dietOptions={setDiet}
    intolerance= {setIntolerances}
    formHandler={setQuery}/>
    </article>
    <article className= "content-container">
      
      {query&&query.length>0 ? <h2>{diet} {query}s{filtered.length >0 ? ` with no `+ filtered.toLocaleLowerCase() :''}</h2>: ''}
    <RecipeList
    fechData= {fetchData}
    foodOptions={foodOptions ? foodOptions:''}/>
    {query&&query.length>0 ? <><button
    className="nav-btn prev-btn btn"
    >Previous</button>
    <button
    className="nav-btn next-btn btn"
    >Next</button></>: ''}
    
    </article>
    </section>
  );
}

export default App;
