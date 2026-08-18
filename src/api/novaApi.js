import axios from "axios";

const novaApi = axios.create({
  baseURL: "http://localhost:5000",
});

export default novaApi;