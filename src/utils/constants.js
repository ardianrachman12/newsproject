export const NEWS_API_BASE_URL = 'https://newsapi.org/v2';
export const NEWS_API_KEY = process.env.NEWS_API_KEY;

if (!NEWS_API_KEY) {
  console.error("NEWS_API_KEY is not defined in .env file!");
}