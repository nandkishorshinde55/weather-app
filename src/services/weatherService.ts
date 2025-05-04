import { API_CONFIG } from "../config/config";
import { apiClient } from "../utils/apiClient";

export const fetchWeather = (city: string) =>
  apiClient({
    path: "/weather",
    queryParams: {
      q: city,
      appid: API_CONFIG.API_KEY,
      units: API_CONFIG.DEFAULT_UNITS,
    },
  });
