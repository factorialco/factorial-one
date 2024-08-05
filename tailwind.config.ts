import type { Config } from "tailwindcss"

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
      xs: ["11px", "16px"],
      sm: ["13px", "20px"],
      base: ["15px", "24px"],
      lg: ["17px", "24px"], // Not really used but we keep it for scale
      xl: ["19px", "28px"],
      "2xl": ["21px", "28px"], // Same
      "3xl": ["24x", "32px"], // Same
      "4xl": ["27x", "32px"],
    },
    extend: {
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
