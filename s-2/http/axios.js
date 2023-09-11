// const axios = require("axios");

// const baseUrl =
//   process.env.NODE_ENV !== "production" ? "" : "http://localhost:3000/api";

// // axios config for client
// const $axios = axios.create({
//   baseURL: baseUrl,
//   timeout: 30000,
//   headers: {
//     "Content-Type": "application/json",
//     "Access-Control-Allow-Origin": "*",
//   },
//   withCredentials: true,
// });

// module.exports = $axios;

const axios = require("axios");

// axios config for server
const $http = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: true,
});

module.exports = $http;
