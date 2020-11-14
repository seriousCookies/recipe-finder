import React from 'react';


const RecipeSteps = ({recipe}) => {
  console.log(Object.keys(recipe));
  return (
    <div className="item_recipe card__face card__face--back overlay">
      <ol>
      {recipe.value && recipe.value.length>1 ? recipe.value.map(t => 
      <li key={t}>
        {t}
      </li>):''}
      </ol>
    </div>
  );
}
export default RecipeSteps;