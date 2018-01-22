import axios from 'axios';
import { HTTP_HEADER, API_GET_JOBS } from '../constants/api';
import { GET_JOBS } from '../constants/actionTypes';

// Error handling
export const handleError = (error) => {
  return {
    type: "ERROR",
    error
  }
};

// Set jobs
export const setJobs = (jobs) => {
  return {
    type: GET_JOBS,
    jobs
  };
};

// Start the get jobs process
export const startGetJobs = (page) => {
  return (dispatch) => {
    axios({
      method: "post",
      url: API_GET_JOBS,
      data: {page},
      headers: HTTP_HEADER
    })
    .then((res) => {
      return dispatch(setJobs(res.data));
    }).catch((e) => console.error(e));
  };
}
