import { render } from "@testing-library/react-native";
import React from "react";
import { EmojiAvatar } from "./";

describe("Button", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Snapshot - with emoji", () => {
    const { toJSON } = render(<EmojiAvatar emoji="👋" />);

    expect(toJSON()).toMatchSnapshot();
  });

  it("Snapshot - with text emoji", () => {
    const { toJSON } = render(<EmojiAvatar emoji="test" />);

    expect(toJSON()).toMatchSnapshot();
  });

  it("Snapshot - different sizes", () => {
    const sizes = ["sm", "md", "lg"] as const;

    sizes.forEach((size) => {
      const { toJSON } = render(<EmojiAvatar emoji="👋" size={size} />);
      expect(toJSON()).toMatchSnapshot();
    });
  });
});
