import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./Context/Theme";
import Card from "./Components/Card";
import ThemeButton from "./Components/ThemeButton";

/**
 * The App component is the root of the application. It renders a simple UI
 * that wraps the ThemeProvider component and a Card component. It also
 * provides the theme state and functions to switch the theme.
 *
 * @returns {ReactElement} The rendered component.
 */
function App() {
  const [themeMode, setThemeMode] = useState("light");

  /**
   * Sets the theme mode to "light".
   */
  const lightTheme = () => {
    setThemeMode("light");
  };
  /**
   * Sets the theme mode to "dark".
   */
  const darkTheme = () => {
    setThemeMode("dark");
  };
  // Actual theme switcher
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>
          {/* <ThemeButton /> */}
          <ThemeButton />

          <div className="w-full max-w-sm mx-auto"></div>
          {/* <Card /> */}
          <Card />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
