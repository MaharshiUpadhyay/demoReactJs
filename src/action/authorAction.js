import * as types from './actionType';
import AuthorApi from '../api/mockAuthorApi';
import {beginAjaxCall} from './ajaxStatusAction';

export function loadAuthorsSuccess(authors){
  //debugger;
  return {type: types.LOAD_AUTHOR_SUCCESS , authors};
}

export function loadAuthors() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return AuthorApi.getAllAuthors().then( authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw(error);
    });
  };
}
