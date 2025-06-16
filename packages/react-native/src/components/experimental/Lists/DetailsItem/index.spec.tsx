import { render } from "@testing-library/react-native";
import React from "react";
import { DetailsItem } from ".";

describe("DetailsItem", () => {
  it("Snapshot", () => {
    const { toJSON } = render(<DetailsItem type="person" />);
    expect(toJSON()).toMatchSnapshot();
  });
});
