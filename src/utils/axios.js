import axios from "axios";

const baseURL = "https://server.carpaint.uz/";

const instance = axios.create({
  baseURL: baseURL + "api/v1",
});

export default instance;
  