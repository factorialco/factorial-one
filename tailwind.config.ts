/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss"

import { absoluteSpacing, relativeSpacing } from "./tailwind/spacing"

export default {
  darkMode: ["class"],
  corePlugins: {
    preflight: false,
  },
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./docs/**/*.{mdx,ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    fontSize: {
      sm: [
        ".75rem",
        {
          lineHeight: "1rem",
        },
      ],
      base: [
        ".875rem",
        {
          lineHeight: "1.25rem",
          letterSpacing: "-0.005em",
        },
      ],
      lg: [
        "1rem",
        {
          lineHeight: "1.5rem",
          letterSpacing: "-0.01em",
        },
      ],
      xl: [
        "1.375rem",
        {
          lineHeight: "1.75rem",
          letterSpacing: "-0.01em",
        },
      ],
      "2xl": [
        "1.625rem",
        {
          lineHeight: "2rem",
          letterSpacing: "-0.01em",
        },
      ],
    },
    // use pixel scale by default
    spacing: absoluteSpacing,
    extend: {
      flexBasis: relativeSpacing,
      height: relativeSpacing,
      maxHeight: relativeSpacing,
      maxWidth: relativeSpacing,
      minHeight: relativeSpacing,
      minWidth: relativeSpacing,
      textIndent: relativeSpacing,
      width: relativeSpacing,
      colors: {
        border: "hsl(var(--border))",
        input: {
          DEFAULT: "hsl(var(--input))",
          hover: "hsl(var(--input-hover))",
        },
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        page: {
          background: "hsl(var(--page-background))",
        },
        intermediate: "hsl(var(--intermediate))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          intermediate: "hsl(var(--primary-intermediate))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          intermediate: "hsl(var(--secondary-intermediate))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
          intermediate: "hsl(var(--destructive-intermediate))",
        },
        positive: {
          DEFAULT: "hsl(var(--positive))",
          foreground: "hsl(var(--positive-foreground))",
          intermediate: "hsl(var(--positive-intermediate))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
          intermediate: "hsl(var(--warning-intermediate))",
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          foreground: "hsl(var(--info-foreground))",
          intermediate: "hsl(var(--info-intermediate))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        layout: {
          DEFAULT: "hsl(var(--layout))",
          foreground: "hsl(var(--layout-foreground))",
          intermediate: "hsl(var(--layout-intermediate))",
        },
        link: "hsl(var(--link))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      containers: {
        "8xl": "96rem",
        "9xl": "120rem",
        "10xl": "152rem",
        "11xl": "192rem",
        "12xl": "240rem",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/container-queries"),
  ],
} satisfies Config
