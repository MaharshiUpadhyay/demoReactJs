import * as types from './actionType';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall , ajaxCallError} from './ajaxStatusAction';

export function loadCoursesSuccess(courses){
  return {type: types.LOAD_COURSE_SUCCESS , courses};
}

export function loadCourses() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses().then( courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}

export function createCourseSuccess(course){
  return {type: types.CREATE_COURSE_SUCCESS , course};
}

export function updateCourseSuccess(course){
  return {type: types.UPDATE_COURSE_SUCCESS , course};
}

export function deleteCourseSuccess(course,courseId){
  return {type: types.DELETE_COURSE_SUCCESS , course ,courseId};
}

 export function deleteCourse(course,courseId) {
   return function (dispatch) {
     let pathname = courseId;
     return courseApi.deleteCourse(courseId).then(() => {
       dispatch(deleteCourseSuccess(course,courseId));
     }).catch(error => {
       throw(error);
     });
   };
 }
export function saveCourse(course) {
  return function (dispatch,getState) {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then( savedCourse => {
      course.id ? dispatch(updateCourseSuccess(savedCourse)) : dispatch(createCourseSuccess(savedCourse));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
