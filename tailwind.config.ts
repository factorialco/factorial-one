const { baseConfig } = require("@factorialco/factorial-one-core/tailwind");
const { hairlineWidth } = require("nativewind/theme");

/** @type {import("tailwindcss").Config} */
module.exports = {
  ...baseConfig,
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    ...baseConfig.theme,
    extend: {
      ...baseConfig.theme.extend,
      borderWidth: {
        hairline: hairlineWidth(),
      },
    },
  },
};
