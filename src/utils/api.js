import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const TMDB_TOKEN =
  "eyJhdWQiOiJiZGJmM2NiM2ZjYTlhZWFmNDE2MjdjZmY4MmQ5YThiMyIsInN1YiI6IjY1MTUyMjI5YzUwYWQyMDEyYzE3OGE2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ";

const headers = {
  accept: "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZGJmM2NiM2ZjYTlhZWFmNDE2MjdjZmY4MmQ5YThiMyIsInN1YiI6IjY1MTUyMjI5YzUwYWQyMDEyYzE3OGE2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ri3j2_GWi0hf3GIHGd_IUW33uc-9QBQ5tCANjt2KRPk",
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
