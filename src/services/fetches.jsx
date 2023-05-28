import axios from 'axios';

const API_KEY = '35977247-3ab541937acfc9fc80c756318';
const BASE_URL = 'https://pixabay.com/api';

export async function fetch(input, page) {
  const items = await axios.get(
    `${BASE_URL}/?image_type=photo&orientation=horizontal&q=${input}&page=${page}&per_page=12&key=${API_KEY}`
  );
  return items.data;
}