import { render } from "@testing-library/react-native";
import React from "react";
import WeatherHomeScreen from "../../src/screens/Home/HomeScreen";

// Mock dependencies
jest.mock("@react-navigation/native", () => ({
  useTheme: () => ({
    colors: { cardBackground: "#fff" },
  }),
}));

jest.mock("../../src/screens/Home/useHomeScreenViewModel", () => () => ({
  darkMode: false,
  isLoading: false,
}));

jest.mock("../../src/screens/Home/HomeScreen.Style", () => ({
  useHomeStyles: () => ({
    container: {},
    subContainer: {},
  }),
}));

jest.mock("../../src/components/Header/Header", () => () => <></>);
jest.mock("../../src/components/SearchBar/SearchBar", () => () => <></>);
jest.mock("../../src/components/WeatherCard/WeatherCard", () => () => <></>);
jest.mock("../../src/components/Loader/OverlayLoader", () => () => <></>);

describe("WeatherHomeScreen", () => {
  it("renders without crashing", () => {
    const { toJSON } = render(<WeatherHomeScreen />);
    expect(toJSON()).toBeTruthy(); // Checks that the component renders
  });
});
