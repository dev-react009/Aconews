const API_KEY = "0fad87474a28e6b9cc20dae0a170c6aa";
const BASE_URL = "https://gnews.io/api/v4/";

export const fetchNews = async (query = "latest", page = 1) => {
  try {
    const response = await fetch(
      `${BASE_URL}search?q=${query}&apikey=${API_KEY}&lang=en&max=10&page=${page}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (!data.articles) {
      throw new Error("Unexpected response structure");
    }

    return data.articles;
  } catch (error) {
    
    throw new Error("Failed to fetch news. Please try again later.");
  }
};
