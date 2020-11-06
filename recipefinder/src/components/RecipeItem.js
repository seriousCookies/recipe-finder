import React, { useState }  from 'react';
import {getRecipe} from './ApiClient';
import {fetchData} from '../App';
import RecipeSteps from './RecipeSteps';
const RecipeItem = ({id, title, image}) => {
const [recipe, setRecipe]=useState();

const fetchRecipes= async e => {
e.preventDefault();
await fetchData(id,getRecipe, setRecipe)
}

  return (
    <>
    <button
    onClick={fetchRecipes}
    className="gallery btn">
            <img className="gallery_img" src={image} alt={title}/>
            <div className="gallery_desc">{title}</div>
            {recipe ?
              <RecipeSteps
              recipe={recipe}
              />
            :''}
    </button>
    </>
  );
}
export default RecipeItem;