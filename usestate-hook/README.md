# useState Hook Example

This project demonstrates the usage of the `useState` hook in React, focusing on best practices for state updates and performance optimization.

## 📌 Features
- **Increment and Decrement Count**: Click the buttons to modify the count.
- **Functional State Updates**: Ensures state updates correctly, even with multiple calls in quick succession.
- **Optimized Initial State Calculation**: Prevents unnecessary re-execution of expensive functions on re-renders.

## 🔹 Key Learnings
### 1️⃣ Functional Updates in `useState`
When updating state based on the previous state, avoid using:
```tsx
setCount(count - 1); // ❌ Can cause incorrect updates if multiple updates occur
```
Instead, use the **functional updater**:
```tsx
setCount(prevCount => prevCount - 1); // ✅ Ensures correct sequential updates
```
This ensures that each update is based on the most recent state, preventing potential bugs.

### 2️⃣ Avoiding Unnecessary Function Calls
If an initial state is derived from an **expensive computation**, calling it directly will execute it **on every render**:
```tsx
const [count, setCount] = useState(createInitialCount()); // ❌ Runs on every render
```
To prevent this, **pass the function reference** instead:
```tsx
const [count, setCount] = useState(createInitialCount); // ✅ Runs only on the first render
```
React will only call `createInitialCount` during the initial render and ignore it in subsequent renders, improving performance.

## 📄 Common Documentation
For installation instructions and an overview of the entire **Course**, refer to the main [README.md](../README.md) in the root folder.


