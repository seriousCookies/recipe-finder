import React, {createContext, useReducer, useEffect, useState } from 'react';
import './App.scss';
import Form from './components/Form';
import RecipeList from './components/RecipeList'
import ParamsSetter from './components/ParamsSetter';
import Heading from './components/Heading'
import reducer from './components/reducer/reducers.js';
import { ACTIONS } from './components/reducer/actions';
import {getSearch} from './components/ApiClient';

export const fetchData = async (query, page, fn, cb) => {
  const newData = await fn(query, page);
  cb({type:ACTIONS.UPDATESTATE, state: 'foodOptions', value:newData})
}

export const stateContext = createContext();
export const dispatchContext = createContext();

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

const paginationHandler = e => {
  e.preventDefault();
  if (e.target.classList.contains('next-btn')) {
    let newPage= state.page+10;
    dispatch({type:ACTIONS.UPDATESTATE, state: 'page', value:newPage});
  } else if (e.target.classList.contains('prev-btn')) {
    let newPage= state.page-10;
    dispatch({type:ACTIONS.UPDATESTATE, state: 'page', value:newPage});
  }
}
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
        <section className= "main-container">
        <h1>My Cookbook App</h1>
        <article className= "form-container">
        <Form/>
        </article>
        <article className= "content-container">
          {state.query !== null ? <Heading/>: ''}
        <RecipeList/>
        {state.query&&state.query.length>0 ? <>
        <button
        style={{visibility: state.page===0?"hidden":"visible"}}
        className="nav-btn prev-btn btn"
        onClick={paginationHandler}
        >Previous</button>
        <button
        style={{visibility: state.page>=totalHits ||totalHits === state.foodOptions.length?"hidden":"visible"}}
        className="nav-btn next-btn btn"
        onClick={paginationHandler}
        >Next</button></>: ''}
        
        </article>
        </section>
        <ParamsSetter/>
      </dispatchContext.Provider>
    </stateContext.Provider>
  );
}

export default App;
