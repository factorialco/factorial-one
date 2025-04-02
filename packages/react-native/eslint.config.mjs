import tsParser from "@typescript-eslint/parser"
import globals from "globals"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)

// Common settings to apply to all configs using React
const reactSettings = {
  react: {
    version: "detect",
  },
}

export default [
  // Ignore dist and other config files
  {
    ignores: ["**/dist", "**/.eslintrc.cjs", "**/.expo/**"],
  },

  // Main React Native configuration
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: reactSettings,
    rules: {
      "no-undef": "off", // Disable since it conflicts with globals in RN config files
      "@typescript-eslint/no-require-imports": "off", // React Native uses require-style imports
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
  },

  // React Native config files - special handling for CommonJS files
  {
    files: [
      "babel.config.js",
      "metro.config.js",
      "tailwind.config.js",
      "index.js",
    ],
    languageOptions: {
      globals: {
        ...globals.node,
        module: "writable",
        require: "readonly",
      },
    },
    rules: {
      "@typescript-eslint/no-require-imports": "off",
      "no-undef": "off",
    },
  },
]
