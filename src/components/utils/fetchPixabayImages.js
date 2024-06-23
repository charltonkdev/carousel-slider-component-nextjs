export const fetchPixabayImages = async (count = 6) => {
  const API_KEY = '44546607-d150f2a22212d163ed3662011';
  const response = await fetch(`https://pixabay.com/api/?key=${API_KEY}&per_page=${count}`);
  const data = await response.json();
  return data.hits.map((image) => image.webformatURL);
};
