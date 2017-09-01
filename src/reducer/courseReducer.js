import * as types from '../action/actionType';
import initialState from './initialState';
import {browserHistory} from 'react-router';

export default function courseReducer(state = initialState.courses, action){
  //debugger;
  switch (action.type){
    case types.LOAD_COURSE_SUCCESS:
      return action.courses;
      // return [...state,  Object.assign({},action.course)
      // ];
      // state.push(course);
      // return state;
    case types.CREATE_COURSE_SUCCESS:
     return [...state,  Object.assign({},action.course)
     ];

    case types.UPDATE_COURSE_SUCCESS:
      return [...state.filter(course => course.id !== action.course.id),  Object.assign({},action.course)
      ];

    case types.DELETE_COURSE_SUCCESS:
         return [...state.filter((course) => course.id !== action.courseId)];
    default :
      return state;
  }
}
