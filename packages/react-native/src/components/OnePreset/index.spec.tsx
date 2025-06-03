import { render, screen } from "@testing-library/react-native";
import React from "react";
import { OnePreset } from ".";

describe("OnePreset", () => {
  const defaultProps = {
    label: "label",
  };

  it("Snapshot", () => {
    const { toJSON } = render(<OnePreset {...defaultProps} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("Snapshot with number", () => {
    const { toJSON } = render(<OnePreset {...defaultProps} number={42} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("renders correctly with required props", () => {
    render(<OnePreset {...defaultProps} />);

    const number = screen.getByText("label");

    expect(number).toBeDefined();
  });
});
