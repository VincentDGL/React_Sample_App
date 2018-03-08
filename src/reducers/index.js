import { combineReducers } from 'redux';
import userAppState from './users';

const rootReducer = combineReducers({
  userAppState
});

export default rootReducer;
