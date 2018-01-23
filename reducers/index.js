import { combineReducers } from 'redux';
import jobs from './jobs';
import nav from './nav';
import filter from './filter';

// Reducer combiner
const rootReducer = combineReducers({
  nav,
  jobs,
  filter
});

export default rootReducer;
