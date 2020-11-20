import React, { useContext } from 'react';
import { stateContext } from '../App';
import RecipeItem from './RecipeItem';

const RecipeList = () => {
const state = useContext(stateContext);
if (state.foodOptions !== [])
  return (
    <div className= 'gallery-container'>
    {state.foodOptions ? state.foodOptions.map(t => (
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