import React, { useState, useEffect, createContext } from 'react';
import Form from './components/Form';
import RecipeList from './components/RecipeList'
import {getSearch} from './components/ApiClient'
import './App.scss';

export const fetchData = async (query, fn, setState) => {
  const newData = await fn(query);
  setState(newData);
}
export const galleryContext = createContext();

const App = () => {
  const [query, setQuery] = useState(null);
  const [diet, setDiet] = useState(null);
  const [intolerances, setIntolerances] = useState(null);
  const [foodOptions, setFoodOptions] = useState([]);

  useEffect(()=> {
    let oneIntolerance = intolerances? Object.keys(intolerances).filter(id => intolerances[id])[0]: null;
    let q;
    switch (true) {
      case query !==null && diet !==null && oneIntolerance !== undefined:
       q =`${query}/${diet}/${oneIntolerance}`
       break;
      case query !==null  && diet !==null:
       q =`${query}/${diet}/null`
       break;
      case query !==null && diet !==null && oneIntolerance !== undefined:
        console.log(oneIntolerance);
       q =`${query}/null/${oneIntolerance}`
       break;
       case query !==null:
        q =`${query}/null/null`;
        break;
      default:
        q= null;
        break;
    }
    console.log(q);
    if(query !== null)
    {
      fetchData(q, getSearch, setFoodOptions);
    }
  },[query, diet, intolerances])
    const filtered = (intolerances) ? 
    Object.keys(intolerances)
    .filter((a, index) => Object.values(intolerances)[index])
    .join(", ") : 
    '';
  return (
    <galleryContext.Provider value={foodOptions}>
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
      
      {query&&query.length> 0 ? <h2>{diet === "null"? '': diet} {query}s{filtered.length >0 ? ` with no `+ filtered.toLocaleLowerCase() :''}</h2>: ''}
    <RecipeList/>
    {query&&query.length>0 ? <><button
    className="nav-btn prev-btn btn"
    >Previous</button>
    <button
    className="nav-btn next-btn btn"
    >Next</button></>: ''}
    
    </article>
    </section>

    </galleryContext.Provider>
  );
}

export default App;
