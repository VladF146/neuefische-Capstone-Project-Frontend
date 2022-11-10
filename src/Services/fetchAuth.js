import axios from 'axios';

const API_BASE_URL = process.env.API_BASE_URL
  || 'https://neuefische-capstone-backend.herokuapp.com';

export const postSignin = (email, password) => axios.post(`${API_BASE_URL}/api/users/signin`, { email, password });

export const postSignup = (email, password) => axios.post(`${API_BASE_URL}/api/users/signup`, { email, password });
