import React, {createContext, useReducer, useEffect, useState } from 'react';
import './App.scss';
import Form from './components/Form';
import RecipeList from './components/RecipeList'
import ParamsSetter from './components/ParamsSetter';
import Heading from './components/Heading'
import reducer from './components/reducer/reducers.js';
import Buttons from './components/Buttons';
import { ACTIONS } from './components/reducer/actions';
import {getSearch} from './components/ApiClient';

export const fetchData = async (query, page, fn, cb) => {
  const newData = await fn(query, page);
  cb({type:ACTIONS.UPDATESTATE, state: 'foodOptions', value:newData})
}

export const stateContext = createContext();
export const dispatchContext = createContext();
export const totalHitsContext = createContext();

const initState = {
  query: "",
  diet: "",
  intolerances: {Dairy: false, Egg: false, "Tree Nut": false, Peanut: false, Shellfish: false},
  foodOptions: [],
  apiQ: "",
  page: 0
  }
const App = () => {
const [state, dispatch]= useReducer(reducer, initState);
const [totalHits,setTotalHits] = useState(0);

useEffect(() => {
  const getData = async () => {
    const allData = await getSearch(state.apiQ, state.page)
    setTotalHits(allData.total);
    return state.query !== ''? dispatch({type:ACTIONS.UPDATESTATE, state: 'foodOptions', value:allData.results}): '';
  }
  getData();
}, [state.query, state.apiQ, state.page])


  return (
    <stateContext.Provider value={state}>
      <dispatchContext.Provider value = {dispatch}>
        <totalHitsContext.Provider value = {totalHits}>
        <section className= "main-container">
        <h1>My Cookbook App</h1>
        <article className= "form-container">
        <Form/>
        </article>
        <article className= "content-container">
          {state.query !== null ? <Heading/>: ''}
        <RecipeList/>
        {state.query&&state.query.length> 0 ? <Buttons/>: ''}
        </article>
        </section>
        <ParamsSetter/>
        </totalHitsContext.Provider>
      </dispatchContext.Provider>
    </stateContext.Provider>
  );
}

export default App;
