import FunctionContextComponent from "./FunctionContextComponent";
import { ThemeProvider } from "./ThemeContext";
// Wrapping the entire app (or relevant components) inside ThemeProvider so that all child components can access the theme context
export default function App() {
  return (
    <>
      <ThemeProvider>
        <FunctionContextComponent />
      </ThemeProvider>
    </>
  );
}

// Without using a custom hook (basic approach)
/* import React, { useState } from "react";
import FunctionContextComponent from "./FunctionContextComponent";

// Creating a Theme Context
export const ThemeContext = React.createContext();

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <>
      // Providing theme state to child components using Context
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionContextComponent />
      </ThemeContext.Provider>
    </>
  );
} */
