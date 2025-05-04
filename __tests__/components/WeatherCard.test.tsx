import { render } from "@testing-library/react-native";
import React from "react";
import WeatherCard from "../../src/components/WeatherCard/WeatherCard";
import { useWeatherCardStyles } from "../../src/components/WeatherCard/WeatherCard.Style";
import useWeatherCardViewmodel from "../../src/components/WeatherCard/WeatherCardViewModel";

// Mock the hooks and config
jest.mock("../../src/components/WeatherCard/WeatherCardViewModel", () =>
  jest.fn()
);
jest.mock("../../src/components/WeatherCard/WeatherCard.Style", () => ({
  useWeatherCardStyles: jest.fn(),
}));
jest.mock("../../src/config/config", () => ({
  API_CONFIG: {
    ASSET_URL: "http://mockurl.com",
  },
}));

describe("WeatherCard Component", () => {
  let mockUseWeatherCardViewmodel: jest.Mock;
  let mockUseWeatherCardStyles: jest.Mock;

  beforeEach(() => {
    mockUseWeatherCardViewmodel = useWeatherCardViewmodel as jest.Mock;
    mockUseWeatherCardStyles = useWeatherCardStyles as jest.Mock;

    mockUseWeatherCardStyles.mockReturnValue({
      card: {},
      cityName: {},
      row: {},
      info: {},
      icon: {},
      error: {},
    });
  });

  test("renders the error message when there is an error", () => {
    mockUseWeatherCardViewmodel.mockReturnValue({
      error: JSON.stringify({ message: "Unable to fetch data" }),
      city: "",
      condition: "",
      temperature: "",
      icon: "",
      status: "",
    });

    const { getByText } = render(<WeatherCard />);
    expect(getByText("Unable to fetch data")).toBeTruthy();
  });

  test('renders nothing when the status is "loading"', () => {
    mockUseWeatherCardViewmodel.mockReturnValue({
      error: "",
      city: "New York",
      condition: "Sunny",
      temperature: "25°C",
      icon: "sun",
      status: "loading",
    });

    const { queryByTestId } = render(<WeatherCard />);
    expect(queryByTestId("weather-card")).toBeNull();
  });

  test("renders nothing when there is no city", () => {
    mockUseWeatherCardViewmodel.mockReturnValue({
      error: "",
      city: "",
      condition: "Sunny",
      temperature: "25°C",
      icon: "sun",
      status: "success",
    });

    const { queryByTestId } = render(<WeatherCard />);
    expect(queryByTestId("weather-card")).toBeNull();
  });

  test("renders the weather card when data is available", () => {
    mockUseWeatherCardViewmodel.mockReturnValue({
      error: "",
      city: "New York",
      condition: "Sunny",
      temperature: "25°C",
      icon: "sun",
      status: "success",
    });

    const { getByText, getByTestId } = render(<WeatherCard />);

    expect(getByText("New York")).toBeTruthy();
    expect(getByText("🌡️ 25°C")).toBeTruthy();
    expect(getByText("Sunny")).toBeTruthy();

    const imageComponent = getByTestId("weather-card-icon");
    expect(imageComponent.props.source.uri).toBe(
      "http://mockurl.com/sun@2x.png"
    );
  });
});
