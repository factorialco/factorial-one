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
    colors: {
      white: "0 0% 100%",
      current: "currentColor",
      transparent: "transparent",
      grey: {
        2: "210 25% 98%",
        5: "220 18% 97%",
        10: "216 20% 95%",
        20: "214 17% 92%",
        30: "213 15% 88%",
        40: "219 18% 69%",
        50: "218 14% 45%",
        60: "219 28% 26%",
        70: "219 35% 19%",
        80: "219 36% 16%",
        90: "219 37% 14%",
        100: "218 48% 10%",
      },
      radical: {
        50: "348 80% 50%",
        60: "348 80% 42%",
        70: "347 80% 34%",
      },
      viridian: {
        50: "184 92% 35%",
        60: "184 92% 30%",
        70: "184 92% 24%",
      },
      orange: {
        50: "25 95% 53%",
        60: "24 69% 49%",
        70: "24 69% 40%",
      },
      red: {
        50: "5 69% 56%",
        60: "4 61% 49%",
        70: "3 71% 41%",
      },
      grass: {
        50: "160 84% 39%",
        60: "160 85% 33%",
        70: "161 84% 27%",
      },
      malibu: {
        50: "216 90% 65%",
        60: "216 59% 55%",
        70: "216 48% 44%",
      },
      yellow: {
        50: "38 92% 54%",
        60: "38 79% 45%",
        70: "38 80% 36%",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
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
      "3xl": [
        "2.25rem",
        {
          lineHeight: "2.5rem",
          letterSpacing: "-0.02em",
        },
      ],
    },
    borderRadius: {
      none: "0px",
      "2xs": "0.25rem",
      xs: "0.375rem",
      sm: "0.5rem",
      DEFAULT: "0.625rem",
      md: "0.75rem",
      lg: "0.875rem",
      xl: "1rem",
      full: "9999px",
    },
    boxShadow: {
      DEFAULT: "0 2px 20px 0 hsl(var(--neutral-100) / 0.04)",
      md: "0 4px 20px 0 hsl(var(--neutral-100) / 0.08)",
      lg: "0 8px 30px 0 hsl(var(--neutral-100) / 0.12)",
      xl: "0 12px 56px 0 hsl(var(--neutral-100) / 0.16)",
      none: "none",
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
        f1: {
          foreground: {
            DEFAULT: "hsl(var(--neutral-100))",
            secondary: "hsl(var(--neutral-50))",
            inverse: "hsl(var(--neutral-0))",
            disabled: "hsl(var(--neutral-30))",
            accent: {
              DEFAULT: "hsl(var(--accent-70))",
            },
            critical: {
              DEFAULT: "hsl(var(--critical-70))",
            },
            info: {
              DEFAULT: "hsl(var(--info-70))",
            },
            warning: {
              DEFAULT: "hsl(var(--warning-70))",
            },
            positive: {
              DEFAULT: "hsl(var(--positive-70))",
            },
          },
          background: {
            DEFAULT: "hsl(var(--neutral-0))",
            secondary: {
              DEFAULT: "hsl(var(--neutral-10))",
              hover: "hsl(var(--neutral-20))",
            },
            tertiary: "hsl(var(--neutral-5))",
            bold: "hsl(var(--neutral-100))",
            accent: {
              DEFAULT: "hsl(var(--accent-50) / 0.1)",
              bold: {
                DEFAULT: "hsl(var(--accent-50))",
                hover: "hsl(var(--accent-60))",
              },
            },
            promote: {
              DEFAULT: "hsl(var(--promote-50) / 0.2)",
              hover: "hsl(var(--promote-50) / 0.4)",
            },
            critical: {
              DEFAULT: "hsl(var(--critical-50) / 0.1)",
              bold: "hsl(var(--critical-70))",
            },
            info: {
              DEFAULT: "hsl(var(--info-50) / 0.1)",
            },
            warning: {
              DEFAULT: "hsl(var(--warning-50) / 0.1)",
            },
            positive: {
              DEFAULT: "hsl(var(--positive-50) / 0.1)",
            },
            selected: {
              DEFAULT: "hsl(var(--selected-50) / 0.1)",
              bold: "hsl(var(--selected-50))",
            },
          },
          border: {
            DEFAULT: "hsl(var(--neutral-30))",
            hover: "hsl(var(--neutral-40))",
            secondary: "hsl(var(--neutral-10))",
            promote: {
              DEFAULT: "hsl(var(--promote-50) / 0.4)",
            },
          },
          icon: {
            DEFAULT: "hsl(var(--neutral-50))",
            secondary: "hsl(var(--neutral-40))",
            inverse: "hsl(var(--neutral-0))",
            bold: "hsl(var(--neutral-100))",
            critical: {
              DEFAULT: "hsl(var(--critical-50))",
              bold: "hsl(var(--critical-70))",
            },
            info: {
              DEFAULT: "hsl(var(--info-50))",
            },
            warning: {
              DEFAULT: "hsl(var(--warning-50))",
            },
            positive: {
              DEFAULT: "hsl(var(--positive-50))",
            },
          },
          ring: "hsl(var(--ring))",
          link: "hsl(var(--link))",
        },
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
  safelist: [
    {
      pattern: /^bg-f1-/,
      variants: ["hover", "focus", "active"],
    },
    {
      pattern: /^text-f1-/,
      variants: ["hover", "focus", "active"],
    },
    {
      pattern: /^border-f1-/,
      variants: ["hover", "focus", "active"],
    },
  ],
} satisfies Config
