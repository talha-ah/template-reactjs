// const BASE_URL = 'https://cors-anywhere.herokuapp.com/http://localhost:5000';
const BASE_URL = "http://localhost:5000/";

const endpoints = {
  BASE_URL,
  LOGIN: BASE_URL + "auth/login",
  REGISTER_USER: BASE_URL + "user/create-deliveryman",
};

export default endpoints;
