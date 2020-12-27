import axios from "axios";
import { LOGIN_USER, REGISTER_USER, AUTH_USER } from "./types";

export function loginUser(data) {
  const req = axios.post("https://loginappprac.herokuapp.com/api/users/login", data).then((res) => res.data);

  return {
    type: LOGIN_USER,
    payload: req,
  };
}

export function registerUser(data) {
  const req = axios.post("https://loginappprac.herokuapp.com/api/users/register", data).then((res) => res.data);

  return {
    type: REGISTER_USER,
    payload: req,
  };
}

export function auth() {
  const req = axios.get("https://loginappprac.herokuapp.com/api/users/auth").then(res => res.data)

  return {
    type: AUTH_USER,
    payload: req,
  };
}
