import { combineReducers } from 'redux';
import jobs from './jobs';
import nav from './nav';
import filter from './filter';

const rootReducer = combineReducers({
  nav,
  jobs,
  filter
});

export default rootReducer;
