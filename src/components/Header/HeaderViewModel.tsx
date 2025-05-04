import {
  setDarkMode,
  toggleTheme,
} from "@/src/store/features/theme/themeSlice";
import { useAppDispatch } from "@/src/store/hooks/useAppDispatch";
import { useAppSelector } from "@/src/store/hooks/useAppSelector";
import { loadTheme } from "@/src/utils/storage";
import { useEffect } from "react";

const useHeaderViewmodel = () => {
  const dispatch = useAppDispatch();

  //redux state
  const darkMode = useAppSelector((state) => state.theme.darkMode);

  // toggle the theme
  const onThemeChange = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    getTheme();
  }, []);

  const getTheme = async () => {
    const value = await loadTheme();
    if (value !== null) {
      dispatch(setDarkMode(JSON.parse(value)));
    }
  };

  return {
    onThemeChange,
    darkMode,
  };
};

export default useHeaderViewmodel;
