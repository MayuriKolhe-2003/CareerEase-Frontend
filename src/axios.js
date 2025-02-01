import axios from "axios";
axios.defaults.withCredentials = true;
const instance = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  //  baseURL: "https://careerease-website-backend.onrender.com/api/v1",
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true, // ✅ Ensures cookies are sent and received
});

export default instance;
