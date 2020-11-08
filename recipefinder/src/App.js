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
  const oneIntolerance = intolerances? Object.keys(intolerances).filter(id => intolerances[id])[0]: null;
  useEffect(()=> {
    let q;
    let switchCases = {
      allExist: query !==null && diet !==null && oneIntolerance !== undefined,
      onlyQuerynDiet: query !==null  && diet !==null,
      onlyQuerynIntolerance: query !==null && diet ===null && oneIntolerance !== undefined,
      onlyQuery:query !==null,
    }
    switch (true) {
      case switchCases.allExist:
       q =`${query}/${diet}/${oneIntolerance}`
       console.log(1);
       break;
      case switchCases.onlyQuerynDiet:
       q =`${query}/${diet}/null`
       console.log(2);
       break;
      case switchCases.onlyQuerynIntolerance:
        console.log(3);
       q =`${query}/null/${oneIntolerance}`
       break;
       case switchCases.onlyQuery:
        console.log(4);
        console.log(oneIntolerance)
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
      
      {query&&query.length> 0 ? <h2>{diet === "null"? '': diet} {query}s{oneIntolerance ? ` with no `+ oneIntolerance.toLocaleLowerCase() :''}</h2>: ''}
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
