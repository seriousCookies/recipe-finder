import React, { useState, useEffect, useContext } from 'react';
import { dispatchContext } from '../App';
import { ACTIONS } from './reducer/actions';

const FormChecklist = () => {
  const [dropDown, setDropDown] = useState("");
  const [isChecked,setisChecked] = useState(
    {Dairy: false, Egg: false, "Tree Nut": false, Peanut: false, Shellfish: false}
  );
  const dispatch = useContext(dispatchContext);

  const selectHandler = e => {
    e.preventDefault(); 
    setDropDown(e.target.value)
  };
  const intoleranceList = ['Dairy', 'Egg', 'Tree Nut', 'Peanut', 'Shellfish'];
  const checkboxHandler = e => {
    //e.preventDefault();
    let temp = isChecked;
    temp[e.target.name] = !temp[e.target.name]; 
    setisChecked({...temp});
  }
useEffect(()=> {
  dispatch({type:ACTIONS.UPDATESTATE, state: 'intolerances', value:isChecked});
  dispatch({type:ACTIONS.UPDATESTATE, state: 'diet', value:dropDown});
},[dispatch,isChecked, dropDown]);
    return (
<>

<select className="select-main" key='dropdown' value= {dropDown||""} onChange={selectHandler}>
  <option key='1' value= "" >No dietary preference</option>
  <option key='2' value= "Vegetarian">Vegetarian</option>
  <option key='3' value= "Vegan">Vegan</option>
  <option key='4' value= "Gluten Free">Gluten Free</option>
  <option key='5' value= "Ketogenic">High Protein</option>
</select>
{intoleranceList.map(i => 
( <span
  className="checkbox-container" 
  key={"span"+i}>
  <input
  className="checkbox-input" 
  type="checkbox"
  name= {i}
  key={i}
  checked={isChecked[i]}
  onChange={checkboxHandler}
  />
  <label 
  className="checkbox-label"
  key={i + 1}>{i}</label>
  </span>)
)}
</>      
    );
}

export default FormChecklist;
