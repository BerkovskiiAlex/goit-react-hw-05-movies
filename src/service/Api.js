import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

axios.defaults.params = {
  language: 'en-US',
  api_key: '220201c66368926dc418ca9983b1c088',
};

export async function fetchGetTrending() {
  try {
    const { data } = await axios.get('/trending/movie/day');
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function fetchSearchMovies(query) {
  try {
    const { data } = await axios.get('/search/movie', {
      params: { query },
    });
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function fetchDetails(id) {
  try {
    const { data } = await axios.get(`/movie/${id}`);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function fetchCast(id) {
  try {
    const { data } = await axios.get(`/movie/${id}/credits`);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function fetchReviews(id) {
  try {
    const { data } = await axios.get(`/movie/${id}/reviews`);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
