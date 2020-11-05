import React from 'react';

const RecipeItem = ({id, title, image}) => {

  return (
    <>
    <div class="gallery">
            <img src={image} alt={title} width="60" height="40"/>
            <div class="desc">{title}</div>
    </div>
    </>
  );
}
export default RecipeItem;