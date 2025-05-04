import { saveTheme } from "@/src/utils/storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  darkMode: boolean;
}

const initialState: ThemeState = {
  darkMode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {  
      state.darkMode = !state.darkMode;
      setTheme(!state.darkMode);
    },
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
    }
  },
});

const setTheme = async (theme: boolean) => {
  await saveTheme(!theme);
};

export const { toggleTheme,setDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
