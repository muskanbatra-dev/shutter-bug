import axios from "axios";

// loginapi

const loginService = async ({ email, password }) => {
  return axios.post("/api/auth/login", { email, password });
};

// Signupapi

const SignupService = async ({ email, password, firstName, lastName }) => {
  axios.post("/api/auth/signup"), { email, password, firstName, lastName };
};


export default {
  loginService,
  SignupService,
};
