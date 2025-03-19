import { create } from "@storybook/theming/create"

export default create({
  base: "light",
  brandTitle: `<img src="logo.svg" width="32px" />`,
  brandTarget: "_self",

  fontBase: '"Inter", sans-serif',

  //
  colorPrimary: "#E5103A",
  colorSecondary: "#585858",

  // UI
  appBg: "#FAFBFC",
  appContentBg: "#ffffff",
  appPreviewBg: "#ffffff",
  appBorderColor: "#ffffff",
  appBorderRadius: 8,

  // Text colors
  textColor: "#303D55",
  textInverseColor: "#ffffff",

  // Toolbar default and active colors
  barTextColor: "#647084",
  barSelectedColor: "#0D1625",
  barHoverColor: "#0D1625",
  barBg: "#ffffff",

  // Form colors
  inputBg: "#ffffff",
  inputBorder: "#DCE0E5",
  inputTextColor: "#647084",
  inputBorderRadius: 8,
})

export const darkTheme = create({
  base: "dark",
  brandTitle: `<img src="logo.svg" width="32px" />`,
  brandTarget: "_self",

  fontBase: '"Inter", sans-serif',

  //
  colorPrimary: "#BB86FC",
  colorSecondary: "#647084",

  // UI
  appBg: "#161F30",
  appContentBg: "#0D1625",
  appPreviewBg: "#0D1625",
  appBorderColor: "#202C42",
  appBorderRadius: 8,

  // Text colors
  textColor: "#A1ABBD",
  textInverseColor: "#121212",
  textMutedColor: "#A0A0A0",

  // Toolbar default and active colors
  barTextColor: "#A1ABBD",
  barSelectedColor: "#A1ABBD",
  barHoverColor: "#A1ABBD",
  barBg: "#0D1625",

  // Form colors
  inputBg: "#161F30",
  inputBorder: "#202C42",
  inputTextColor: "#647084",
  inputBorderRadius: 8,

  // Buttons
  buttonBg: "#161F30",
  buttonBorder: "#202C42",
  booleanBg: "#161F30",
  booleanSelectedBg: "#202C42",
})
