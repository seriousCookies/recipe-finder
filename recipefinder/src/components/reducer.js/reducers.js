import ACTIONS from './actions';

const querySetter = (query, state) => {
const newQuery = state.query
};

const reducer = (state, action) =>  {
    switch (action.type) {
        case ACTIONS.SETQUERY:
            return querySetter(action.payload, state);
            break;
    
        default:
            break;
    }

}

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
  