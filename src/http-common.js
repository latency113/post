import axios from "axios";

export default axios.create({
  baseURL: "https://mongodb-khan.onrender.com",
  headers: {
    "Content-type": "application/json"
  }
});
