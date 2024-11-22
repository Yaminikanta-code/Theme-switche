import React from "react";

import { useTheme } from "../Context/Theme";
/**
 * A functional component that renders a toggle switch to change the theme
 * between light and dark modes. It utilizes the `useTheme` hook to access
 * the current theme mode and functions to switch themes.
 *
 * When the toggle switch is checked, it sets the theme to dark mode using
 * the `darkTheme` function. When unchecked, it sets the theme to light mode
 * using the `lightTheme` function.
 *
 * The input checkbox reflects the current theme mode, being checked for
 * dark mode and unchecked for light mode.
 *
 * @returns {JSX.Element} A rendered theme toggle switch component.
 */
export default function ThemeBtn() {
  const { themeMode, lightTheme, darkTheme } = useTheme();
  /**
   * The event handler for the theme toggle switch. When the switch is toggled,
   * it checks the current state of the checkbox and either calls the
   * `darkTheme` or `lightTheme` function to change the theme.
   * @param {React.ChangeEvent<HTMLInputElement>} e The change event from the
   *   checkbox.
   */
  const onChangeButton = (e) => {
    const darkModeStatus = e.target.checked;
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onChange={onChangeButton}
        checked={themeMode === "dark"}
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span className="ml-3 text-sm font-medium text-gray-900">
        Toggle Theme
      </span>
    </label>
  );
}
