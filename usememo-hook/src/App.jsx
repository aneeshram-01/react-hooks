import { useState, useMemo, useEffect } from "react";

export default function App() {
  // State to store the input number
  const [number, setNumber] = useState(0);
  
  // State to manage theme (dark/light)
  const [dark, setDark] = useState(false);

  /*
    useMemo is used here to optimize performance.
    
    The `slowFunction` is a computationally expensive function that 
    runs a loop up to 1 billion times before returning a value.
    
    If `useMemo` were NOT used:
    - The function would run on every render, even if `number` remains the same.
    
    With `useMemo`:
    - The function is only recalculated when `number` changes.
  */
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]); // Dependency array ensures recalculation only when `number` changes.

  /*
    Creating an object inside a component causes a new reference 
    every time the component re-renders, even if the values are the same.
    
    `useMemo` ensures that `themeStyles` remains the same object unless `dark` changes.
  */
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]); // Only recomputes when `dark` changes.

  /*
    `useEffect` runs when `themeStyles` changes.
    
    Without `useMemo`:
    - Even if `dark` remains unchanged, React treats `themeStyles` as a new object 
      in every render due to referential equality issues.
    - This would cause unnecessary `console.log("Theme Changed")` calls.

    With `useMemo`:
    - `themeStyles` remains the same object unless `dark` changes, 
      preventing unnecessary re-renders and effect calls.
  */
  useEffect(() => {
    console.log("Theme Changed");
  }, [themeStyles]); // Effect runs only when `themeStyles` changes.

  return (
    <>
      {/* Input field to update `number` state */}
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />

      {/* Button to toggle dark mode */}
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>

      {/* Styled div showing the doubled number */}
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
}

/*
  Expensive function that simulates heavy computation.

  - This function loops up to 1 billion times, 
    making it a costly operation.
  - If called on every render, it will significantly 
    slow down the UI.
  - Using `useMemo` ensures that the function is only 
    executed when necessary.
*/
function slowFunction(num) {
  console.log("Calling slow function");
  for (let i = 0; i <= 1000000000; i++) {} // Simulating a heavy computation
  return num * 2;
}
