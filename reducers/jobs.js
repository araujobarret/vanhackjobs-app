import axios from 'axios';
import { HTTP_HEADER, API_GET_JOBS } from '../constants/api';
import { GET_JOBS } from '../constants/actionTypes';

// Reducer to control the jobs, page, job and error state
const initialState = {
  job: null,
  jobs: null,
  error: ''
}

const jobs = (state = initialState, action) => {
  switch(action.type){
    // Get jobs method
    case GET_JOBS:
      let jobs = state.jobs ? state.jobs : [];
      jobs.push(...action.jobs);
      return Object.assign({}, state, { jobs: jobs });
      break;
    default:
      return state;
  }
}

export default jobs;
