import axios from "axios";

export const api = axios.create({
  baseURL: "https://dtmoneygf.netlify.app/api",
});
