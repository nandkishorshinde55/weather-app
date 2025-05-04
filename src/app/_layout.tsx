import { ThemeProvider } from "@react-navigation/native";
import { Slot } from "expo-router";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider, useSelector } from "react-redux";
import { store } from "../store/store";
import { DarkTheme, LightTheme } from "../theme/theme";

function LayoutWithTheme() {
  const darkMode = useSelector((state: any) => state.theme.darkMode);
  
  return (
    <ThemeProvider value={darkMode ? DarkTheme : LightTheme}>
      <SafeAreaProvider>
        <Slot />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default function Layout() {
  return (
    <Provider store={store}>
      <LayoutWithTheme />
    </Provider>
  );
}
