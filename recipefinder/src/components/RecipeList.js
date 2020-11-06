import React from 'react';
import RecipeItem from './RecipeItem';

const RecipeList = ({foodOptions, fetchData}) => {

  return (
    <div className= 'gallery-container'>
    {foodOptions? foodOptions.map(t => (
      <RecipeItem
      fetchData={fetchData}
      id={t.id}
      key={t.id}
      title={t.title}
      image={t.image} />
    )):()=> ''}

    </div>
  );
}
export default RecipeList;