import React, { useState } from 'react';
import FormChecklist from './FormChecklist';

const Form = ({ formHandler, dietOptions, intolerance }) => {
  const [inputValue, setInputValue] = useState();
  const [showOptions, setShowOptions]= useState(false);

  const clearAll = e => {
    e.preventDefault();
    setInputValue();
    formHandler([]);
    setInputValue('');
    dietOptions('');
    intolerance('');
  };
  const inputHandler = e => {
    setInputValue(e.target.value);
  };
  const submitHandler = e => {
    e.preventDefault();
    if (inputValue !== '') {
        formHandler(inputValue);
    }
    setShowOptions(false);
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
      HTMLfor="search">Search</label>
    </div>
    <button
      type="submit"
      className="foodqueryform_add-btn btn"
      hidden={true}>
          Submit
    </button>
    <button
    className="form_btn options-btn btn"
    onClick={optionHandlers}
    >{showOptions ? 'Hide options': 'Show options' }</button>
    {showOptions ? <FormChecklist dietOptions={dietOptions} intolerance={intolerance}/> : '' }
    <button
      type="submit"
      className="foodqueryform_clear-btn btn"
      hidden= {true}
      onClick={clearAll}>
      Clear All
    </button>
  </form>
  );
};
export default Form;
