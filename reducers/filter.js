import axios from 'axios';
import { HTTP_HEADER, API_GET_JOBS } from '../constants/api';
import { GET_COUNTRIES, GET_CITIES, GET_SKILLS, SELECT_SKILL, SELECT_COUNTRY, SELECT_CITY, CLEAR_JOBS_FILTER } from '../constants/actionTypes';

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
      return Object.assign({}, state, {skills: action.skills});
      break;
    case GET_COUNTRIES:
      return Object.assign({}, state, {countries: action.countries});
      break;
    case GET_CITIES:
      return Object.assign({}, state, {cities: action.cities});
      break;
    case SELECT_COUNTRY:
      if(action.selectedCountry == null) {
        state.cities = [];
        state.selectedCity = null;
      }
      return Object.assign({}, state, {selectedCountry: action.selectedCountry, cities: action.cities});
      break;
    case SELECT_CITY:
      return Object.assign({}, state, {selectedCity: action.selectedCity});
      break;
    case SELECT_SKILL:
      let skills = state.selectSkills;
      skills.push(action.skill);
      return Object.assign({}, state, {selectedSkills: skills});
      break;
    case CLEAR_JOBS_FILTER:
      return Object.assign({}, state, {cities: [], selectedCountry: null, selectedCity: null, selectedSkills: []});
      break;
    default:
      return state;
  }
}

export default filter;
