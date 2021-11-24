import axios from "axios";

export const api = axios.create({
  baseURL: window.env.REACT_APP_API_URL,
});
