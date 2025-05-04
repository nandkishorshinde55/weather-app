import { ExtendedTheme } from "@/src/theme/theme";
import { useTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export const useSearchBarStyles = () => {
  const { colors } = useTheme() as ExtendedTheme;
  return StyleSheet.create({
   button: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color:colors.buttonTextColor,
    fontWeight: "bold",
  },
  input: {
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: colors.textInputBgColor,
    color:colors.textInputColor
  },
  });
};
