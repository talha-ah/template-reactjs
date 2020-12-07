// const BASE_URL = 'https://cors-anywhere.herokuapp.com/http://localhost:5000';
const BASE_URL = "http://localhost:8080/";

const endpoints = {
  BASE_URL,
  // Auth
  LOGIN: BASE_URL + "auth/login",
  REGISTER_USER: BASE_URL + "user/create-deliveryman",
  // User
  GET_ALL: BASE_URL + "/user",
  GET_PROFILE: BASE_URL + "/user/profile",
};

export default endpoints;
