// Example 2: Using useRef to Track Previous State

import { useEffect, useRef, useState } from "react";

export default function App1() {
  const [name, setName] = useState(""); // State for the input value
  const prevName = useRef(""); // useRef stores the previous name value

  useEffect(() => {
    prevName.current = name; // Updating the ref with the latest state value
  }, [name]); // Runs every time 'name' changes

  return (
    <>
      {/* Controlled input field */}
      <input value={name} onChange={(e) => setName(e.target.value)} />
      
      {/* Displaying the current and previous values */}
      <div>My name is {name} and it used to be {prevName.current}</div>
    </>
  );
}