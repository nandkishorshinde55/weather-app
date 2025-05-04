import { ExtendedTheme } from "@/src/theme/theme";
import { useTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export const useLoaderStyles = () => {
  const { colors } = useTheme() as ExtendedTheme;
  return StyleSheet.create({
    overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.loaderModelBgColor,
  },
  });
};
