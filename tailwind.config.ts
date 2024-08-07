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
    spacing: {
      px: "1px",
      0: "0px",
      0.5: "2px",
      1: "4px",
      1.5: "6px",
      2: "8px",
      2.5: "10px",
      3: "12px",
      3.5: "14px",
      4: "16px",
      5: "20px",
      6: "24px",
      7: "28px",
      8: "32px",
      9: "36px",
      10: "40px",
      11: "44px",
      12: "48px",
      14: "56px",
      16: "64px",
      20: "80px",
      24: "96px",
      28: "112px",
      32: "128px",
      36: "144px",
      40: "160px",
      44: "176px",
      48: "192px",
      52: "208px",
      56: "224px",
      60: "240px",
      64: "256px",
      72: "288px",
      80: "320px",
      96: "384px",
    },
    fontSize: {
      xs: ["0.6875rem", "1rem"],
      sm: ["0.8125rem", "1.25rem"],
      base: ["0.9375rem", "1.5rem"],
      lg: ["1.0625rem", "1.5rem"], // Not really used but we keep it for scale
      xl: ["1.1875rem", "1.75rem"],
      "2xl": ["1.3125rem", "1.75rem"], // Same
      "3xl": ["1.5rem", "2rem"], // Same
      "4xl": ["1.6875rem", "2rem"],
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
