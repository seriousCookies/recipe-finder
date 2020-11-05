import React, { useState } from 'react';
import Form from './components/Form';
import RecipeList from './components/RecipeList'

const App = () => {
  const [data, setData] = useState();
  return (
    <>
    Hello World
    <br/>
    <Form formHandler={setData}/>
    <br/>
    <RecipeList/>
    </>
  );
}

export default App;
