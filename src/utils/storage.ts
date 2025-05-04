import AsyncStorage from '@react-native-async-storage/async-storage';

const CITY_KEY = 'lastCity';
const THEME='darkMode'

export const saveCity = async (city: string) => {
  await AsyncStorage.setItem(CITY_KEY, city);
};

export const loadCity = async (): Promise<string | null> => {
  return await AsyncStorage.getItem(CITY_KEY);
};


export const saveTheme = async (theme: boolean) => { 
  await AsyncStorage.setItem(THEME, JSON.stringify(theme));
};

export const loadTheme = async (): Promise<string | null> => {
  return await AsyncStorage.getItem(THEME);
};