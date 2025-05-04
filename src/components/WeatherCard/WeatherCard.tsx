import React from "react";
import { Image, Text, View } from "react-native";
import { API_CONFIG } from "../../config/config";
import { useWeatherCardStyles } from "./WeatherCard.Style";
import useWeatherCardViewmodel from "./WeatherCardViewModel";

const WeatherCard = () => {
  const { error, city, condition, temperature, icon, status } =
    useWeatherCardViewmodel();

  const styles = useWeatherCardStyles();

  if (error) return <Text style={styles.error}>{JSON.parse(error)?.message}</Text>;
  if (status === "loading") return null;
  if (!city) return null;

  return (
    <View style={styles.card}>
      <Text style={styles.cityName}>{city}</Text>
      <View style={styles.row}>
        <Text style={styles.info}>🌡️ {temperature}</Text>
        <Text style={styles.info}>{condition}</Text>
      </View>
      <Image
        source={{ uri: `${API_CONFIG.ASSET_URL}/${icon}@2x.png` }}
        style={styles.icon}
        testID="weather-card-icon"
      />
    </View>
  );
};

export default WeatherCard;
