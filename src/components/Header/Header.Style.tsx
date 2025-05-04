import { ExtendedTheme } from "@/src/theme/theme";
import { useTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export const useHeaderStyles = () => {
  const { colors } = useTheme() as ExtendedTheme;
  return StyleSheet.create({
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 10,
      backgroundColor: colors.cardBackground,
      marginBottom: 30, // Increased bottom spacing
      opacity: 0.95, // Slight opacity for more subtle appearance
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 5, // For Android shadow
    },
    headerTitle: {
      fontSize: 22,
      fontWeight: "bold",
      color: colors.text,
      marginLeft: 16,
    },
    themeToggle: {
      flexDirection: "row",
      alignItems: "center",
      gap: 1,
      marginRight: 4,
    },
    themeLabel: {
      fontSize: 16,
      marginRight: 4,
      color: colors.label,
    },
  });
};
