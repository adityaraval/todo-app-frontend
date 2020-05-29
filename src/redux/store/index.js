import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import * as asyncInitialState from 'redux-async-initial-state';
import storage from '../../utils/storage';

import rootReducer from '../reducers';

const getInitialState = async () => {
  const token = await storage.getItem('token');
  const user = await storage.getItem('user');
  if (token) {
    return {
      currentUser: JSON.parse(user),
      isSigningUp: false,
      isLoggingIn: false,
    };
  }
  return {
    currentUser: {},
    isSigningUp: false,
    isLoggingIn: false,
  };
};

const loadStore = async (getCurrentState) => {
  const initialState = await getInitialState();
  return {
    ...getCurrentState(),
    user: initialState,
  };
};
const enhancers = [asyncInitialState.middleware(loadStore), thunk];

if (process.env.NODE_ENV !== 'production') {
  enhancers.push(createLogger());
}

export default createStore(rootReducer, applyMiddleware(...enhancers));
