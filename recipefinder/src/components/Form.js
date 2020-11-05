import React, { useState } from 'react';
import FormChecklist from './FormChecklist';

const Form = ({ formHandler, dietOptions, intolerance }) => {
  const [inputValue, setInputValue] = useState();
  const [showOptions, setShowOptions]= useState(false);

  const clearAll = e => {
    e.preventDefault();
    setInputValue();
    formHandler([]);
  };
  const inputHandler = e => {
    setInputValue(e.target.value);
  };
  const submitHandler = e => {
    e.preventDefault();
    if (inputValue !== '') {
        formHandler(inputValue);
    }
    setInputValue('');
  };
  const optionHandlers = e => {
    e.preventDefault();
    setShowOptions(!showOptions);
  }
  return (
    <form
      className="foodquery-form"
      onSubmit={inputValue ? submitHandler : () => ''}>
      <label for="fsearch">Enter your Search</label><br/>
      <input
        className="foodquery-form_input form__field"
        type="text"
        value={inputValue || ''}
        placeholder="Enter your Search..."
        onChange={inputHandler} />
      <button
        type="submit"
        className="foodqueryform_add-btn btn"
        hidden={!inputValue}>
            Submit
      </button>
      <button
      onClick={optionHandlers}
      >{showOptions ? 'Hide options': 'Show options' }</button>
      {showOptions ? <FormChecklist dietOptions={dietOptions} intolerance={intolerance}/> : '' }
      <button
        type="submit"
        className="foodqueryform_clear-btn btn"
        onClick={clearAll}>
        Clear All
      </button>
    </form>
  );
};
export default Form;