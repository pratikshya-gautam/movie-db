import axios from 'axios';
const API_KEY = 'cba7f63ec5ee33a844885dbd299dd266';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function searchMovie(keyword) {
  const url = `${BASE_URL}/search/movie`;
  try {
    const response = await axios.get(url, {
      params: {
        api_key: API_KEY,
        query: keyword,
        language: 'en-US',
        page: 1,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getGenres() {
  const url = `${BASE_URL}/genre/movie/list`;
  try {
    const response = await axios.get(url, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });
    return response.data.genres;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieDetails(id) {
  const url = `${BASE_URL}/movie/${id}`;
  try {
    const response = await axios.get(url, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
