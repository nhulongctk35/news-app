import { createAction } from 'redux-actions';

export const actionTypes = {
  FAILURE: 'FAILURE',
  RESET: 'RESET',
  LOAD_DATA: 'LOAD_DATA',
  LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
  SET_ACTIVE_NEWS: 'SET_ACTIVE_NEWS',
};

export const failure = createAction(actionTypes.FAILURE);
export const reset = createAction(actionTypes.RESET);
export const loadData = createAction(actionTypes.LOAD_DATA);
export const setActive = createAction(actionTypes.SET_ACTIVE_NEWS);
export const loadDataSuccess = createAction(actionTypes.LOAD_DATA_SUCCESS);
