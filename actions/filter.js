import axios from 'axios';
import { HTTP_HEADER, API_GET_JOBS_SKILLS, API_GET_JOBS_COUNTRIES, API_GET_JOBS_CITIES } from '../constants/api';
import { GET_COUNTRIES, GET_CITIES, GET_SKILLS } from '../constants/actionTypes';

// Error handling
export const handleError = (error) => {
  return {
    type: "ERROR",
    error
  }
};

// Set skills
export const setSkills = (skills) => {
  return {
    type: GET_SKILLS,
    skills
  };
};

// Start the get skills process
export const startGetSkills = () => {
  return (dispatch) => {
    axios({
      method: "get",
      url: API_GET_JOBS_SKILLS,
      headers: HTTP_HEADER
    })
    .then((res) => {
      return dispatch(setSkills(res.data));
    }).catch((e) => console.error(e));
  };
}

// Set countries
export const setCountries = (countries) => {
  return {
    type: GET_COUNTRIES,
    countries
  };
};

// Start the get skills process
export const startGetCountries = () => {
  return (dispatch) => {
    axios({
      method: "get",
      url: API_GET_JOBS_COUNTRIES,
      headers: HTTP_HEADER
    })
    .then((res) => {
      return dispatch(setCountries(res.data));
    }).catch((e) => console.error(e));
  };
}

// Set countries
export const setCities = (cities) => {
  return {
    type: GET_CITIES,
    cities
  };
};

// Start the get skills process
export const startGetCities = (country) => {
  return (dispatch) => {
    axios({
      method: "get",
      url: API_GET_JOBS_CITIES,
      params: {
        country
      },
      headers: HTTP_HEADER
    })
    .then((res) => {      
      return dispatch(setCities(res.data));
    }).catch((e) => console.error(e));
  };
}
