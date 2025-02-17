import { useEffect, useState } from "react";

export default function List({ getItems }) {
  const [items, setItems] = useState([]); // State for storing items

  /**
   * useEffect runs whenever `getItems` changes.
   * 
   * If `getItems` was not memoized using `useCallback`, this effect would run
   * on every render, leading to unnecessary state updates.
   */
  useEffect(() => {
    setItems(getItems()); // Calls the function to get new items
    console.log("Updating Items"); // Logs when `items` update
  }, [getItems]); // Only runs when `getItems` function reference changes

  return (
    items.map(item => <div key={item}>{item}</div>) // Rendering the list of items
  );
}
