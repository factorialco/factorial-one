import { baseConfig } from "@factorialco/factorial-one-core/tailwind"
import type { Config } from "tailwindcss"

export default {
  ...baseConfig,
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./docs/**/*.{mdx,ts,tsx}",
    "./storybook/**/*.{mdx,ts,tsx}",
  ]
} satisfies Config
