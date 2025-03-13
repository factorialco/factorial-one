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
  // Ignore dist and other config files across the project
  {
    ignores: ["**/dist", "**/.eslintrc.cjs"],
  },

  // Main project configuration
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ignores: ["apps/react-native-example/**"],
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

  // React Native specific configuration
  {
    files: ["apps/react-native-example/**/*.{js,jsx,ts,tsx}"],
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
      "apps/react-native-example/babel.config.js",
      "apps/react-native-example/metro.config.js",
      "apps/react-native-example/tailwind.config.js",
      "apps/react-native-example/index.js",
    ],
    languageOptions: {
      globals: {
        ...globals.node,
        module: "writable",
        require: "readonly",
        __dirname: "readonly",
      },
    },
    rules: {
      "@typescript-eslint/no-require-imports": "off",
      "no-undef": "off",
    },
  },
]
