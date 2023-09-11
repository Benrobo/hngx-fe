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
