import React, { useState } from 'react';

const Form = ({ formHandler }) => {
  const [inputValue, setInputValue] = useState();
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
        type="submit"
        className="foodqueryform_clear-btn btn"
        onClick={clearAll}>
        Clear All
      </button>
    </form>
  );
};
export default Form;