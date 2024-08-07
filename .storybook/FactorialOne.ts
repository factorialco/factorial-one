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
  textMutedColor: "#A0A0A0",

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

  // Buttons
  buttonBg: "#444444", // Gris medio para fondo de botones
  buttonBorder: "#03DAC6", // Aqua para borde de botones
  booleanBg: "#292929", // Gris oscuro para fondo de botones booleanos
  booleanSelectedBg: "#03DAC6", // Aqua para fondo de botones booleanos seleccionados
})
