import React, { useState, useEffect, createContext, useReducer } from 'react';
import Form from './components/Form';
import RecipeList from './components/RecipeList'
import {getSearch} from './components/ApiClient'
import './App.scss';
import reducer from './components/reducer/reducers.js';
import { ACTIONS } from './components/reducer/actions';

export const fetchData = async (query, fn, cb) => {
  const newData = await fn(query);
  cb({type:ACTIONS.UPDATESTATE, state: 'foodOptions', value:newData})

}
export const stateContext = createContext();
export const dispatchContext = createContext();

const initState = {
  query: null,
  diet: null,
  intolerances: null,
  foodOptions: []
  }
const App = () => {
const [state, dispatch]= useReducer(reducer, initState);

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
      onlyQuery:state.query !==null,
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
        q =`${state.query}/null/null`;
        break;
      default:
        q= null;
        break;
    }
    console.log(q);
    if(state.query !== null)
    {
      fetchData(q, getSearch, dispatch);
    }
  },[query, diet, state, intolerances])

  return (
    <stateContext.Provider value={state}>
      <dispatchContext.Provider value = {dispatch}>
      <section className= "main-container">
    <h1>My Cookbook App</h1>
    <article className= "form-container">
    <Form
    foodOptions={foodOptions}
  />
    </article>
    <article className= "content-container">
      
      {query&&query.length> 0 ? <h2>{state.diet === "null"? '': state.diet} {state.query}s{oneIntolerance ? ` with no `+ oneIntolerance.toLocaleLowerCase() :''}</h2>: ''}
    <RecipeList/>
    {query&&query.length>0 ? <><button
    className="nav-btn prev-btn btn"
    >Previous</button>
    <button
    className="nav-btn next-btn btn"
    >Next</button></>: ''}
    
    </article>
    </section>
      </dispatchContext.Provider>
    </stateContext.Provider>
  );
}

export default App;
