import { useTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export const useHomeStyles = () => {
  const { colors } = useTheme();
  return StyleSheet.create({
    container: {
       flex: 1,
      backgroundColor: colors.background,
      justifyContent: "flex-start",
    },
    subContainer: {
      paddingHorizontal: 16,
      flex: 1,
    },
  });
};
