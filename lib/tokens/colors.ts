export const baseColors = {
  white: "0 0% 100%",
  current: "currentColor",
  transparent: "transparent",
  grey: {
    0: "210 91% 22% / 0.02",
    5: "220 88% 17% / 0.04",
    10: "216 89% 18% / 0.06",
    20: "214 70% 20% / 0.1",
    30: "213 87% 15% / 0.14",
    40: "219 97% 15% / 0.37",
    50: "217 96% 11% / 0.61",
    60: "220 88% 10% / 0.82",
    70: "219 91% 8% / 0.88",
    80: "219 94% 7% / 0.9",
    90: "219 88% 6% / 0.92",
    100: "218 48% 10%",
  },
  lilac: {
    50: "340 49% 60%",
    60: "341 34% 50%",
    70: "340 33% 41%",
  },
  barbie: {
    50: "331 84% 63%",
    60: "331 55% 53%",
    70: "330 49% 43%",
  },
  smoke: {
    50: "192 26% 54%",
    60: "192 22% 45%",
    70: "192 22% 37%",
  },
  army: {
    50: "162 44% 33%",
    60: "163 45% 28%",
    70: "162 44% 23%",
  },
  flubber: {
    50: "84 55% 53%",
    60: "84 48% 45%",
    70: "83 48% 33%",
  },
  indigo: {
    50: "239 91% 64%",
    60: "239 59% 54%",
    70: "239 51% 44%",
  },
  camel: {
    50: "25 46% 53%",
    60: "25 42% 44%",
    70: "25 42% 36%",
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
  purple: {
    50: "258 88% 67%",
    60: "258 56% 56%",
    70: "258 43% 46%",
  },
}

export const f1Colors = {
  foreground: {
    DEFAULT: "hsl(var(--neutral-100))",
    secondary: "hsl(var(--neutral-50))",
    tertiary: "hsl(var(--neutral-40))",
    inverse: {
      DEFAULT: "hsl(var(--neutral-0))",
      secondary: "hsl(var(--neutral-0) / 0.8)",
    },
    disabled: "hsl(var(--neutral-30))",
    accent: "hsl(var(--accent-70))",
    critical: "hsl(var(--critical-70))",
    info: "hsl(var(--info-70))",
    warning: "hsl(var(--warning-70))",
    positive: "hsl(var(--positive-70))",
    selected: "hsl(var(--selected-70))",
  },
  background: {
    DEFAULT: "hsl(var(--neutral-0))",
    hover: "hsl(var(--neutral-5))",
    secondary: {
      DEFAULT: "hsl(var(--neutral-10))",
      hover: "hsl(var(--neutral-20))",
    },
    tertiary: "hsl(var(--neutral-5))",
    bold: "hsl(var(--neutral-90))",
    accent: {
      DEFAULT: "hsl(var(--accent-50) / 0.1)",
      bold: {
        DEFAULT: "hsl(var(--accent-50))",
        hover: "hsl(var(--accent-60))",
      },
      alpha5: "hsl(var(--accent-50) / 0.05)",
    },
    promote: {
      DEFAULT: "hsl(var(--promote-50) / 0.2)",
      hover: "hsl(var(--promote-50) / 0.4)",
      alpha5: "hsl(var(--promote-50) / 0.05)",
    },
    critical: {
      DEFAULT: "hsl(var(--critical-50) / 0.1)",
      bold: "hsl(var(--critical-70))",
    },
    info: "hsl(var(--info-50) / 0.1)",
    warning: "hsl(var(--warning-50) / 0.1)",
    positive: "hsl(var(--positive-50) / 0.1)",
    selected: {
      DEFAULT: "hsl(var(--selected-50) / 0.1)",
      bold: "hsl(var(--selected-50))",
    },
  },
  border: {
    DEFAULT: "hsl(var(--neutral-30))",
    hover: "hsl(var(--neutral-40))",
    secondary: "hsl(var(--neutral-10))",
    inverse: "hsl(var(--neutral-0) / 0.2)",
    promote: {
      DEFAULT: "hsl(var(--promote-50) / 0.4)",
      alpha30: "hsl(var(--promote-50) / 0.3)",
    },
    selected: {
      DEFAULT: "hsl(var(--selected-50) / 0.2)",
      bold: "hsl(var(--selected-50))",
    },
    accent: {
      alpha20: "hsl(var(--accent-50) / 0.2)",
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
    info: "hsl(var(--info-50))",
    warning: "hsl(var(--warning-50))",
    positive: "hsl(var(--positive-50))",
    selected: "hsl(var(--selected-50))",
  },
  ring: "hsl(var(--ring))",
  link: "hsl(var(--link))",
}
