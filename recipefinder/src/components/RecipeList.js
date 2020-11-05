import React from 'react';
import RecipeItem from './RecipeItem';

const RecipeList = ({foodOptions}) => {

  return (
    <>
    {foodOptions? foodOptions.map(t => (
      <RecipeItem
      id={t.id}
      key={t.id}
      title={t.title}
      image={t.image} />
    )):()=> ''}

    </>
  );
}
export default RecipeList;