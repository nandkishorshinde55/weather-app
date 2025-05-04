import React from "react";
import { Text, TextInput, TouchableOpacity } from "react-native";
import { useSearchBarStyles } from "./SearchBar.Style";
import useSearchBarViewmodel from "./SearchBarViewModel";

const SearchBar = () => {
  const { city, darkMode, setCity, handleSearch } = useSearchBarViewmodel();

  const styles = useSearchBarStyles();

  return (
    <>
      {/* Search */}
      <TextInput
        style={styles.input}
        placeholder="Search city..."
        placeholderTextColor={darkMode ? "#ccc" : "#888"}
        value={city}
        onChangeText={setCity}
      />

      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Get Weather 📍</Text>
      </TouchableOpacity>
    </>
  );
};

export default SearchBar;
