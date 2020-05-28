import { combineReducers } from 'redux';
import * as asyncInitialState from 'redux-async-initial-state';
import todo from './todoReducer';
import user from './userReducer';

const rootReducer = asyncInitialState.outerReducer(
  combineReducers({
    user,
    todo,
    asyncInitialState: asyncInitialState.innerReducer,
  }),
);


export default rootReducer;
