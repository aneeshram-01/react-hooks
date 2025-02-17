import { useState, useCallback } from "react";
import List from "./List";

export default function App() {
  const [number, setNumber] = useState(1); // State for input number
  const [dark, setDark] = useState(false); // State for theme

  /**
   * useCallback is used to memoize the function so that it doesn't get recreated 
   * on every render unless `number` changes.
   * 
   * If we used a regular function here, React would create a new function 
   * reference every time the component re-renders, causing unnecessary effects.
   * 
   * This function returns an array of three consecutive numbers.
   */
  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]); // Updates only when `number` changes, NOT when `dark` changes.

  // Defining theme styles. Since this object is recreated on each render,
  // it's NOT memoized with `useMemo`, but it's fine in this case.
  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

  return (
    <>
      <div style={theme}>
        {/* Input field to update `number` state */}
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />

        {/* Button to toggle dark mode */}
        <button onClick={() => setDark(prevDark => !prevDark)}>Toggle Theme</button>

        {/* Passing memoized function `getItems` to List component */}
        <List getItems={getItems} />
      </div>
    </>
  );
}
