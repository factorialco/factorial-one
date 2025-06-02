import { render, screen } from "@testing-library/react-native";
import React from "react";
import { Counter } from ".";

describe("Counter", () => {
  const defaultProps = {
    value: 42,
  };

  it("Snapshot", () => {
    const { toJSON } = render(<Counter {...defaultProps} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("renders correctly with required props", () => {
    render(<Counter {...defaultProps} />);

    const number = screen.getByText("42");

    expect(number).toBeDefined();
  });
});
