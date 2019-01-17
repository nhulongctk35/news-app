import { createStore, applyMiddleware } from 'redux';

import rootReducer, { initialState } from './reducer';

const bindMiddleware = (middleware = []) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

function configureStore(initialState = initialState) {
  const store = createStore(rootReducer, initialState, bindMiddleware());

  return store;
}

export default configureStore;
