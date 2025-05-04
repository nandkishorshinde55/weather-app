import { fetchWeatherByCity } from "@/src/store/features/weather/weatherThunks";
import { useAppDispatch } from "@/src/store/hooks/useAppDispatch";
import { useAppSelector } from "@/src/store/hooks/useAppSelector";
import { loadCity } from "@/src/utils/storage";
import { useEffect } from "react";

const useHomeScreenViewmodel = () => {
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(
    (state) => state.weather.status === "loading"
  );

  useEffect(() => {
    getLastSearchCity();
  }, []);

  const getLastSearchCity = async () => {
    const lastCity = await loadCity();
    if (lastCity) dispatch(fetchWeatherByCity(lastCity));
  };

  return {
    darkMode,
    isLoading,
  };
};

export default useHomeScreenViewmodel;
