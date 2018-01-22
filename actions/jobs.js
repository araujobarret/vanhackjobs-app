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

let jobs_list = [
  {
    id: 1,
    title: 'FrontEnd Developer',
    description: 'Some text to describe the job role and requirements',
    location: {
      country: "Canada",
      city: "Vancouver"
    },
    skills: [
      "react",
      "js",
      "npm"
    ],
    date: new Date('2018-01-10')
  },
  {
    id: 2,
    title: 'BackEnd Developer',
    description: 'Some text to describe the job role and requirements',
    location: {
      country: "Canada",
      city: "Saskatoon"
    },
    skills: [
      "node.js",
      "mongoose",
      "npm",
      "mongodb",
      "react"
    ],
    date: new Date('2018-01-12')
  },
  {
    id: 3,
    title: 'FrontEnd Intern',
    description: 'Some text to describe the job role and requirements',
    location: {
      country: "Canada",
      city: "Toronto"
    },
    skills: [
      "html",
      "js",
      "css"
    ],
    date: new Date('2018-01-15')
  },
  {
    id: 4,
    title: 'BackEnd Intern',
    description: 'Some text to describe the job role and requirements',
    location: {
      country: "Canada",
      city: "Montreal"
    },
    skills: [
      "js",
      "relational databases"
    ],
    date: new Date('2018-01-20')
  },
  {
    id: 5,
    title: 'Fullstack Developer',
    description: 'Some text to describe the job role and requirements',
    location: {
      country: "Netherlands",
      city: "Amsterdam"
    },
    skills: [
      "angular",
      "js",
      "npm",
      "node.js"
    ],
    date: new Date('2018-01-20')
  },
  {
    id: 6,
    title: 'FrontEnd Intern',
    description: 'Some text to describe the job role and requirements',
    location: {
      country: "Canada",
      city: "Toronto"
    },
    skills: [
      "html",
      "js",
      "css"
    ],
    date: new Date('2018-01-15')
  },
  {
    id: 7,
    title: 'BackEnd Intern',
    description: 'Some text to describe the job role and requirements',
    location: {
      country: "Canada",
      city: "Montreal"
    },
    skills: [
      "js",
      "relational databases"
    ],
    date: new Date('2018-01-20')
  },
  {
    id: 8,
    title: 'Fullstack Developer',
    description: 'Some text to describe the job role and requirements',
    location: {
      country: "Netherlands",
      city: "Amsterdam"
    },
    skills: [
      "angular",
      "js",
      "npm",
      "node.js"
    ],
    date: new Date('2018-01-20')
  },
]

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
