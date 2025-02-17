//Example 1: Using useRef to Access a DOM Element
import { useEffect, useRef, useState } from "react";

export default function App() {
  const [name, setName] = useState(""); // State to store the input value
  const inputRef = useRef(); // Creating a ref to access the input element

  function focus() {
    inputRef.current.focus(); // Correct use: Setting focus on the input field

    // ❌ Incorrect use of useRef: `input.current.value` should be `inputRef.current.value`
    // input.current.value = "Some value"; // This line is incorrect
  }

  return (
    <>
      {/* Assigning ref to the input so it can be accessed programmatically */}
      <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
      
      {/* Displaying the current input value */}
      <div>My name is {name}</div>

      {/* Button to set focus on the input field */}
      <button onClick={focus}>Focus</button>
    </>
  );
}



