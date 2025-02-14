import React, { useContext, useState } from "react";

// Creating two separate contexts:
// - One for storing the theme state
// - Another for providing the toggle function
const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

// Custom hook to access the current theme value
export function useTheme() {
  return useContext(ThemeContext);
}

// Custom hook to access the function that updates the theme
export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

// ThemeProvider component to manage the theme state
export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    // Providing the theme value and toggle function separately
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}

/*
    Best Practices:
  - Separate contexts for state and updater function to avoid unnecessary re-renders.
  - Use custom hooks (`useTheme` and `useThemeUpdate`) to keep context usage clean.
  - `ThemeProvider` should wrap only the components that require theme context.

    What to Avoid:
  - Avoid providing functions inside a single context if they don’t need to re-render together.
  - Don’t wrap unnecessary components inside the provider to prevent redundant re-renders.
*/
