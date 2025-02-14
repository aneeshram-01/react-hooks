# useEffect Hook Example

This project demonstrates the usage of the `useEffect` hook in React, focusing on best practices for side effects such as data fetching and event listeners.

## 📌 Features
- **Dynamic Data Fetching**: Fetches and updates data when the resource type changes.
- **Window Resize Handling**: Updates the UI dynamically based on window width.
- **Effect Cleanup**: Ensures event listeners are removed to prevent memory leaks.

## 🔹 Key Learnings

### 1️⃣ Using `useEffect` for Data Fetching
When fetching data in `useEffect`, ensure that the effect runs only when necessary:
```tsx
useEffect(() => {
  fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then((response) => response.json())
    .then((json) => setItems(json));
}, [resourceType]); // Runs only when resourceType changes
```
This ensures that the API call is made only when `resourceType` changes, avoiding unnecessary re-fetching.

### 2️⃣ Cleaning Up Side Effects
When using event listeners inside `useEffect`, always **remove them** during cleanup:
```tsx
useEffect(() => {
  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize); // Prevents memory leaks
  };
}, []); // Runs only once on mount
```
Not cleaning up side effects can cause performance issues and unexpected behavior.

## 📄 Common Documentation
For installation instructions and an overview of the entire **Course**, refer to the main [README.md](../README.md) in the root folder.

