export const fetchPixabayImages = async (count = 6) => {
  const API_KEY = process.env.NEXT_PUBLIC_PIXABAY_API_KEY;
  const response = await fetch(`https://pixabay.com/api/?key=${API_KEY}&per_page=${count}`);
  const data = await response.json();
  return data.hits.map((image) => image.webformatURL);
};
