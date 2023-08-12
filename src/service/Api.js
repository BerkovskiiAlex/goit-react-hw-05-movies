import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

axios.defaults.params = {
  language: ' en-US',
  api_key: '220201c66368926dc418ca9983b1c088',
  orientation: 'horizontal',
  image_type: 'photo',
};

export const fetchGetTrending = async () => {
  const { data } = await axios.get(`/trending/movie/day`);
  return data;
};
