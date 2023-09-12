import $http from "./axios";

export const getPopularMovies = async (apiKey) => {
  try {
    const res = await $http.get(
      `/movie/popular?language=en-US&api_key=${apiKey}`
    );
    return res?.data ?? res?.response?.data;
  } catch (e) {
    console.log(e);
    return e.response.data ?? { message: e.message };
  }
};

export const getMovieById = async (apiKey, id) => {
  try {
    const res = await $http.get(
      `/movie/${id}?language=en-US&api_key=${apiKey}`
    );
    return res?.data ?? res?.response?.data;
  } catch (e) {
    console.log(e);
    return e.response.data ?? { message: e.message };
  }
};

// https://api.themoviedb.org/3/search/movie?query=ben&include_adult=false&language=en-US&page=2&api_key=85e059b183a6a4c680d182b7cf2b1cf9

export async function searchMovieByName(query) {
  try {
    const res = await $http.get(
      `/movie/?query=${query}?language=en-US&api_key=85e059b183a6a4c680d182b7cf2b1cf9`
    );
    return res?.data ?? res?.response?.data;
  } catch (e) {
    console.log(e);
    return e.response?.data ?? { message: e.message };
  }
}
