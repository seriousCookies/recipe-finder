import { ACTIONS } from './actions';

const stateUpdater = (action, state) => {
const newQuery = state;
return {...newQuery, [action.state]: action.value}
};

const stateClearer = () => {
    return {
        query: null,
        diet: null,
        intolerances: null,
        foodOptions: []
    }
};


const reducer = (state, action) =>  {
    switch (action.type) {
        case ACTIONS.UPDATESTATE:
            return stateUpdater(action, state);
        case ACTIONS.CLEARALLSTATE:
            return stateClearer();
        default:
            return state;
    }

}
export default reducer;

// const reducer = (state, action) => {
//     switch (action.type) {
//       case ACTIONS.SETQUERY:
//         return {
//           ...state,
//           [action.query]:action.value
//         }
//   // dispatch ({type:ACTIONS.SETQUERY, query: 'query', value: inputValue})
//   // dispatch ({type:ACTIONS.SETQUERY, query: 'query', value: ""})
//       case ACTIONS.SETDIET:
//         return {
//           ...state,
//           [action.diet]:action.value
//         }
//   // dispatch ({type:ACTIONS.SETDIET, diet: 'diet', value: dropDown})
//   // dispatch ({type:ACTIONS.SETDIET, diet: 'diet', value: ""})
//       case ACTIONS.SETINTOLERANCES:
//         return {
//           ...state,
//           [action.intolerances]:action.value
//         }
//   // dispatch ({type:ACTIONS.SETINTOLERANCES, intolerances: 'intolerances', value: isChecked})
//   // dispatch ({type:ACTIONS.SETINTOLERANCES, intolerances: 'intolerances', value: ""})
//       case ACTIONS.SETFOODOPTIONS:
//         return {
//           ...state,
//           [action.foodOptions]:action.value
//         }
//   // dispatch ({type:ACTIONS.SETFOODOPTIONS, diet: 'diet', value: inputValue})
//   // dispatch ({type:ACTIONS.SETFOODOPTIONS, diet: 'diet', value: ""})
//       default:
//           return state;
//   }
  
//   }
  