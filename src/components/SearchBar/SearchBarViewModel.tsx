import { useThrottleCallback } from "@/src/hooks/useThrottleCallback";
import { fetchWeatherByCity } from "@/src/store/features/weather/weatherThunks";
import { useAppDispatch } from "@/src/store/hooks/useAppDispatch";
import { useAppSelector } from "@/src/store/hooks/useAppSelector";
import { useState } from "react";

const useSearchBarViewmodel = () => {
  const dispatch = useAppDispatch();
  //redux state
  const darkMode = useAppSelector((state) => state.theme.darkMode);

  //local state
  const [city, setCity] = useState<string>("");

  const throttledSearch = useThrottleCallback(() => {
    if (city.trim()) {
      dispatch(fetchWeatherByCity(city));
    }
  }, 1500);

  return {
    darkMode,
    city,
    setCity,
    handleSearch: throttledSearch,
  };
};

export default useSearchBarViewmodel;
