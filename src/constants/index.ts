const API_URL = process.env.API_URL,
  API_KEY = process.env.API_KEY;

const API_URL_V1 = `${API_URL}/v1`;
const API_URL_V2 = `${API_URL}/v2`;

const COIN_MARKET_CAP_URL = "https://coinmarketcap.com";

export { API_URL, API_KEY, API_URL_V1, API_URL_V2, COIN_MARKET_CAP_URL };
