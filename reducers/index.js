import { combineReducers } from 'redux';
import jobs from './jobs';
import nav from './nav';

const rootReducer = combineReducers({
  nav,
  jobs,
});

export default rootReducer;
