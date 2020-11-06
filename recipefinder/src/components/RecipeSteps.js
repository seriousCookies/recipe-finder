import React from 'react';


const RecipeSteps = ({recipe}) => {

  return (
      <ol>
    {recipe? recipe.map(t => 
    <li key={t}>
        {t}
    </li>):''}
      </ol>

  );
}
export default RecipeSteps;