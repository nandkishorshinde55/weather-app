import { createSlice } from '@reduxjs/toolkit';
import { fetchWeatherByCity } from './weatherThunks';

interface WeatherState {
  city: string;
  temperature: number | null;
  condition: string;
  icon: string;
  status: 'idle' | 'loading' | 'failed';
  error: string | null;
}

const initialState: WeatherState = {
  city: '',
  temperature: null,
  condition: '',
  icon: '',
  status: 'idle',
  error: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherByCity.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchWeatherByCity.fulfilled, (state, action) => {
        state.status = 'idle';
        state.city = action.payload.name;
        state.temperature = action.payload.main.temp;
        state.condition = action.payload.weather[0].main;
        state.icon = action.payload.weather[0].icon;
      })
      .addCase(fetchWeatherByCity.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch weather';
      });
  },
});

export default weatherSlice.reducer;