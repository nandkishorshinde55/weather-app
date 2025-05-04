import { ExtendedTheme } from "@/src/theme/theme";
import { useTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export const useWeatherCardStyles = () => {
  const { colors } = useTheme() as ExtendedTheme;
  return StyleSheet.create({
    card: {
      borderRadius: 15,
      padding: 20,
      alignItems: "center",
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 3,
      backgroundColor: colors.cardBackground,
    },
    cityName: {
      fontSize: 20,
      fontWeight: "600",
      marginBottom: 10,
      color: colors.text,
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      marginBottom: 10,
    },
    info: {
      fontSize: 16,
      color: colors.label,
    },
    icon: {
      width: 100,
      height: 100,
    },
    error: {
      color: colors.danger,
    },
  });
};
