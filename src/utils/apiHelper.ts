import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000";

const apiInstance = axios.create({
  baseURL: apiUrl,
  headers: { "Content-Type": "multipart/form-data" },
});

export default apiInstance;
