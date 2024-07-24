declare const themes: readonly ["light", "dark", "system"];
export type Theme = (typeof themes)[number];
export declare const availableThemes: Theme[];
type ThemeProviderProps = {
    children: React.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
};
type ThemeProviderState = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};
export declare function ThemeProvider({ children, defaultTheme, ...props }: ThemeProviderProps): import("react").JSX.Element;
export declare const useTheme: () => ThemeProviderState;
export {};
