import * as types from '../action/actionType';
import initialState from './initialState';
export default function authorReducer(state = initialState.authors, action){
  //debugger;
  switch (action.type){
    case types.LOAD_AUTHOR_SUCCESS:
      return action.authors;
    // return [...state,  Object.assign({},action.course)
    // ];
    // state.push(course);
    // return state;

    default :
      return state;
  }
}
