import { create } from "@storybook/theming/create"

export default create({
  base: "light",
  brandTitle: `<img src="one.svg" width="36px" />`,
  brandTarget: "_self",

  fontBase: '"Inter", sans-serif',

  //
  colorPrimary: "#E5103A",
  colorSecondary: "#585858",

  // UI
  appBg: "#ffffff",
  appContentBg: "#ffffff",
  appPreviewBg: "#ffffff",
  appBorderColor: "#ffffff",
  appBorderRadius: 4,

  // Text colors
  textColor: "#10162F",
  textInverseColor: "#ffffff",

  // Toolbar default and active colors
  barTextColor: "#9E9E9E",
  barSelectedColor: "#585858",
  barHoverColor: "#585858",
  barBg: "#ffffff",

  // Form colors
  inputBg: "#ffffff",
  inputBorder: "#cccccc",
  inputTextColor: "#101010",
  inputBorderRadius: 2,
})
