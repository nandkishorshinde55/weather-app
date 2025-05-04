import OverlayLoader from "@/src/components/Loader/OverlayLoader";
import { ExtendedTheme } from "@/src/theme/theme";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import { useHomeStyles } from "./HomeScreen.Style";
import useHomeScreenViewmodel from "./useHomeScreenViewModel";

const WeatherHomeScreen: React.FC = () => {
  const { colors } = useTheme() as ExtendedTheme;
  const styles = useHomeStyles();
  const { darkMode, isLoading } = useHomeScreenViewmodel();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {/* Status Bar */}
        <StatusBar
          barStyle={darkMode ? "light-content" : "dark-content"}
          backgroundColor={colors.cardBackground}
        />
        {/* Header */}
        <Header />
        <View style={styles.subContainer}>
          {/* Search Bar */}
          <SearchBar />
          {/* Weather Card */}
          <WeatherCard />
        </View>
        <OverlayLoader visible={isLoading} />
      </View>
    </SafeAreaView>
  );
};

export default WeatherHomeScreen;
