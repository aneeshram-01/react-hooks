import { useTheme, useThemeUpdate } from "./ThemeContext";

export default function FunctionContextComponent() {
  // Accessing theme state using custom hook
  const darkTheme = useTheme();
  
  // Accessing toggle function using custom hook
  const toggleTheme = useThemeUpdate();

  // Styling based on the current theme
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };

  return (
    <>
      {/* Button to toggle theme */}
      <button onClick={toggleTheme}>Toggle Theme</button>

      {/* Div styled according to the current theme */}
      <div style={themeStyles}>Function Theme</div>
    </>
  );
}

/*
    Best Practices:
  - Uses custom hooks (`useTheme` and `useThemeUpdate`) for cleaner and reusable code.
  - Avoids prop drilling by accessing context directly.
  - Keeps UI and logic separate.

    What to Avoid:
  - Avoid using `useContext(ThemeContext)` directly in multiple components.
  - Avoid redundant state updates that cause unnecessary re-renders.
*/
