import React, { useState, useContext }  from 'react';
import {getRecipe} from './ApiClient';
import {fetchData} from '../App';
import RecipeSteps from './RecipeSteps';
import { stateContext } from '../App';

const RecipeItem = ({id, title, image}) => {
  
const [recipe, setRecipe]=useState();
const state = useContext(stateContext);
const fetchRecipes= async e => {
e.preventDefault();
await fetchData(id, state.page, getRecipe, setRecipe)
e.target.closest(".card").classList.toggle('is-flipped');
}

  return (
    <div className= 'item-container scene' >
    <button
    onClick={fetchRecipes}
    className="item btn card">
            <img className="item_img card__face card__face--front" src={image} alt={title}/>
            <div className="item_desc overlay card__face card__face--front">{title}</div>
            {recipe !== undefined ?
              <RecipeSteps
              recipe={recipe}
              />
            :''}
    </button>
    </div>
  );
}
export default RecipeItem;