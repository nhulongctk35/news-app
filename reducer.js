import { handleActions } from 'redux-actions';
import {
  failure,
  loadData,
  loadDataSuccess,
  reset,
  setActive,
} from './actions';

export const initialState = {
  error: false,
  lastUpdate: 0,
  news: [],
  loading: false,
  active: null,
};

const reducer = handleActions(
  {
    [failure]: (state, { payload }) => ({ ...state, ...{ error: payload } }),
    [reset]: state => ({
      ...state,
      ...{ count: initialState.count },
    }),
    [loadData]: state => ({ ...state, ...{ loading: true } }),
    [loadDataSuccess]: (state, { payload }) => ({
      ...state,
      ...{ news: payload, loading: false },
    }),
    [setActive]: (state, { payload }) => ({
      ...state,
      ...{ active: payload },
    }),
  },
  initialState
);

export default reducer;
