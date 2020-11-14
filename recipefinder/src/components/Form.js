import React, { useState, useContext } from 'react';
import FormChecklist from './FormChecklist';
import { stateContext,dispatchContext } from '../App';
import { ACTIONS } from './reducer/actions';
const Form = () => {
  const [inputValue, setInputValue] = useState();
  const [showOptions, setShowOptions]= useState(false);

  const state = useContext(stateContext);
  const dispatch = useContext(dispatchContext);

  const clearAll = e => {
    e.preventDefault();
    setInputValue(null);
    dispatch({type:ACTIONS.CLEARALLSTATE});
  };
  const inputHandler = e => {
    setInputValue(e.target.value);
  };
  const submitHandler = e => {
    e.preventDefault();
    if (inputValue !== '') {
        dispatch({type:ACTIONS.UPDATESTATE, state: 'query', value:inputValue});
        setInputValue('')
    };
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
      style={{visibility: state.foodOptions?"hidden":"visible"}}
      onClick={clearAll}>
      Clear All
    </button>
    </div>
    <button
    className="form_btn options-btn btn"
    onClick={optionHandlers}
    >{showOptions ? 'Hide options': 'Show options' }</button>
    {showOptions ? <FormChecklist /> : '' }
  </form>
  );
};
export default Form;
