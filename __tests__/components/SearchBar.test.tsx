import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
import SearchBar from "../../src/components/SearchBar/SearchBar";
import { useSearchBarStyles } from "../../src/components/SearchBar/SearchBar.Style";
import useSearchBarViewmodel from "../../src/components/SearchBar/SearchBarViewModel";

// Mock hooks
jest.mock("../../src/components/SearchBar/SearchBarViewModel", () => jest.fn());
jest.mock("../../src/components/SearchBar/SearchBar.Style", () => ({
  useSearchBarStyles: jest.fn(),
}));

describe("SearchBar Component", () => {
  let mockSetCity: jest.Mock;
  let mockHandleSearch: jest.Mock;
  let mockUseSearchBarViewmodel: jest.Mock;
  let mockUseSearchBarStyles: jest.Mock;

  beforeEach(() => {
    mockSetCity = jest.fn();
    mockHandleSearch = jest.fn();

    mockUseSearchBarViewmodel = useSearchBarViewmodel as jest.Mock;
    mockUseSearchBarStyles = useSearchBarStyles as jest.Mock;

    mockUseSearchBarViewmodel.mockReturnValue({
      city: "New York",
      darkMode: false,
      setCity: mockSetCity,
      handleSearch: mockHandleSearch,
    });

    mockUseSearchBarStyles.mockReturnValue({
      input: {},
      button: {},
      buttonText: {},
    });
  });

  test("renders the search bar and button correctly", () => {
    const { getByPlaceholderText, getByText } = render(<SearchBar />);

    expect(getByPlaceholderText("Search city...")).toBeTruthy();
    expect(getByText("Get Weather 📍")).toBeTruthy();
  });

  test("calls setCity when user types in the input", () => {
    const { getByPlaceholderText } = render(<SearchBar />);

    const input = getByPlaceholderText("Search city...");
    fireEvent.changeText(input, "Los Angeles");

    expect(mockSetCity).toHaveBeenCalledWith("Los Angeles");
  });

  test("calls handleSearch when the button is pressed", () => {
    const { getByText } = render(<SearchBar />);

    const button = getByText("Get Weather 📍");
    fireEvent.press(button);

    expect(mockHandleSearch).toHaveBeenCalled();
  });

  test("sets placeholder color correctly based on darkMode", () => {
    // Light mode
    mockUseSearchBarViewmodel.mockReturnValueOnce({
      city: "New York",
      darkMode: false,
      setCity: mockSetCity,
      handleSearch: mockHandleSearch,
    });

    const { getByPlaceholderText } = render(<SearchBar />);
    const input = getByPlaceholderText("Search city...");
    expect(input.props.placeholderTextColor).toBe("#888");

    // Dark mode
    mockUseSearchBarViewmodel.mockReturnValueOnce({
      city: "New York",
      darkMode: true,
      setCity: mockSetCity,
      handleSearch: mockHandleSearch,
    });

    const { getByPlaceholderText: getByPlaceholderTextDark } = render(
      <SearchBar />
    );
    const inputDark = getByPlaceholderTextDark("Search city...");
    expect(inputDark.props.placeholderTextColor).toBe("#ccc");
  });
});
