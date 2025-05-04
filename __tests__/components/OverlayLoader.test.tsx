import { render } from "@testing-library/react-native";
import React from "react";
import OverlayLoader from "../../src/components/Loader/OverlayLoader";
import { useLoaderStyles } from "../../src/components/Loader/OverlayLoader.Style";

// Mock the styles hook
jest.mock("../../src/components/Loader/OverlayLoader.Style", () => ({
  useLoaderStyles: jest.fn(),
}));

describe("OverlayLoader Component", () => {
  let mockUseLoaderStyles: jest.Mock;

  beforeEach(() => {
    mockUseLoaderStyles = useLoaderStyles as jest.Mock;
    mockUseLoaderStyles.mockReturnValue({
      overlay: {},
    });
  });

  test("renders correctly when visible is true", () => {
    const { getByTestId } = render(<OverlayLoader visible={true} />);

    // Modal should be present
    const modal = getByTestId("overlay-loader-modal");
    expect(modal).toBeTruthy();

    // ActivityIndicator should be present
    const spinner = getByTestId("activity-indicator");
    expect(spinner).toBeTruthy();
  });

  test("does not render Modal or ActivityIndicator when visible is false", () => {
    const { queryByTestId } = render(<OverlayLoader visible={false} />);

    expect(queryByTestId("overlay-loader-modal")).toBeNull();
    expect(queryByTestId("activity-indicator")).toBeNull();
  });
});
