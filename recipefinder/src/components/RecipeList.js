import React, { useContext } from 'react';
import { galleryContext } from '../App';
import RecipeItem from './RecipeItem';

const RecipeList = () => {
const foodOptions = useContext(galleryContext);

  return (
    <div className= 'gallery-container'>
    {foodOptions ? foodOptions.map(t => (
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