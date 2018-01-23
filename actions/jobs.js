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
export const setJobs = (page, jobs) => {
  return {
    type: GET_JOBS,
    jobs,
    page
  };
};

// Start the get jobs process
export const startGetJobs = (page, filter) => {
  let filterObj = {};

  if(filter != null) {
    if(filter.selectedCity) {
      filterObj['location.city'] = filter.selectedCity;
    }
    if(filter.selectedCountry) {
      filterObj['location.country'] = filter.selectedCountry;
    }
    if(filter.selectedSkills.length > 0) {
      filterObj['skills'] = filter.selectedSkills;
    }
  }

  return (dispatch) => {
    axios({
      method: "post",
      url: API_GET_JOBS,
      data: {
        page,
        ...filterObj
      },
      headers: HTTP_HEADER
    })
    .then((res) => {
      return dispatch(setJobs(page, res.data));
    }).catch((e) => console.error(e));
  };
}
