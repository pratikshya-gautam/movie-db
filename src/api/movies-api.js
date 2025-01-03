import axios from 'axios';
const API_KEY = 'ded6693e';
const END_POINT = 'https://www.omdbapi.com';
const axiosConfig = { baseURL: END_POINT };

export async function searchMovie(keyword) {
  const result = await axios.get(
    `/?s=${keyword}&apikey=${API_KEY}`,
    axiosConfig
  );
  return result.data;
}
