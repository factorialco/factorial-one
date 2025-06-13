import { render, fireEvent, screen } from "@testing-library/react-native";
import React from "react";
import { TopNav } from "./";
import { ButtonProps } from "../../Button";

type MockIconType = { name: string };

jest.mock("../../Button", () => ({
  Button: jest.fn(
    ({
      label,
      onPress,
      icon,
      ...rest
    }: ButtonProps & { icon?: MockIconType }) => {
      const MockButton = require("react-native").TouchableOpacity;
      const MockText = require("react-native").Text;
      return (
        <MockButton onPress={onPress} accessibilityLabel={label} {...rest}>
          <MockText>{label}</MockText>
          {icon && <MockText>Icon:{icon.name}</MockText>}
        </MockButton>
      );
    },
  ),
}));

jest.mock("../../../icons", () => ({
  AppIcons: {
    ArrowLeft: { name: "ArrowLeft" } as MockIconType,
  },
}));

describe("TopNav", () => {
  const mockOnBack = jest.fn();
  const defaultProps = {
    onBack: mockOnBack,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the back button", () => {
    render(<TopNav {...defaultProps} />);
    const backButton = screen.getByText("Back");
    expect(backButton).toBeDefined();
    const icon = screen.getByText("Icon:ArrowLeft");
    expect(icon).toBeDefined();
  });

  it("calls onBack when the back button is pressed", () => {
    render(<TopNav {...defaultProps} />);
    const backButton = screen.getByText("Back");
    fireEvent.press(backButton);
    expect(mockOnBack).toHaveBeenCalledTimes(1);
  });

  it("matches snapshot", () => {
    const { toJSON } = render(<TopNav {...defaultProps} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
