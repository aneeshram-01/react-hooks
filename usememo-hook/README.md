# useMemo Hook Example

This project demonstrates the usage of the `useMemo` hook in React, focusing on performance optimization by memoizing expensive computations and preventing unnecessary re-renders.

## 📌 Features
- **Optimized Expensive Computations**: Prevents unnecessary execution of costly functions.
- **Prevents Unnecessary Re-renders**: Ensures objects retain reference equality.
- **Efficient Theme State Management**: Avoids redundant `useEffect` triggers.

## 🔹 Key Learnings

### 1️⃣ Using `useMemo` for Expensive Computations
When performing heavy computations inside a React component, use `useMemo` to ensure it only runs when necessary:

```tsx
const doubleNumber = useMemo(() => {
  return slowFunction(number);
}, [number]); // Runs only when `number` changes
```

Without `useMemo`, the function would execute on every render, causing performance issues.

### 2️⃣ Avoiding Unnecessary Re-renders with `useMemo`
React treats objects as new references on every render, even if their values are the same. This can trigger unnecessary effects:

```tsx
const themeStyles = useMemo(() => {
  return {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
}, [dark]); // Memoizes the object
```

This ensures that `themeStyles` only changes when `dark` is updated, preventing unnecessary `useEffect` triggers.

### 3️⃣ Referential Equality and `useEffect`

If objects are recreated on every render, `useEffect` will treat them as changed values and run unnecessarily. `useMemo` helps retain referential equality:

```tsx
useEffect(() => {
  console.log("Theme Changed");
}, [themeStyles]); // Runs only when `themeStyles` changes
```

By memoizing `themeStyles`, React avoids redundant `useEffect` executions.

## 📄 Common Documentation
For installation instructions and an overview of the entire **Course**, refer to the main [README.md](../README.md) in the root folder.
