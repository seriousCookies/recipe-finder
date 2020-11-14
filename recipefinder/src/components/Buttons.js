import React, { useContext,useEffect,useState } from 'react';
import { stateContext,dispatchContext, totalHitsContext } from '../App';
import { ACTIONS } from './reducer/actions';

const Buttons = () => {
    const state = useContext(stateContext);
    const dispatch = useContext(dispatchContext);
    let totalHits = useContext(totalHitsContext);
    const [optionLength, setOptionLength]= useState(0);

    useEffect(()=> {
      if (state.foodOptions) {
        setOptionLength(state.foodOptions.length)
      }
    }, [state.foodOptions])

    const paginationHandler = e => {
        e.preventDefault();
        if (e.target.classList.contains('next-btn')) {
          let newPage= state.page+10;
          dispatch({type:ACTIONS.UPDATESTATE, state: 'page', value:newPage});
        } else if (e.target.classList.contains('prev-btn')) {
          let newPage= state.page-10;
          dispatch({type:ACTIONS.UPDATESTATE, state: 'page', value:newPage});
        }
      }
    
    return (
    <>
        <button
        style={{visibility: state.page===0?"hidden":"visible"}}
        className="nav-btn prev-btn btn"
        onClick={paginationHandler}
        >Previous</button>
        <button
        style={{visibility: state.page>=totalHits || optionLength === totalHits?"hidden":"visible"}}
        className="nav-btn next-btn btn"
        onClick={paginationHandler}
        >Next</button>
    </>
    )
}
export default Buttons;