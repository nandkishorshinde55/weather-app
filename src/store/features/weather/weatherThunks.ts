import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchWeather } from '../../../services/weatherService';
import { saveCity } from '../../../utils/storage';

export interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    main: string;
    icon: string;
  }[];
}

export const fetchWeatherByCity = createAsyncThunk<WeatherData, string>(
  'weather/fetchByCity',
  async (city: string):Promise<WeatherData> => {
    const data = await fetchWeather(city);
    await saveCity(city);
    return data as WeatherData;
  }
);