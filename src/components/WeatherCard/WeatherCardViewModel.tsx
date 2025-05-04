import { useAppSelector } from "@/src/store/hooks/useAppSelector";

const useWeatherCardViewmodel = () => {
  const { city, temperature, condition, icon, error, status } = useAppSelector(
    (state) => state.weather
  );

  return {
    city,
    temperature,
    condition,
    icon,
    error,
    status,
  };
};

export default useWeatherCardViewmodel;
