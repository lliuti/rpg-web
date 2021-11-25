import axios from "axios";

export const api = axios.create({
  baseURL: "https://rpg-platform.herokuapp.com/",
  // baseURL: "http://localhost:3333",
});
