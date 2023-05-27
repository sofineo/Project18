import axios from "axios";  

export const api = axios.create({
  baseURL: "https://rockeatmovies-api.onrender.com"
})