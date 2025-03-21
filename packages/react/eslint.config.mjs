import { fixupConfigRules } from "@eslint/compat"
import { FlatCompat } from "@eslint/eslintrc"
import js from "@eslint/js"
import tsParser from "@typescript-eslint/parser"
import reactRefresh from "eslint-plugin-react-refresh"
import globals from "globals"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

// Common settings to apply to all configs using React
const reactSettings = {
  react: {
    version: "detect",
  },
}
export default [
  // Main project configuration
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ignores: [
      "**/dist",
      "**/.eslintrc.cjs",
      "apps/react-native-example/**",
      "packages/react-native/**",
      ".husky",
      ".vscode",
      ".yarn",
      "node_modules",
      "coverage",
      "storybook-static",
    ],
    settings: reactSettings,
  },
  ...fixupConfigRules(
    compat.extends(
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react-hooks/recommended",
      "plugin:storybook/recommended"
    )
  ).map((config) => ({
    ...config,
    settings: {
      ...(config.settings || {}),
      ...reactSettings,
    },
  })),
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ignores: ["apps/react-native-example/**"],
    plugins: {
      "react-refresh": reactRefresh,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: tsParser,
    },

    settings: reactSettings,
    rules: {
      "no-unused-vars": "off",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/display-name": ["error", {}],

      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
]
