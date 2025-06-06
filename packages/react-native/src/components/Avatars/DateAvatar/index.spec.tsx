import { render } from "@testing-library/react-native";
import React from "react";
import { DateAvatar } from "./";

describe("DateAvatar", () => {
  it("Snapshot", () => {
    const { toJSON } = render(<DateAvatar date={new Date()} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
