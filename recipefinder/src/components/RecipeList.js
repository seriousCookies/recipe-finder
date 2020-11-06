import React from 'react';
import RecipeItem from './RecipeItem';

const RecipeList = (props) => {

  return (
    <div className= 'gallery-container'>
    {props.foodOptions? props.foodOptions.map(t => (
      <RecipeItem
      id={t.id}
      key={t.id}
      title={t.title}
      image={t.image} />
    )):()=> ''}

    </div>
  );
}
export default RecipeList;