# useRef Hook Example

This project demonstrates the usage of the `useRef` hook in React, focusing on best practices for managing references to DOM elements and persisting values across renders without causing re-renders.

## 📌 Features
- **Direct DOM Manipulation**: Allows direct interaction with DOM elements without causing re-renders.
- **Preserving Values Across Renders**: Stores values that persist between renders without triggering re-renders.
- **Avoiding Unnecessary State Updates**: Helps avoid unnecessary re-renders by using refs instead of state.

## 🔹 Key Learnings

### 1️⃣ Using `useRef` for Direct DOM Manipulation
The `useRef` hook can be used to reference a DOM element and interact with it directly:
```tsx
import { useRef } from "react";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  function focus() {
    if (inputRef.current) {
      inputRef.current.focus(); // Sets focus to the input field
      inputRef.current.value = "Some value"; // Correct way to update ref values
    }
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={focus}>Focus</button>
    </>
  );
}
```
### ⚠️ What to Avoid
- **Incorrect use of refs**: `useRef` should not be used for rendering logic. It does not trigger re-renders.
- **Incorrect property access**: Ensure that `.current` is checked before accessing properties.

---
### 2️⃣ Using `useRef` to Persist Values Across Renders
Unlike state, `useRef` does not trigger a re-render when its value is updated. This makes it useful for storing previous state values:
```tsx
import { useEffect, useRef, useState } from "react";

function App() {
  const [name, setName] = useState("");
  const prevName = useRef("");

  useEffect(() => {
    prevName.current = name; // Stores the previous name
  }, [name]);

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>My name is {name} and it used to be {prevName.current}</div>
    </>
  );
}
```
### ⚠️ What to Avoid
- **Using refs instead of state**: `useRef` should not be used to hold values that affect rendering. State should be used instead.
- **Forgetting to update refs**: Unlike state, refs **do not trigger re-renders**, so they must be updated manually inside effects.

## 📄 Common Documentation
For installation instructions and an overview of the entire **Course**, refer to the main [README.md](../README.md) in the root folder.

