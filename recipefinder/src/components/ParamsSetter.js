import { useEffect, useContext } from 'react';
import { stateContext,dispatchContext } from '../App';
import { ACTIONS } from './reducer/actions';

const ParamsSetter = () => {
    const state = useContext(stateContext);
    const dispatch = useContext(dispatchContext);

    const stringIntolerances = Object.keys(state.intolerances).filter(id => state.intolerances[id]).join('&');
  
    useEffect(()=> {
      console.log('state string', stringIntolerances)
    let switchCases = {
      allExist: state.query !=="" && state.diet !=="" && stringIntolerances.length>1,
      onlyQuerynDiet: state.query !=="" && state.diet !=="" ,
      onlyQuerynIntolerance: state.query !=="" && stringIntolerances !== "",
      onlyQuery:state.query !=="",
    }
    let q;

    switch (true) {
      case switchCases.allExist:
       q =`${state.query}&diet=${state.diet}&intolerances=${stringIntolerances}`;
       break;
      case switchCases.onlyQuerynDiet:
       q =`${state.query}&diet=${state.diet}`;
       break;
      case switchCases.onlyQuerynIntolerance:
       q =`${state.query}&intolerances=${stringIntolerances}`;
       break;
       case switchCases.onlyQuery:
        q =`${state.query}`;
        break;
      default:
        q= null;
        break;
    }
    dispatch({type:ACTIONS.UPDATESTATE, state: 'apiQ', value:q});

  },[dispatch, stringIntolerances, state.query,state.apiQ, state.diet, state.intolerances,state.page])
  return (null)

}
export default ParamsSetter;