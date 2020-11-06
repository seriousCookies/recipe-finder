import React, { useState } from 'react';
import FormChecklist from './FormChecklist';

const Form = ({ foodOptions, setFoodOptions, formHandler, dietOptions, intolerance }) => {
  const [inputValue, setInputValue] = useState();
  const [showOptions, setShowOptions]= useState(false);

  const clearAll = e => {
    e.preventDefault();
    setInputValue();
    formHandler([]);
    setInputValue('');
    dietOptions('');
    intolerance('');
    setFoodOptions([]);
  };
  const inputHandler = e => {
    setInputValue(e.target.value);
  };
  const submitHandler = e => {
    e.preventDefault();
    if (inputValue !== '') {
        formHandler(inputValue);
    }
  };
  const optionHandlers = e => {
    e.preventDefault();
    setShowOptions(!showOptions);
  }
  return (
    <form
    className="form"
    onSubmit={inputValue ? submitHandler : () => ''}>
    <div className="has-float-label">
    <input
      className="form_input form-control"
      type="text"
      value={inputValue || ''}
      onChange={inputHandler}
      required /> 
      <label
      className="form_input-placeholder"
      htmlFor="search">Search</label>
    </div>
    <div className="btn-container">
    <button
      type="submit"
      className="form_add-btn btn"
      style={{visibility: !inputValue?"hidden":"visible"}}>
          Submit
    </button>
    <button
      type="submit"
      className="form_clear-btn btn"
      style={{visibility: foodOptions.length<1?"hidden":"visible"}}
      onClick={clearAll}>
      Clear All
    </button>
    </div>
    <button
    className="form_btn options-btn btn"
    onClick={optionHandlers}
    >{showOptions ? 'Hide options': 'Show options' }</button>
    {showOptions ? <FormChecklist dietOptions={dietOptions} intolerance={intolerance}/> : '' }
  </form>
  );
};
export default Form;
