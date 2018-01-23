import axios from 'axios';
import { HTTP_HEADER, API_GET_JOBS_SKILLS, API_GET_JOBS_COUNTRIES, API_GET_JOBS_CITIES } from '../constants/api';
import { GET_COUNTRIES, GET_CITIES, GET_SKILLS, SELECT_SKILL, SELECT_COUNTRY, SELECT_CITY, CLEAR_JOBS_FILTER } from '../constants/actionTypes';

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
};

export const selectSkill = (skill) => {
  return {
    type: SELECT_SKILL,
    skill
  }
};

export const selectCountry = (country, cities) => {
  return {
    type: SELECT_COUNTRY,
    selectedCountry: country,
    cities
  }
};

export const setCountries = (countries) => {
  return {
    type: GET_COUNTRIES,
    countries
  }
};

export const selectCity = (city) => {
  return {
    type: SELECT_CITY,
    selectedCity: city == "choose" ? null : city
  }
};

// Start the get skills process
export const startSelectCountry = (country) => {
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
      return dispatch(selectCountry(country, res.data));
    }).catch((e) => console.error(e));
  };
}

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

export const clearFilterData = () => {
  return {
    type: CLEAR_JOBS_FILTER
  }
}
