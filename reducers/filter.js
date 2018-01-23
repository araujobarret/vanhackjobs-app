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
    // Get the skills from the API
    case GET_SKILLS:
      return Object.assign({}, state, {skills: action.skills});
      break;
    // Get the countries from the API
    case GET_COUNTRIES:
      return Object.assign({}, state, {countries: action.countries});
      break;
    // Get the cities of a country from the API
    case GET_CITIES:
      return Object.assign({}, state, {cities: action.cities});
      break;
    // Select a country and change the cities state
    case SELECT_COUNTRY:
      // If the country is null clear the cities state
      if(action.selectedCountry == null) {
        state.cities = [];
        state.selectedCity = null;
      }
      return Object.assign({}, state, {selectedCountry: action.selectedCountry, cities: action.cities});
      break;
    // Set a selectedCity for the filter state
    case SELECT_CITY:
      return Object.assign({}, state, {selectedCity: action.selectedCity});
      break;
    // Set a skill for the filter skills state
    case SELECT_SKILL:
      let skills = state.selectedSkills;
      // Check if the skill is already selected, if not add it or remove it from the array for a toggle behaviour
      if(skills.indexOf(action.skill) == -1) {
        skills.push(action.skill);
      }
      else {
        skills.splice(skills.indexOf(action.skill), 1);
      }
      return Object.assign({}, state, {selectedSkills: skills});
      break;
    // Cleart the filter state parameters
    case CLEAR_JOBS_FILTER:
      return Object.assign({}, state, {cities: [], selectedCountry: null, selectedCity: null, selectedSkills: []});
      break;
    default:
      return state;
  }
}

export default filter;
