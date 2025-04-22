import { vi } from "vitest";

// Mock react-native
vi.mock("react-native", () => ({
  View: "View",
  Text: "Text",
  StyleSheet: {
    create: (styles: Record<string, unknown>) => styles,
  },
}));

// Mock @testing-library/react-native
vi.mock("@testing-library/react-native", () => ({
  render: vi.fn().mockImplementation((component) => ({
    getByText: (text: string) => {
      if (component.props.text === text || text === "Hello World") {
        return { props: { children: text } };
      }
      throw new Error(`Text "${text}" not found`);
    },
    getByTestId: (testId: string) => {
      return { testID: testId, props: {} };
    },
  })),
}));

// Mock @factorialco/factorial-one-core
vi.mock("@factorialco/factorial-one-core", () => ({
  semanticColors: {
    background: {
      default: {
        light: "#FFFFFF",
      },
    },
    foreground: {
      default: {
        light: "#000000",
      },
    },
  },
}));

// Mock react-native-svg components
vi.mock("react-native-svg", () => {
  const React = require("react");

  // Create mock components for all SVG elements
  const createComponent = (name: string) => {
    return React.forwardRef((props: any, ref: any) => {
      return React.createElement("View", {
        ...props,
        ref,
        testID: props.testID || `svg-${name}`,
      });
    });
  };

  // Return an object with all the mock components
  return {
    SvgProps: {},
    Svg: createComponent("svg"),
    Circle: createComponent("circle"),
    Ellipse: createComponent("ellipse"),
    G: createComponent("g"),
    Path: createComponent("path"),
    Polygon: createComponent("polygon"),
    Polyline: createComponent("polyline"),
    Line: createComponent("line"),
    Rect: createComponent("rect"),
    Use: createComponent("use"),
    Symbol: createComponent("symbol"),
    Defs: createComponent("defs"),
    LinearGradient: createComponent("linearGradient"),
    RadialGradient: createComponent("radialGradient"),
    Stop: createComponent("stop"),
    ClipPath: createComponent("clipPath"),
    Pattern: createComponent("pattern"),
    Mask: createComponent("mask"),
    Marker: createComponent("marker"),
  };
});

// Mock nativewind
vi.mock("nativewind", () => {
  return {
    cssInterop: vi.fn(),
    useColorScheme: vi.fn(() => "light"),
  };
});
