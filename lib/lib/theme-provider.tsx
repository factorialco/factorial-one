import { createContext, useContext, useEffect, useState } from "react"

const themes = ["light", "dark", "system"] as const
export type Theme = (typeof themes)[number]
export const availableThemes: Theme[] = [...themes] // Convert readonly array to mutable array

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  ...props
}: ThemeProviderProps) {
  const [overridenTheme, setTheme] = useState<Theme | null>(null)

  const theme = overridenTheme || defaultTheme

  useEffect(() => {
    const root = window.document.documentElement
    const resetThemes = () => root.classList.remove(...availableThemes)

    if (theme === "system") {
      const darkModePreference = window.matchMedia(
        "(prefers-color-scheme: dark)"
      )

      const setTheme = (darkModePreference: { matches: boolean }) => {
        const theme: Theme = darkModePreference.matches ? "dark" : "light"
        root.classList.remove(...availableThemes)
        root.classList.add(theme)
      }

      darkModePreference.addEventListener("change", (e) => setTheme(e))

      setTheme(darkModePreference)
    } else {
      root.classList.add(theme)
    }
    return () => resetThemes()
  }, [theme])

  const value = {
    theme,
    setTheme,
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
