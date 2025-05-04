import React from "react";
import { Switch, Text, View } from "react-native";
import { useHeaderStyles } from "./Header.Style";
import useHeaderViewmodel from "./HeaderViewModel";

const Header = () => {
  const { onThemeChange, darkMode } = useHeaderViewmodel();
  const styles = useHeaderStyles();

  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>☁️ Weather App</Text>
      <View style={styles.themeToggle}>
        <Text style={styles.themeLabel}>{darkMode ? "🌙" : "🌞"}</Text>
        <Switch
          value={darkMode}
          onValueChange={onThemeChange}
          testID="theme-toggle-switch"
        />
      </View>
    </View>
  );
};

export default Header;
