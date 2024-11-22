import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});
export const ThemeProvider = ThemeContext.Provider;
/**
 * A custom hook that provides access to the ThemeContext.
 *
 * This hook returns the current theme context value, which includes
 * the theme mode and functions to switch between light and dark themes.
 *
 * @returns {object} The current ThemeContext value.
 */
export function useTheme() {
  return useContext(ThemeContext);
}
