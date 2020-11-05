import React, { useState } from 'react';

const FormChecklist = ({dietOptions}) => {
  const [dropDown, setDropDown] = useState(null);
  const [isChecked,setisChecked] = useState([]);
  const selectHandler = e => {setDropDown(e.target.value)};
  const checkboxHandler = e =>{
    const item = e.target.checked? {
      name: e.target.name,
      checked: e.target.checked
    }: null;
    setisChecked([...isChecked, item]);
  }
  dietOptions(dropDown);

  const intoleranceList = ['Dairy', 'Egg', 'Tree Nut', 'Peanut', 'Shellfish'];
    return (
<form>
<select value= {dropDown} onChange={selectHandler}>
  <option value='null' >No dietary preference</option>
  <option value= "Vegetarian">Vegetarian</option>
  <option value= "Vegan">Vegan</option>
  <option value= "Gluten Free">Gluten Free</option>
  <option value= "Ketogenic">High Protein</option>
</select>
{intoleranceList.map(i => 
( <>
  <input
  type="checkbox"
  name= {i}
  checked= {isChecked.checked}
  onChange={checkboxHandler}/>
  <label>{i}</label>
  </>)
)}

</form>

        
    );
}

export default FormChecklist;
