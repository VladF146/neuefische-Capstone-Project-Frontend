import axios from 'axios';

const API_BASE_URL = process.env.API_BASE_URL || 'https://neuefische-capstone-backend.herokuapp.com';

const postAuthentication = (email, password, authPageChoice) => axios.post(`${API_BASE_URL}/api/users/${authPageChoice}`, {
  email,
  password,
});

export default postAuthentication;
