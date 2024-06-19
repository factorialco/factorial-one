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

export const darkTheme = create({
  base: "dark",
  brandTitle: `<img src="one_dark.svg" width="36px" />`,
  brandTarget: "_self",

  //
  colorPrimary: "#BB86FC",
  colorSecondary: "#03DAC6",

  // UI
  appBg: "#121212",
  appContentBg: "#1E1E1E",
  appPreviewBg: "#1E1E1E",
  appBorderColor: "#292929",
  appBorderRadius: 4,

  // Text colors
  textColor: "#E0E0E0",
  textInverseColor: "#121212",

  // Toolbar default and active colors
  barTextColor: "#BBBBBB",
  barSelectedColor: "#03DAC6",
  barHoverColor: "#03DAC6",
  barBg: "#121212",

  // Form colors
  inputBg: "#292929",
  inputBorder: "#444444",
  inputTextColor: "#E0E0E0",
  inputBorderRadius: 2,
})

export const blueTheme = create({
  base: "light",
  brandTitle: `<img src="one.svg" width="36px" />`,
  brandTarget: "_self",

  //
  colorPrimary: "#007BFF",
  colorSecondary: "#6610F2",

  // UI
  appBg: "#F8F9FA",
  appContentBg: "#FFFFFF",
  appPreviewBg: "#F8F9FA",
  appBorderColor: "#DEE2E6",
  appBorderRadius: 4,

  // Text colors
  textColor: "#212529",
  textInverseColor: "#FFFFFF",

  // Toolbar default and active colors
  barTextColor: "#6C757D",
  barSelectedColor: "#007BFF",
  barHoverColor: "#0056B3",
  barBg: "#FFFFFF",

  // Form colors
  inputBg: "#FFFFFF",
  inputBorder: "#CED4DA",
  inputTextColor: "#495057",
  inputBorderRadius: 2,
})
