import React from 'react';


const RecipeSteps = ({recipe}) => {
  return (
    <div className="item_recipe card__face card__face--back overlay">
      <ol>
      {recipe && recipe.length>1 ? recipe.map(t => 
      <li key={t}>
        {t}
      </li>):''}
      </ol>
    </div>
  );
}
export default RecipeSteps;