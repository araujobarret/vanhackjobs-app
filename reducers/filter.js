import axios from 'axios';
import { HTTP_HEADER, API_GET_JOBS } from '../constants/api';
import { GET_COUNTRIES, GET_CITIES, GET_SKILLS } from '../constants/actionTypes';

// Reducer to control the jobs, page, job and error state
const initialState = {
  skills: [],
  cities: [],
  countries: [],
  selectedSkills: [],
  selectedCountry: null,
  selectedCity: null,
  error: ''
}

const filter = (state = initialState, action) => {
  switch(action.type){
    case GET_SKILLS:
      return Object.assign({}, {skills: action.skills});
      break;
    case GET_COUNTRIES:
      return Object.assign({}, {countries: action.countries});
      break;
    case GET_CITIES:
      return Object.assign({}, {cities: action.cities});
      break;
    default:
      return state;
  }
}

export default filter;
