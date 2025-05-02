const baseConfig = require("@factorialco/factorial-one-react-native/tailwind.config");

/** @type {import("tailwindcss").Config} */
module.exports = {
  ...baseConfig,
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./node_modules/@factorialco/factorial-one-react-native/**/*.{ts,tsx}",
  ],
};
