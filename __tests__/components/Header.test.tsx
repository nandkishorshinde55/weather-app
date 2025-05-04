import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import Header from "../../src/components/Header/Header";
import { useHeaderStyles } from "../../src/components/Header/Header.Style";
import useHeaderViewmodel from "../../src/components/Header/HeaderViewModel";

// Mock the hooks
jest.mock("../../src/components/Header/HeaderViewModel", () => jest.fn());
jest.mock("../../src/components/Header/Header.Style", () => ({
  useHeaderStyles: jest.fn(),
}));

describe("Header Component", () => {
  let mockOnThemeChange: jest.Mock;

  beforeEach(() => {
    mockOnThemeChange = jest.fn();

    // Set default return for the mocked view model
    const mockedUseHeaderViewmodel = useHeaderViewmodel as jest.Mock;
    mockedUseHeaderViewmodel.mockReturnValue({
      darkMode: true,
      onThemeChange: mockOnThemeChange,
    });

    // Set default return for the mocked styles
    const mockedUseHeaderStyles = useHeaderStyles as jest.Mock;
    mockedUseHeaderStyles.mockReturnValue({
      header: {},
      headerTitle: {},
      themeToggleContainer: {},
      themeText: {},
    });
  });

  test("renders the header correctly", () => {
    const { getByText } = render(<Header />);

    // Title check
    expect(getByText("☁️ Weather App")).toBeTruthy();

    // Default dark mode, should show 🌙
    expect(getByText("🌙")).toBeTruthy();
  });

  test("renders the light mode label correctly when darkMode is false", () => {
    const mockedUseHeaderViewmodel = useHeaderViewmodel as jest.Mock;
    mockedUseHeaderViewmodel.mockReturnValueOnce({
      darkMode: false,
      onThemeChange: mockOnThemeChange,
    });

    const { getByText } = render(<Header />);
    expect(getByText("🌞")).toBeTruthy(); // Light mode
  });

  test("calls onThemeChange when the switch is toggled", () => {
    const { getByTestId } = render(<Header />);
    const switchComponent = getByTestId("theme-toggle-switch");

    fireEvent(switchComponent, "valueChange", true);
    expect(mockOnThemeChange).toHaveBeenCalled();
  });

  test("toggles switch value based on darkMode", () => {
    // First render: darkMode = true
    const { getByTestId, rerender } = render(<Header />);
    const switchComponent = getByTestId("theme-toggle-switch");
    expect(switchComponent.props.value).toBe(true); // Should be ON in dark mode

    // Second render: darkMode = false
    const mockedUseHeaderViewmodel = useHeaderViewmodel as jest.Mock;
    mockedUseHeaderViewmodel.mockReturnValueOnce({
      darkMode: false,
      onThemeChange: mockOnThemeChange,
    });

    rerender(<Header />);
    expect(getByTestId("theme-toggle-switch").props.value).toBe(false); // Should be OFF
  });
});
