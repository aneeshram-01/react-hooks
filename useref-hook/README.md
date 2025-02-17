useRef Hook Example

This project demonstrates the usage of the useRef hook in React, focusing on best practices for accessing DOM elements and persisting values across renders without causing re-renders.

📌 Features

Direct DOM Manipulation: Use useRef to interact with DOM elements, such as focusing an input field.

Persisting Values Across Renders: Store values without triggering re-renders.

Tracking Previous State: Use useRef inside useEffect to retain previous state values.

🔹 Key Learnings

1️⃣ Using useRef for DOM Manipulation

One common use of useRef is accessing and modifying DOM elements directly.

const inputRef = useRef();

function focus() {
  inputRef.current.focus(); // Correct way to focus the input field
}

return <input ref={inputRef} />;

✅ useRef allows direct interaction with a DOM element.
❌ Avoid modifying inputRef.current.value manually—it bypasses React’s controlled state management.

2️⃣ Using useRef to Track Previous State

useRef can persist values between renders without causing a re-render.

const prevName = useRef("");

useEffect(() => {
  prevName.current = name; // Store the previous value of 'name'
}, [name]);

✅ The value inside useRef.current persists between renders.
✅ Unlike useState, updating a useRef value does not cause a component re-render.

🔹 Best Practices

✅ Use useRef for DOM references and tracking mutable values across renders.
✅ Combine useRef with useEffect when tracking previous state.
❌ Do not use useRef to update state, as changes won’t cause re-renders.

## 📄 Common Documentation
For installation instructions and an overview of the entire **Course**, refer to the main [README.md](../README.md) in the root folder.
