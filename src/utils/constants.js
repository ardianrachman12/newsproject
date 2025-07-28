export const NEWS_API_BASE_URL = 'https://newsapi.org/v2';
// For Vite projects:
export const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

// For Create React App, use:
// export const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;

if (!NEWS_API_KEY) {
  console.error("NEWS_API_KEY is not defined in .env file!");
}